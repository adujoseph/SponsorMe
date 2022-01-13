import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
// const suStr = stdlib.standardUnit;

(async () => {
  const isProjectOnwer = await ask(
    `Start as projec Owner?`,
    yesno
  );
  const who = isProjectOnwer ? 'projectOwner' : 'sponsor';

  console.log(`Starting DApp as ${who}`);

  let acc = null;
  const createAcc = await ask(
    `Would you like to create an account? (only possible on devnet)`,
    yesno
  );
  if (createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
  } else {
    const secret = await ask(
      `What is your account secret?`,
      (x => x)
    );
    acc = await stdlib.newAccountFromSecret(secret);
  }

  let ctc = null;
  if (isProjectOnwer) {
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
      console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
    });

  } else {
    const info = await ask(
      `Please paste the contract information:`,
      JSON.parse
    );
    ctc = acc.contract(backend, info);
  }

  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const getBalance = async () => fmt(await stdlib.balanceOf(acc));

  const before = await getBalance();
  console.log(`Your starting balance is ${before}`);

  const interact = {

  };

  if (isProjectOnwer) {
    const pInfo = {
    projectName: 'Project Sponsorship Project',
    projectDetails: 'This project needs sponsors',
    fundraisingGoal: toAU(20),
    contractDuration: 20,
    share: 5,
  };
    interact.projectInfo = pInfo
    console.log(`Project details: 
    Project name: ${pInfo.projectName}, 
    Project details: ${pInfo.projectDetails}, 
    Fundraising goal: ${toSU(pInfo.fundraisingGoal)}, 
    Contract duration (years): ${pInfo.contractDuration},
    Share in percentage: ${pInfo.share}`);
    interact.reportReady = async () => {
      console.log("Published project information")
  };

////


  } else {
    interact.sponsor = async (projectInfo) => {
      console.log(projectInfo);
      const sponsor = { contribute: false, amt: 0 };
      const confirm = await ask(`Do you agree to sponsor?`, yesno);
      if (confirm) {
        sponsor.contribute = confirm;
      } 
      return sponsor;
    };
  };

  let tok = null;
    const showBalance = async (tok) => {
      tok = tok
      console.log(`Checking ${tok} balance:`);
      console.log(`${tok} balance: ${fmt(await stdlib.balanceOf(acc, tok))}`);
    };

  if (!isProjectOnwer) {
    interact.reportPayment = async (fund) => {
      console.log(`You paid ${toSU(fund)} for the project...`)
    };
    interact.reportTransfer = async (fund) => {
      console.log(`Funds transfered`)
    };

    interact.reportTokenMinted = async (_tok, cmd) => {
      const tok = _tok;
      console.log(`The token is: ${tok}`);
      await showBalance(tok);
      // console.log(`${me}: The token computed metadata is:`, cmd);
      // const omd = await acc.tokenMetadata(tok);
      // console.log(`${me}: The token on-chain metadata is:`, omd);
      // for ( const f in cmd ) {
      //   assertEq(cmd[f], omd[f]);
      // }
      console.log(`Opt-in to ${tok}:`);
      await acc.tokenAccept(tok);
      await showBalance(tok);
  };
  interact.didTransfer = async (did, _amt) => {
    if ( did ) {
     const amt = _amt;
      console.log(`Received transfer of ${fmt(amt)} of token`);
    }
    await showBalance(tok);
    // This next line is weird.
    // console.log(`${me}: Doing transfer for ${tok}`);
    // await stdlib.transfer(acc, other, amt, tok);
    // await showBalance();
  };
  interact.showToken = (token) => {
      console.log(`Token: ${token}`);
  };
  interact.programEnded = () => {
    console.log("Program ended")
  };
} else {
    interact.reportPayment = async (fund) => {
    console.log(`Project Funded with ${fund}`)
    };
    interact.reportTransfer = async (fund) => {
      console.log(`Funds transfered`)
    };
    interact.getParams = () => ({
      name: `Pjc`, symbol: `PJC`,
      url: `https://sponsor.me/token`,
      metadata: `Project Coin!`,
      supply: stdlib.parseCurrency(1000),
      amt: stdlib.parseCurrency(10),
    });

    // interact.didTransfer = async ()
    

    interact.reportTokenMinted = async (_tok, cmd) => {
      const tok = _tok;
      console.log(`The token is: ${tok.toString()}`);
      await showBalance(tok);
      // console.log(`${me}: The token computed metadata is:`, cmd);
      const omd = await acc.tokenMetadata(tok);
      // console.log(`${me}: The token on-chain metadata is:`, omd);
      // for ( const f in cmd ) {
      //   assertEq(cmd[f], omd[f]);
      // }
      console.log(`Opt-in to ${tok}:`);
      await acc.tokenAccept(tok);
      await showBalance(tok);
    };
    interact.didTransfer = async (did, _amt) => {
      if ( did ) {
        const amt = _amt;
        console.log(`Received transfer of ${fmt(amt)} of Tokens`);
      }
      await showBalance(tok);
    };
    interact.showToken = (token) => {
        console.log(`Token: ${token}`);
    };
    interact.programEnded = () => {
      console.log("Program ended")
    };
  };



  const part = isProjectOnwer ? ctc.p.ProjectOwner : ctc.p.Sponsor;
  await part(interact);

  const after = await getBalance();
  console.log(`Your balance is now ${after}`);

  done();
})();