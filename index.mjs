import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';

if (process.argv.length < 3 || ['projectOwner', 'sponsor'].includes(process.argv[2]) == false) {
  console.log('Usage: reach run index [projectOwner|sponsor]');
  process.exit(0);
}
const role = process.argv[2];
console.log(`Your role is ${role}.`);

const stdlib = loadStdlib(process.env);
console.log(`The consensus network is ${stdlib.connector}.`);

const suStr = stdlib.standardUnit;
const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const iBalance = toAU(1000);
const showBalance = async (acc) => console.log(`Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`);

(async () => {

  const commonInteract = (role) => ({
    reportPayment: (payment) => console.log(`${role == 'sponsor' ? 'You' : 'The sponsor'} paid ${toSU(payment)} ${suStr} to the contract.`),
    reportTransfer: (payment) => console.log(`The contract paid ${toSU(payment)} ${suStr} to ${role == 'projectOwner' ? 'you' : 'the Project Owner'}.`),
    reportExit: () => { console.log('Exiting contract')},
    reportCancellation: () => { console.log(`${role == 'sponsor' ? 'You' : 'The Sponsor'} cancelled sponsorship.`); },
    reportTokenMinted: (minted) => {console.log(`Token was minted ${minted}`)},
    didTransfer: (did, amt) => {
      if ( did ) {
        amt = _amt;
        console.log(`${role}: Received transfer of ${toSU(amt)}`);
      }
      consol.log(`Token transfered ${amt}`)},
    programEnded: () => {console.log("Program ended")},
  });

  // SELLER
  if (role === 'projectOwner') {
    const projectOwnerInteract = {
      ...commonInteract(role),
      projectInfo: {
        projectName: 'Project Sponsorship Project',
        projectDetails: 'Solving Niger wahala',
        fundraisingGoal: toAU(20),
        contractDuration: 200,
      },
      reportReady: async () => { console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`); },
      getParams: () => ({
        name: `Gil`, symbol: `GIL`,
        url: `https://tinyurl.com/4nd2faer`,
        metadata: `It's shiny!`,
        supply: stdlib.parseCurrency(1000),
        amt: stdlib.parseCurrency(10),
      }),
      // reportReady: async () => { console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`); }
    };

    const acc = await stdlib.newTestAccount(iBalance);
    await showBalance(acc);
    const ctc = acc.contract(backend);
    await backend.ProjectOwner(ctc, projectOwnerInteract);
    await showBalance(acc);
  }

  // BUYER
  else {
    const sponsorInteract = {
      ...commonInteract(role),
      sponsor: async (projectInfo) => {
        console.log(projectInfo);
        const sponsor = { contribute: false, amt: 0 };
        const confirm = await ask(`Do you agree to sponsor?`, yesno);
        if (confirm) {
          // sponsor.amt = await ask(`Do you agree to sponsor?`, yesno);
          sponsor.contribute = confirm;
        }
        return sponsor;
      },
    };

    const acc = await stdlib.newTestAccount(iBalance);
    const info = await ask('Paste contract info:', (s) => JSON.parse(s));
    const ctc = acc.contract(backend, info);
    //console.log('BEGIN VIEW SECTION');
    //const sellerInfo = await ctc.views.Main.sellerInfo();
    //sellerInfo[1].products.forEach((p, i) => {
    //  console.log(`${i + 1}. ${p.name} at ${toSU(p.price)} ${suStr} per unit (${p.unit}).`);
    //});
    //console.log('END VIEW SECTION');
    await showBalance(acc);
    await ctc.p.Sponsor(sponsorInteract);
    await showBalance(acc);
  }

  done();
})();
