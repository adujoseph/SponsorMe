import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';

if (process.argv.length < 3 || ['seller', 'buyer'].includes(process.argv[2]) == false) {
  console.log('Usage: reach run index [seller|buyer]');
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
    reportPayment: (payment) => console.log(`${role == 'buyer' ? 'You' : 'The buyer'} paid ${toSU(payment)} ${suStr} to the contract.`),
    reportTransfer: (payment) => console.log(`The contract paid ${toSU(payment)} ${suStr} to ${role == 'seller' ? 'you' : 'the seller'}.`),
    reportCancellation: () => { console.log(`${role == 'buyer' ? 'You' : 'The buyer'} cancelled the order.`); },
    reportFulfillment: (p, amt) => { 
      const subjectVerb = role == 'seller' ? 'You owe' : 'The seller owes';
      const directObject = role == 'buyer' ? 'you' : 'the buyer';
      console.log(`${subjectVerb} ${directObject} ${amt} ${amt == 1 ? p.unit : p.units} of ${p.name}.`); 
    },
    reportExit: () => console.log(`Exiting contract.`)
  });

  // SELLER
  if (role === 'seller') {
    const sellerInteract = {
      ...commonInteract(role),
      sellerInfo: {
        announcement: 'List of products for sale:',
        products: [
          { name: 'Potatoes', unit: 'bag', units: 'bags', price: toAU(200) },
          { name: 'Carrots', unit: 'bunch', units: 'bunches', price: toAU(100) },
          { name: 'Corn', unit: 'ear', units: 'ears', price: toAU(50) }
        ]
      },
      reportReady: async () => { console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`); }
    };

    const acc = await stdlib.newTestAccount(iBalance);
    await showBalance(acc);
    const ctc = acc.contract(backend);
    await backend.Seller(ctc, sellerInteract);
    await showBalance(acc);
  }

  // BUYER
  else {
    const buyerInteract = {
      ...commonInteract(role),
      shop: async (sellerInfo) => {
        console.log(sellerInfo.announcement);
        sellerInfo.products.forEach((p, i) => {
          console.log(`${i + 1}. ${p.name} at ${toSU(p.price)} ${suStr} per unit (${p.unit}).`);
        });
        const order = { prodNum: 0, prodAmt: 0 };
        const prodNum = await ask(`Enter 1-${sellerInfo.products.length}, or 0 to exit:`, (x => x));
        if (1 <= prodNum && prodNum <= sellerInfo.products.length) {
          order.prodNum = prodNum;
          order.prodAmt = await ask(`Enter number of units, or 0 to exit:`, (x => x));
          const p = sellerInfo.products[order.prodNum - 1];
          const unitWord = order.prodAmt == 1 ? p.unit : p.units;
          console.log(`You are ordering ${order.prodAmt} ${unitWord} of ${p.name} at ${toSU(p.price)} ${suStr} per ${p.unit}.`);
        }
        return order;
      },
      confirmPurchase: async (total) => await ask(`Do you want to complete the purchase for ${toSU(total)} ${suStr}?`, yesno)
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
    await ctc.p.Buyer(buyerInteract);
    await showBalance(acc);
  }

  done();
})();
