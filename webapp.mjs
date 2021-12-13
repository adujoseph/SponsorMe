import * as backend from '/build/index.main.mjs';

let stdlib = null;
let suStr = null;
let iBalance = null;
let projectOwnerAcc = null;
let sponsorAcc = null;
let projectOwnerCtc = null;
let sponsorCtc = null;

const modal = new bootstrap.Modal(document.getElementById('confirm-modal'), { backdrop: false })

const writeLog = (role, msg) => {
  let el = document.getElementById(`${role}-log`);
  el.append(`${el.value ? '\n' : ''}${msg}`);
  el.scrollTop = el.scrollHeight;
};

const disableBtns = () => {
  const btns = document.querySelectorAll('button.dar').forEach((el) => {
    el.classList.remove('btn-success');
    el.classList.add('btn-secondary');
    el.disabled = true;
  });
};

const enableBtn = (id) => {
  disableBtns();
  const btn = document.getElementById(id);
  btn.classList.remove('btn-secondary');
  btn.classList.add('btn-success');
  btn.removeAttribute('disabled');
};

const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const showBalance = async (role, acc) => {
  let balance = toSU(await stdlib.balanceOf(acc));
  document.getElementById(`${role}-balance`).value = balance;
};

const commonInteract = (role) => ({
    reportPayment: (payment) => console.log(`${role == 'sponsor' ? 'You' : 'The sponsor'} paid ${toSU(payment)} ${suStr} to the contract.`),
    reportTransfer: (payment) => console.log(`The contract paid ${toSU(payment)} ${suStr} to ${role == 'projectOwner' ? 'you' : 'the Project Owner'}.`),
    reportExit: () => { console.log('Exiting contract')},
    reportCancellation: () => { console.log(`${role == 'sponsor' ? 'You' : 'The Sponsor'} cancelled sponsorship.`); },
    reportTokenMinted: (minted) => {console.log("Token was minted")},
    didTransfer: (did, _amt) => {consol.log()},
  });

// Listener for selecting a devnet
document.getElementById('devnets').addEventListener('change', (event) => {
  reachsdk.unsafeAllowMultipleStdlibs();
  stdlib = reachsdk.loadStdlib(document.getElementById('devnets').value);
  stdlib.setProviderByName('LocalHost');
  suStr = stdlib.standardUnit;
  iBalance = toAU(1000);

  (async () => {
    projectOwnerAcc = await stdlib.newTestAccount(iBalance);
    await showBalance('seller', projectOwnerAcc);
    sponsorAcc = await stdlib.newTestAccount(iBalance);
    await showBalance('buyer', sponsorAcc);
  })();

  document.getElementById('project-balance').value = '';
  document.getElementById('project-contract-info').value = '';
  document.getElementById('project-log').innerHTML = '';

  document.getElementById('sponsor-balance').value = '';
  document.getElementById('avalable-projects').innerHTML = '';
//   document.getElementById('quantities').innerHTML = '';
//   document.getElementById('price').value = '';
  document.getElementById('sponsor-log').innerHTML = '';

//   document.querySelectorAll('input.unit').forEach((el) => { el.value = suStr; });
  enableBtn('deploy-btn');
});

// Listener for clicking deploy btn
document.getElementById('deploy-btn').addEventListener('click', (event) => {
  (async () => {
    const sellerInteract = {
      ...commonInteract('seller'),
      projectInfo: {
        projectName: 'Project Sponsorship Project',
        projectDetails: 'Solving Niger wahala',
        fundraisingGoal: toAU(20),
        contractDuration: 200,
      },
      reportReady: async () => {
        document.getElementById('seller-contract-info').value = JSON.stringify(await sellerCtc.getInfo());
        enableBtn('view-btn');
      }
    };

    projectOwnerCtc = projectOwnerAcc.contract(backend);
    await backend.Seller(projectOwnerCtc, sellerInteract);
    await showBalance('seller', projectOwnerAcc);
  })();
});

const initQuantities = () => {
  let p = JSON.parse(document.getElementById('products').value);
  let unit = p.unit.replace(/\x00/g, '');
  let units = p.units.replace(/\x00/g, '');
  let quantitiesSel = document.getElementById('quantities');
  quantitiesSel.innerHTML = ''
  for (let i = 0; i < 4; i++) {
    let opt = document.createElement("option");
    opt.text = `${i + 1} ${i == 0 ? unit : units}`;
    opt.value = i + 1;
    quantitiesSel.add(opt);
  }
  document.getElementById('price').value = p.price * quantitiesSel.value;
}

// Listener for clicking view btn
document.getElementById('view-btn').addEventListener('click', (event) => {
  (async () => {
    const info = JSON.parse(document.getElementById('seller-contract-info').value);
    sponsorCtc = sponsorAcc.contract(backend, info);
    const sellerInfo = await sponsorCtc.views.Main.sellerInfo();
    if (sellerInfo[0] == 'Some') {
      let productsSel = document.getElementById('products');
      sellerInfo[1].products.forEach((p, i) => {
        let opt = document.createElement("option");
        opt.text = `${p.name.replace(/\x00/g, '')} @ ${toSU(p.price)} ${suStr} / ${p.unit.replace(/\x00/g, '')}`;
        opt.value = `{
          "num":${i + 1},
          "name":"${p.name.replace(/\x00/g, '')}",
          "price":${toSU(p.price)},
          "unit":"${p.unit.replace(/\x00/g, '')}",
          "units":"${p.units.replace(/\x00/g, '')}"
        }`;
        productsSel.add(opt);
      });
      initQuantities();
      enableBtn('attach-btn');
    }
  })();
});

// Listener for clicking attach btn
document.getElementById('attach-btn').addEventListener('click', (event) => {
  (async () => {
    document.querySelector('div.modal-body span').innerHTML = JSON.parse(document.getElementById('products').value).name.toLowerCase();
    modal.show();
    disableBtns();
  })();
});

// Listener for clicking yes btn
document.getElementById('yes-btn').addEventListener('click', (event) => {
  (async () => {
    const buyerInteract = {
      ...commonInteract('buyer'),
      shop: async (sellerInfo) => {
        const order = {
          prodNum: JSON.parse(document.getElementById('products').value).num,
          prodAmt: document.getElementById('quantities').value
        };
        return order;
      },
      confirmPurchase: (total) => {
        enableBtn('reset-btn');
        return true;
      }
    };

    // await backend.Buyer(buyerCtc, buyerInteract);
    await sponsorCtc.p.Buyer(buyerInteract)
    await showBalance('buyer', sponsorAcc);
  })();
});

// Listener for clicking no btn
document.querySelectorAll('#no-btn, #close-btn').forEach(el => {
  el.addEventListener('click', (event) => {
    enableBtn('reset-btn');
  });
});

// Listener for clicking reset btn
document.getElementById('reset-btn').addEventListener('click', (event) => {
  document.getElementById('seller-contract-info').value = '';
  document.getElementById('products').innerHTML = '';
  document.getElementById('quantities').innerHTML = '';
  document.getElementById('price').value = '';
  enableBtn('deploy-btn');
});

// Listener for changing products select
document.getElementById('products').addEventListener('change', (event) => {
  initQuantities();
});

// Listener for changing quantity select
document.getElementById('quantities').addEventListener('change', (event) => {
  let p = JSON.parse(document.getElementById('products').value);
  document.getElementById('price').value = p.price * event.target.value;
});