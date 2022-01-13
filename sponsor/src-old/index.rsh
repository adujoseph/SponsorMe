/* eslint-disable*/
"reach 0.1";
const projectName = Bytes(28);
const projectDetails = Bytes(28);
const fundraisingGoal = UInt;
const contractDuration = UInt;
const share = UInt;

const commonInteract = {
  reportPayment: Fun([UInt], Null),
  reportTransfer: Fun([UInt], Null),
  reportExit: Fun([], Null),
  reportCancellation: Fun([], Null),
  reportTokenMinted: Fun(true, Null),
  didTransfer: Fun([Bool, UInt], Null),
  programEnded: Fun([], Null),
  showToken: Fun([Token], Null),
};

const projectOwnerInteract = {
  ...commonInteract,
  projectInfo: Object({
    projectName: projectName,
    projectDetails: projectDetails,
    fundraisingGoal: fundraisingGoal,
    contractDuration: contractDuration,
    share: share,
  }),
  reportReady: Fun([], Null),
  getParams: Fun(
    [],
    Object({
      name: Bytes(32),
      symbol: Bytes(8),
      url: Bytes(96),
      metadata: Bytes(32),
      supply: UInt,
      amt: UInt,
    })
  ),
  // releaseTokenGradually: Fun([], Bool),
};

const sponsorInteract = {
  ...commonInteract,
  sponsor: Fun(
    [
      Object({
        projectName: projectName,
        projectDetails: projectDetails,
        fundraisingGoal: fundraisingGoal,
        contractDuration: contractDuration,
        share: share,
      }),
    ],
    Object({ contribute: Bool, amt: UInt })
  ),
  // confirmAgreeToSponsor: Fun([UInt], Bool),
};

export const main = Reach.App(() => {
  const PO = Participant("ProjectOwner", projectOwnerInteract);
  const S = Participant("Sponsor", sponsorInteract);
  init(); // deploy function takes you to the Step mode

  PO.only(() => {
    const projectInfo = declassify(interact.projectInfo);
  });
  PO.publish(projectInfo);

  PO.interact.reportReady();

  commit();

  S.only(() => {
    const sponsor = declassify(interact.sponsor(projectInfo));
  });
  S.publish(sponsor);
  if (sponsor.contribute == false) {
    commit();
    each([S, PO], () => interact.reportCancellation());
    each([S, PO], () => interact.reportExit());
    exit();
  } else {
    commit();
  }

  PO.only(() => {
    const fund = projectInfo.fundraisingGoal;
  });

  PO.publish(fund);
  commit();


  S.pay(fund);
  each([PO, S], () => interact.reportPayment(fund));
  transfer(fund).to(PO);
  each([PO, S], () => interact.reportTransfer(fund));
  commit();

  // Get token details and mint
  PO.only(() => {
    const { name, symbol, url, metadata, supply, amt } = declassify(
      interact.getParams()
    );
  });

  PO.publish(name, symbol, url, metadata, supply, amt);

  // Token metadata
  const md1 = { name, symbol, url, metadata, supply };
  // Minting token here
  const tok1 = new Token(md1);
  PO.interact.reportTokenMinted(tok1, md1);
  commit();

  S.publish();
  S.interact.reportTokenMinted(tok1, md1);
  commit();
 
  
  // Todo: Add statement for gradual release of funds...
  
  
  // const [contractDuration, ]

  const doTransfer1 = (who, tokX) => {
    if (who == PO && balance(tokX) >= (40 * supply) / 100) {
      transfer((40 * supply) / 100, tokX).to(who);
      who.interact.didTransfer(true, (40 * supply) / 100);
    } else {
      if (balance(tokX) >= (40 * supply) / 100) {
        transfer((40 * supply) / 100, tokX).to(who);
        who.interact.didTransfer(true, (40 * supply) / 100);
      }
    }
  };

  S.publish();
  doTransfer1(S, tok1);
  S.interact.showToken(tok1);
  commit();
  PO.publish();
  doTransfer1(PO, tok1);
  PO.interact.showToken(tok1);
  commit();

  S.publish();
  transfer(balance(tok1), tok1).to(PO);
  each([PO, S], () => interact.programEnded());
  var [] = [];
  invariant(true);
  while (true) {
    commit();
    S.publish();
    continue;
  }
  tok1.burn(supply);
  tok1.destroy();
  commit();
  each([PO, S], () => interact.reportExit());
  exit();
});
