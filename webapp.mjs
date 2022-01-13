import * as backend from '/build/index.main.mjs';

let stdlib = null;
let suStr = null;
let iBalance = null;
let sellerAcc = null;
let buyerAcc = null;
let sellerCtc = null;
let buyerCtc = null;

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
  reportPayment: (payment) => writeLog(role, `${role == 'buyer' ? 'You' : 'The buyer'} paid ${toSU(payment)} ${suStr} to the contract.`),
  reportTransfer: (payment) => writeLog(role, `The contract paid ${toSU(payment)} ${suStr} to ${role == 'seller' ? 'you' : 'the seller'}.`),
  reportCancellation: () => { writeLog(role, `${role == 'buyer' ? 'You' : 'The buyer'} cancelled the order.`); },
  reportFulfillment: (p, amt) => {
    const subjectVerb = role == 'seller' ? 'You owe' : 'The seller owes';
    const directObject = role == 'buyer' ? 'you' : 'the buyer';
    writeLog(role, `${subjectVerb} ${directObject} ${amt} ${amt == 1 ? p.unit : p.units} of ${p.name}.`);
  },
  reportExit: () => writeLog(role, `Exiting contract.`)
});

// Listener for selecting a devnet
document.getElementById('devnets').addEventListener('change', (event) => {
  reachsdk.unsafeAllowMultipleStdlibs();
  stdlib = reachsdk.loadStdlib(document.getElementById('devnets').value);
  stdlib.setProviderByName('LocalHost');
  suStr = stdlib.standardUnit;
  iBalance = toAU(1000);

  (async () => {
    sellerAcc = await stdlib.newTestAccount(iBalance);
    await showBalance('seller', sellerAcc);
    buyerAcc = await stdlib.newTestAccount(iBalance);
    await showBalance('buyer', buyerAcc);
  })();

  document.getElementById('seller-balance').value = '';
  document.getElementById('seller-contract-info').value = '';
  document.getElementById('seller-log').innerHTML = '';

  document.getElementById('buyer-balance').value = '';
  document.getElementById('products').innerHTML = '';
  document.getElementById('quantities').innerHTML = '';
  document.getElementById('price').value = '';
  document.getElementById('buyer-log').innerHTML = '';

  document.querySelectorAll('input.unit').forEach((el) => { el.value = suStr; });
  enableBtn('deploy-btn');
});

// Listener for clicking deploy btn
document.getElementById('deploy-btn').addEventListener('click', (event) => {
  (async () => {
    const sellerInteract = {
      ...commonInteract('seller'),
      sellerInfo: {
        announcement: 'List of products for sale:',
        products: [
          { name: 'Potatoes', unit: 'bag', units: 'bags', price: toAU(200) },
          { name: 'Carrots', unit: 'bunch', units: 'bunches', price: toAU(100) },
          { name: 'Corn', unit: 'ear', units: 'ears', price: toAU(50) }
        ]
      },
      reportReady: async () => {
        document.getElementById('seller-contract-info').value = JSON.stringify(await sellerCtc.getInfo());
        enableBtn('view-btn');
      }
    };

    sellerCtc = sellerAcc.contract(backend);
    await backend.Seller(sellerCtc, sellerInteract);
    await showBalance('seller', sellerAcc);
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
    buyerCtc = buyerAcc.contract(backend, info);
    const sellerInfo = await buyerCtc.views.Main.sellerInfo();
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
    await buyerCtc.p.Buyer(buyerInteract)
    await showBalance('buyer', buyerAcc);
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