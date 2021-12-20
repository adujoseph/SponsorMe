// Automatically generated with Reach 0.1.7 (b34d92ae)
/* eslint-disable */
export const _version = '0.1.7';
export const _versionHash = '0.1.7 (b34d92ae)';
export const _backendVersion = 6;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc0],
      3: [ctc0, ctc0, ctc1],
      4: [ctc0, ctc0],
      5: [ctc0, ctc0, ctc1, ctc2],
      6: [ctc0, ctc0, ctc1, ctc2],
      7: [ctc0, ctc0, ctc1, ctc2, ctc1, ctc1],
      8: [ctc0, ctc0, ctc1, ctc2, ctc1],
      11: [ctc0, ctc1, ctc2],
      12: [ctc0, ctc0, ctc1, ctc2, ctc1],
      15: [ctc0, ctc1, ctc2],
      16: [ctc0, ctc0, ctc1, ctc2, ctc1],
      19: [ctc0, ctc1, ctc2],
      20: [ctc0, ctc0, ctc1, ctc2, ctc1, ctc1],
      21: [ctc0, ctc0, ctc1, ctc2, ctc1],
      24: [ctc0, ctc1, ctc2],
      25: [ctc0, ctc0, ctc1, ctc2, ctc1],
      28: [ctc0, ctc1, ctc2],
      29: [ctc0, ctc0, ctc1, ctc2, ctc1],
      32: [ctc0, ctc1, ctc2],
      33: [ctc0, ctc0, ctc1, ctc2, ctc1, ctc3],
      34: [ctc0, ctc0, ctc1, ctc2, ctc1],
      37: [ctc0, ctc1, ctc2],
      38: [ctc0, ctc0, ctc1, ctc2, ctc1],
      41: [ctc0, ctc1, ctc2],
      42: [ctc0, ctc0, ctc1, ctc2],
      45: [ctc0, ctc1, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function ProjectOwner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for ProjectOwner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for ProjectOwner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 28));
  const ctc2 = stdlib.T_Object({
    fundraisingGoal: ctc0,
    projectDetails: ctc1,
    projectName: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    amt: ctc0,
    contribute: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 96));
  const ctc9 = stdlib.T_Object({
    amt: ctc0,
    metadata: ctc6,
    name: ctc6,
    supply: ctc0,
    symbol: ctc7,
    url: ctc8
    });
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Address;
  
  
  const v350 = stdlib.protect(ctc2, interact.projectInfo, 'for ProjectOwner\'s interact field projectInfo');
  
  const txn1 = await (ctc.sendrecv({
    args: [v350],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:6:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v354], secs: v356, time: v355, didSend: v24, from: v353 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v354], secs: v356, time: v355, didSend: v24, from: v353 } = txn1;
  ;
  stdlib.protect(ctc3, await interact.reportReady(), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:45:26:application call to "liftedInteract" (defined at: ./index.rsh:45:26:application)'],
    msg: 'reportReady',
    who: 'ProjectOwner'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc5],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v363], secs: v365, time: v364, didSend: v38, from: v362 } = txn2;
  ;
  const v367 = v363.contribute;
  if (v367) {
    const v377 = v354.fundraisingGoal;
    
    const txn3 = await (ctc.sendrecv({
      args: [v353, v362, v377],
      evt_cnt: 1,
      funcNum: 2,
      lct: v364,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v379], secs: v381, time: v380, didSend: v65, from: v378 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v383 = stdlib.addressEq(v353, v378);
        stdlib.assert(v383, {
          at: './index.rsh:64:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc11, ctc11, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v379], secs: v381, time: v380, didSend: v65, from: v378 } = txn3;
    ;
    const v383 = stdlib.addressEq(v353, v378);
    stdlib.assert(v383, {
      at: './index.rsh:64:6:dot',
      fs: [],
      msg: 'sender correct',
      who: 'ProjectOwner'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v386, time: v385, didSend: v72, from: v384 } = txn4;
    ;
    const v389 = stdlib.addressEq(v362, v384);
    stdlib.assert(v389, {
      at: './index.rsh:70:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'ProjectOwner'
      });
    stdlib.protect(ctc3, await interact.reportPayment(v379), {
      at: './index.rsh:72:45:application',
      fs: ['at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:20:function exp)'],
      msg: 'reportPayment',
      who: 'ProjectOwner'
      });
    
    ;
    stdlib.protect(ctc3, await interact.reportTransfer(v379), {
      at: './index.rsh:74:46:application',
      fs: ['at ./index.rsh:74:7:application call to [unknown function] (defined at: ./index.rsh:74:20:function exp)'],
      msg: 'reportTransfer',
      who: 'ProjectOwner'
      });
    
    const v400 = stdlib.protect(ctc9, await interact.getParams(), {
      at: './index.rsh:77:100:application',
      fs: ['at ./index.rsh:77:10:application call to [unknown function] (defined at: ./index.rsh:77:14:function exp)'],
      msg: 'getParams',
      who: 'ProjectOwner'
      });
    const v401 = v400.name;
    const v402 = v400.symbol;
    const v403 = v400.url;
    const v404 = v400.metadata;
    const v405 = v400.supply;
    const v406 = v400.amt;
    
    const txn5 = await (ctc.sendrecv({
      args: [v353, v362, v401, v402, v403, v404, v405, v406],
      evt_cnt: 6,
      funcNum: 4,
      lct: v385,
      onlyIf: true,
      out_tys: [ctc6, ctc7, ctc8, ctc6, ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v408, v409, v410, v411, v412, v413], secs: v415, time: v414, didSend: v110, from: v407 } = txn5;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v417 = stdlib.addressEq(v353, v407);
        stdlib.assert(v417, {
          at: './index.rsh:80:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        const v418 = stdlib.simTokenNew(sim_r, v408, v409, v410, v411, v412, undefined);
        const v419 = await txn5.getOutput('tokenNew', 'v418', ctc10, v418);
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc11, ctc11, ctc6, ctc7, ctc8, ctc6, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v408, v409, v410, v411, v412, v413], secs: v415, time: v414, didSend: v110, from: v407 } = txn5;
    ;
    const v417 = stdlib.addressEq(v353, v407);
    stdlib.assert(v417, {
      at: './index.rsh:80:6:dot',
      fs: [],
      msg: 'sender correct',
      who: 'ProjectOwner'
      });
    const v418 = undefined;
    const v419 = await txn5.getOutput('tokenNew', 'v418', ctc10, v418);
    const v421 = {
      metadata: v411,
      name: v408,
      supply: v412,
      symbol: v409,
      url: v410
      };
    stdlib.protect(ctc3, await interact.reportTokenMinted(v419, v421), {
      at: './index.rsh:1:39:application',
      fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:84:32:application call to "liftedInteract" (defined at: ./index.rsh:84:32:application)'],
      msg: 'reportTokenMinted',
      who: 'ProjectOwner'
      });
    
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v424, time: v423, didSend: v123, from: v422 } = txn6;
    ;
    const v426 = stdlib.addressEq(v362, v422);
    stdlib.assert(v426, {
      at: './index.rsh:87:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'ProjectOwner'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 6,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v431, time: v430, didSend: v134, from: v429 } = txn7;
    ;
    const v433 = stdlib.addressEq(v362, v429);
    stdlib.assert(v433, {
      at: './index.rsh:103:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'ProjectOwner'
      });
    const v434 = stdlib.addressEq(v362, v353);
    const v436 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, 40), v412);
    const v437 = stdlib.div(v436, stdlib.checkedBigNumberify('./index.rsh:92:51:decimal', stdlib.UInt_max, 100));
    const v438 = stdlib.ge(v412, v437);
    const v439 = v434 ? v438 : false;
    if (v439) {
      const v445 = stdlib.sub(v412, v437);
      ;
      const txn8 = await (ctc.sendrecv({
        args: [v353, v362, v412, v419, v437, v445],
        evt_cnt: 0,
        funcNum: 7,
        lct: v430,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v452, time: v451, didSend: v175, from: v450 } = txn8;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v454 = stdlib.addressEq(v353, v450);
          stdlib.assert(v454, {
            at: './index.rsh:106:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          const v455 = stdlib.addressEq(v353, v353);
          const v459 = stdlib.ge(v445, v437);
          const v460 = v455 ? v459 : false;
          if (v460) {
            const v466 = stdlib.sub(v445, v437);
            sim_r.txns.push({
              amt: v437,
              kind: 'from',
              to: v353,
              tok: v419
              });
            
            sim_r.isHalt = false;
            }
          else {
            if (v459) {
              const v525 = stdlib.sub(v445, v437);
              sim_r.txns.push({
                amt: v437,
                kind: 'from',
                to: v353,
                tok: v419
                });
              
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }}
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc11, ctc11, ctc0, ctc10, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v452, time: v451, didSend: v175, from: v450 } = txn8;
      ;
      const v454 = stdlib.addressEq(v353, v450);
      stdlib.assert(v454, {
        at: './index.rsh:106:6:dot',
        fs: [],
        msg: 'sender correct',
        who: 'ProjectOwner'
        });
      const v455 = stdlib.addressEq(v353, v353);
      const v459 = stdlib.ge(v445, v437);
      const v460 = v455 ? v459 : false;
      if (v460) {
        const v466 = stdlib.sub(v445, v437);
        ;
        stdlib.protect(ctc3, await interact.didTransfer(true, v437), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:94:29:application call to "liftedInteract" (defined at: ./index.rsh:94:29:application)', 'at ./index.rsh:107:14:application call to "doTransfer1" (defined at: ./index.rsh:91:33:function exp)'],
          msg: 'didTransfer',
          who: 'ProjectOwner'
          });
        
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 8,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v473, time: v472, didSend: v216, from: v471 } = txn9;
        ;
        const v475 = stdlib.addressEq(v362, v471);
        stdlib.assert(v475, {
          at: './index.rsh:110:4:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        ;
        stdlib.protect(ctc3, await interact.programEnded(), {
          at: './index.rsh:112:43:application',
          fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
          msg: 'programEnded',
          who: 'ProjectOwner'
          });
        
        let v483 = v472;
        
        while (await (async () => {
          
          return true;})()) {
          const txn10 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 10,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v495, time: v494, didSend: v235, from: v493 } = txn10;
          ;
          const v497 = stdlib.addressEq(v362, v493);
          stdlib.assert(v497, {
            at: './index.rsh:117:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          const cv483 = v494;
          
          v483 = cv483;
          
          continue;
          
          }
        undefined;
        undefined;
        stdlib.protect(ctc3, await interact.reportExit(), {
          at: './index.rsh:126:42:application',
          fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
          msg: 'reportExit',
          who: 'ProjectOwner'
          });
        
        return;
        
        
        }
      else {
        if (v459) {
          const v525 = stdlib.sub(v445, v437);
          ;
          stdlib.protect(ctc3, await interact.didTransfer(true, v437), {
            at: './index.rsh:1:39:application',
            fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:98:29:application call to "liftedInteract" (defined at: ./index.rsh:98:29:application)', 'at ./index.rsh:107:14:application call to "doTransfer1" (defined at: ./index.rsh:91:33:function exp)'],
            msg: 'didTransfer',
            who: 'ProjectOwner'
            });
          
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 11,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v532, time: v531, didSend: v216, from: v530 } = txn9;
          ;
          const v534 = stdlib.addressEq(v362, v530);
          stdlib.assert(v534, {
            at: './index.rsh:110:4:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          ;
          stdlib.protect(ctc3, await interact.programEnded(), {
            at: './index.rsh:112:43:application',
            fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
            msg: 'programEnded',
            who: 'ProjectOwner'
            });
          
          let v542 = v531;
          
          while (await (async () => {
            
            return true;})()) {
            const txn10 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 13,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v554, time: v553, didSend: v235, from: v552 } = txn10;
            ;
            const v556 = stdlib.addressEq(v362, v552);
            stdlib.assert(v556, {
              at: './index.rsh:117:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            const cv542 = v553;
            
            v542 = cv542;
            
            continue;
            
            }
          undefined;
          undefined;
          stdlib.protect(ctc3, await interact.reportExit(), {
            at: './index.rsh:126:42:application',
            fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
            msg: 'reportExit',
            who: 'ProjectOwner'
            });
          
          return;
          
          
          }
        else {
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 14,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v578, time: v577, didSend: v216, from: v576 } = txn9;
          ;
          const v580 = stdlib.addressEq(v362, v576);
          stdlib.assert(v580, {
            at: './index.rsh:110:4:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          ;
          stdlib.protect(ctc3, await interact.programEnded(), {
            at: './index.rsh:112:43:application',
            fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
            msg: 'programEnded',
            who: 'ProjectOwner'
            });
          
          let v588 = v577;
          
          while (await (async () => {
            
            return true;})()) {
            const txn10 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 16,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v600, time: v599, didSend: v235, from: v598 } = txn10;
            ;
            const v602 = stdlib.addressEq(v362, v598);
            stdlib.assert(v602, {
              at: './index.rsh:117:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            const cv588 = v599;
            
            v588 = cv588;
            
            continue;
            
            }
          undefined;
          undefined;
          stdlib.protect(ctc3, await interact.reportExit(), {
            at: './index.rsh:126:42:application',
            fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
            msg: 'reportExit',
            who: 'ProjectOwner'
            });
          
          return;
          
          
          }}
      
      }
    else {
      if (v438) {
        const v630 = stdlib.sub(v412, v437);
        ;
        const txn8 = await (ctc.sendrecv({
          args: [v353, v362, v412, v419, v437, v630],
          evt_cnt: 0,
          funcNum: 17,
          lct: v430,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn8) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v637, time: v636, didSend: v175, from: v635 } = txn8;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v639 = stdlib.addressEq(v353, v635);
            stdlib.assert(v639, {
              at: './index.rsh:106:6:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            const v640 = stdlib.addressEq(v353, v353);
            const v644 = stdlib.ge(v630, v437);
            const v645 = v640 ? v644 : false;
            if (v645) {
              const v651 = stdlib.sub(v630, v437);
              sim_r.txns.push({
                amt: v437,
                kind: 'from',
                to: v353,
                tok: v419
                });
              
              sim_r.isHalt = false;
              }
            else {
              if (v644) {
                const v710 = stdlib.sub(v630, v437);
                sim_r.txns.push({
                  amt: v437,
                  kind: 'from',
                  to: v353,
                  tok: v419
                  });
                
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc11, ctc11, ctc0, ctc10, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v637, time: v636, didSend: v175, from: v635 } = txn8;
        ;
        const v639 = stdlib.addressEq(v353, v635);
        stdlib.assert(v639, {
          at: './index.rsh:106:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        const v640 = stdlib.addressEq(v353, v353);
        const v644 = stdlib.ge(v630, v437);
        const v645 = v640 ? v644 : false;
        if (v645) {
          const v651 = stdlib.sub(v630, v437);
          ;
          stdlib.protect(ctc3, await interact.didTransfer(true, v437), {
            at: './index.rsh:1:39:application',
            fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:94:29:application call to "liftedInteract" (defined at: ./index.rsh:94:29:application)', 'at ./index.rsh:107:14:application call to "doTransfer1" (defined at: ./index.rsh:91:33:function exp)'],
            msg: 'didTransfer',
            who: 'ProjectOwner'
            });
          
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 18,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v658, time: v657, didSend: v216, from: v656 } = txn9;
          ;
          const v660 = stdlib.addressEq(v362, v656);
          stdlib.assert(v660, {
            at: './index.rsh:110:4:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          ;
          stdlib.protect(ctc3, await interact.programEnded(), {
            at: './index.rsh:112:43:application',
            fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
            msg: 'programEnded',
            who: 'ProjectOwner'
            });
          
          let v668 = v657;
          
          while (await (async () => {
            
            return true;})()) {
            const txn10 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 20,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v680, time: v679, didSend: v235, from: v678 } = txn10;
            ;
            const v682 = stdlib.addressEq(v362, v678);
            stdlib.assert(v682, {
              at: './index.rsh:117:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            const cv668 = v679;
            
            v668 = cv668;
            
            continue;
            
            }
          undefined;
          undefined;
          stdlib.protect(ctc3, await interact.reportExit(), {
            at: './index.rsh:126:42:application',
            fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
            msg: 'reportExit',
            who: 'ProjectOwner'
            });
          
          return;
          
          
          }
        else {
          if (v644) {
            const v710 = stdlib.sub(v630, v437);
            ;
            stdlib.protect(ctc3, await interact.didTransfer(true, v437), {
              at: './index.rsh:1:39:application',
              fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:98:29:application call to "liftedInteract" (defined at: ./index.rsh:98:29:application)', 'at ./index.rsh:107:14:application call to "doTransfer1" (defined at: ./index.rsh:91:33:function exp)'],
              msg: 'didTransfer',
              who: 'ProjectOwner'
              });
            
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 21,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v717, time: v716, didSend: v216, from: v715 } = txn9;
            ;
            const v719 = stdlib.addressEq(v362, v715);
            stdlib.assert(v719, {
              at: './index.rsh:110:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            ;
            stdlib.protect(ctc3, await interact.programEnded(), {
              at: './index.rsh:112:43:application',
              fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
              msg: 'programEnded',
              who: 'ProjectOwner'
              });
            
            let v727 = v716;
            
            while (await (async () => {
              
              return true;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 23,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v739, time: v738, didSend: v235, from: v737 } = txn10;
              ;
              const v741 = stdlib.addressEq(v362, v737);
              stdlib.assert(v741, {
                at: './index.rsh:117:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              const cv727 = v738;
              
              v727 = cv727;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc3, await interact.reportExit(), {
              at: './index.rsh:126:42:application',
              fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
              msg: 'reportExit',
              who: 'ProjectOwner'
              });
            
            return;
            
            
            }
          else {
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 24,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v763, time: v762, didSend: v216, from: v761 } = txn9;
            ;
            const v765 = stdlib.addressEq(v362, v761);
            stdlib.assert(v765, {
              at: './index.rsh:110:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            ;
            stdlib.protect(ctc3, await interact.programEnded(), {
              at: './index.rsh:112:43:application',
              fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
              msg: 'programEnded',
              who: 'ProjectOwner'
              });
            
            let v773 = v762;
            
            while (await (async () => {
              
              return true;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 26,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v785, time: v784, didSend: v235, from: v783 } = txn10;
              ;
              const v787 = stdlib.addressEq(v362, v783);
              stdlib.assert(v787, {
                at: './index.rsh:117:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              const cv773 = v784;
              
              v773 = cv773;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc3, await interact.reportExit(), {
              at: './index.rsh:126:42:application',
              fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
              msg: 'reportExit',
              who: 'ProjectOwner'
              });
            
            return;
            
            
            }}
        
        }
      else {
        const txn8 = await (ctc.sendrecv({
          args: [v353, v362, v412, v419, v437, v438],
          evt_cnt: 0,
          funcNum: 27,
          lct: v430,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn8) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v809, time: v808, didSend: v175, from: v807 } = txn8;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v811 = stdlib.addressEq(v353, v807);
            stdlib.assert(v811, {
              at: './index.rsh:106:6:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            const v812 = stdlib.addressEq(v353, v353);
            const v817 = v812 ? v438 : false;
            if (v817) {
              const v823 = stdlib.sub(v412, v437);
              sim_r.txns.push({
                amt: v437,
                kind: 'from',
                to: v353,
                tok: v419
                });
              
              sim_r.isHalt = false;
              }
            else {
              if (v438) {
                const v882 = stdlib.sub(v412, v437);
                sim_r.txns.push({
                  amt: v437,
                  kind: 'from',
                  to: v353,
                  tok: v419
                  });
                
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc11, ctc11, ctc0, ctc10, ctc0, ctc4],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v809, time: v808, didSend: v175, from: v807 } = txn8;
        ;
        const v811 = stdlib.addressEq(v353, v807);
        stdlib.assert(v811, {
          at: './index.rsh:106:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        const v812 = stdlib.addressEq(v353, v353);
        const v817 = v812 ? v438 : false;
        if (v817) {
          const v823 = stdlib.sub(v412, v437);
          ;
          stdlib.protect(ctc3, await interact.didTransfer(true, v437), {
            at: './index.rsh:1:39:application',
            fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:94:29:application call to "liftedInteract" (defined at: ./index.rsh:94:29:application)', 'at ./index.rsh:107:14:application call to "doTransfer1" (defined at: ./index.rsh:91:33:function exp)'],
            msg: 'didTransfer',
            who: 'ProjectOwner'
            });
          
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 28,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v830, time: v829, didSend: v216, from: v828 } = txn9;
          ;
          const v832 = stdlib.addressEq(v362, v828);
          stdlib.assert(v832, {
            at: './index.rsh:110:4:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          ;
          stdlib.protect(ctc3, await interact.programEnded(), {
            at: './index.rsh:112:43:application',
            fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
            msg: 'programEnded',
            who: 'ProjectOwner'
            });
          
          let v840 = v829;
          
          while (await (async () => {
            
            return true;})()) {
            const txn10 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 30,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v852, time: v851, didSend: v235, from: v850 } = txn10;
            ;
            const v854 = stdlib.addressEq(v362, v850);
            stdlib.assert(v854, {
              at: './index.rsh:117:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            const cv840 = v851;
            
            v840 = cv840;
            
            continue;
            
            }
          undefined;
          undefined;
          stdlib.protect(ctc3, await interact.reportExit(), {
            at: './index.rsh:126:42:application',
            fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
            msg: 'reportExit',
            who: 'ProjectOwner'
            });
          
          return;
          
          
          }
        else {
          if (v438) {
            const v882 = stdlib.sub(v412, v437);
            ;
            stdlib.protect(ctc3, await interact.didTransfer(true, v437), {
              at: './index.rsh:1:39:application',
              fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:98:29:application call to "liftedInteract" (defined at: ./index.rsh:98:29:application)', 'at ./index.rsh:107:14:application call to "doTransfer1" (defined at: ./index.rsh:91:33:function exp)'],
              msg: 'didTransfer',
              who: 'ProjectOwner'
              });
            
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 31,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v889, time: v888, didSend: v216, from: v887 } = txn9;
            ;
            const v891 = stdlib.addressEq(v362, v887);
            stdlib.assert(v891, {
              at: './index.rsh:110:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            ;
            stdlib.protect(ctc3, await interact.programEnded(), {
              at: './index.rsh:112:43:application',
              fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
              msg: 'programEnded',
              who: 'ProjectOwner'
              });
            
            let v899 = v888;
            
            while (await (async () => {
              
              return true;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 33,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v911, time: v910, didSend: v235, from: v909 } = txn10;
              ;
              const v913 = stdlib.addressEq(v362, v909);
              stdlib.assert(v913, {
                at: './index.rsh:117:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              const cv899 = v910;
              
              v899 = cv899;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc3, await interact.reportExit(), {
              at: './index.rsh:126:42:application',
              fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
              msg: 'reportExit',
              who: 'ProjectOwner'
              });
            
            return;
            
            
            }
          else {
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 34,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v935, time: v934, didSend: v216, from: v933 } = txn9;
            ;
            const v937 = stdlib.addressEq(v362, v933);
            stdlib.assert(v937, {
              at: './index.rsh:110:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            ;
            stdlib.protect(ctc3, await interact.programEnded(), {
              at: './index.rsh:112:43:application',
              fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
              msg: 'programEnded',
              who: 'ProjectOwner'
              });
            
            let v945 = v934;
            
            while (await (async () => {
              
              return true;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 36,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v957, time: v956, didSend: v235, from: v955 } = txn10;
              ;
              const v959 = stdlib.addressEq(v362, v955);
              stdlib.assert(v959, {
                at: './index.rsh:117:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              const cv945 = v956;
              
              v945 = cv945;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc3, await interact.reportExit(), {
              at: './index.rsh:126:42:application',
              fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
              msg: 'reportExit',
              who: 'ProjectOwner'
              });
            
            return;
            
            
            }}
        
        }}
    
    
    
    
    
    
    
    
    
    }
  else {
    stdlib.protect(ctc3, await interact.reportCancellation(), {
      at: './index.rsh:54:52:application',
      fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:22:function exp)'],
      msg: 'reportCancellation',
      who: 'ProjectOwner'
      });
    
    stdlib.protect(ctc3, await interact.reportExit(), {
      at: './index.rsh:55:44:application',
      fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:22:function exp)'],
      msg: 'reportExit',
      who: 'ProjectOwner'
      });
    
    return;
    }
  
  
  
  };
export async function Sponsor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Sponsor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Sponsor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 28));
  const ctc2 = stdlib.T_Object({
    fundraisingGoal: ctc0,
    projectDetails: ctc1,
    projectName: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    amt: ctc0,
    contribute: ctc3
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 96));
  const ctc9 = stdlib.T_Token;
  const ctc10 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc2],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v354], secs: v356, time: v355, didSend: v24, from: v353 } = txn1;
  ;
  const v361 = stdlib.protect(ctc4, await interact.sponsor(v354), {
    at: './index.rsh:50:61:application',
    fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:13:function exp)'],
    msg: 'sponsor',
    who: 'Sponsor'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v353, v361],
    evt_cnt: 1,
    funcNum: 1,
    lct: v355,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v363], secs: v365, time: v364, didSend: v38, from: v362 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v367 = v363.contribute;
      if (v367) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc10, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v363], secs: v365, time: v364, didSend: v38, from: v362 } = txn2;
  ;
  const v367 = v363.contribute;
  if (v367) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc0],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v379], secs: v381, time: v380, didSend: v65, from: v378 } = txn3;
    ;
    const v383 = stdlib.addressEq(v353, v378);
    stdlib.assert(v383, {
      at: './index.rsh:64:6:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    const txn4 = await (ctc.sendrecv({
      args: [v353, v362, v379],
      evt_cnt: 0,
      funcNum: 3,
      lct: v380,
      onlyIf: true,
      out_tys: [],
      pay: [v379, []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v386, time: v385, didSend: v72, from: v384 } = txn4;
        
        sim_r.txns.push({
          amt: v379,
          kind: 'to',
          tok: undefined
          });
        const v389 = stdlib.addressEq(v362, v384);
        stdlib.assert(v389, {
          at: './index.rsh:70:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        
        sim_r.txns.push({
          amt: v379,
          kind: 'from',
          to: v353,
          tok: undefined
          });
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc10, ctc10, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v386, time: v385, didSend: v72, from: v384 } = txn4;
    ;
    const v389 = stdlib.addressEq(v362, v384);
    stdlib.assert(v389, {
      at: './index.rsh:70:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    stdlib.protect(ctc5, await interact.reportPayment(v379), {
      at: './index.rsh:72:45:application',
      fs: ['at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:20:function exp)'],
      msg: 'reportPayment',
      who: 'Sponsor'
      });
    
    ;
    stdlib.protect(ctc5, await interact.reportTransfer(v379), {
      at: './index.rsh:74:46:application',
      fs: ['at ./index.rsh:74:7:application call to [unknown function] (defined at: ./index.rsh:74:20:function exp)'],
      msg: 'reportTransfer',
      who: 'Sponsor'
      });
    
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 6,
      funcNum: 4,
      out_tys: [ctc6, ctc7, ctc8, ctc6, ctc0, ctc0],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v408, v409, v410, v411, v412, v413], secs: v415, time: v414, didSend: v110, from: v407 } = txn5;
    ;
    const v417 = stdlib.addressEq(v353, v407);
    stdlib.assert(v417, {
      at: './index.rsh:80:6:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    const v418 = undefined;
    const v419 = await txn5.getOutput('tokenNew', 'v418', ctc9, v418);
    const txn6 = await (ctc.sendrecv({
      args: [v353, v362, v412, v419],
      evt_cnt: 0,
      funcNum: 5,
      lct: v414,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v424, time: v423, didSend: v123, from: v422 } = txn6;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v426 = stdlib.addressEq(v362, v422);
        stdlib.assert(v426, {
          at: './index.rsh:87:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc10, ctc10, ctc0, ctc9],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v424, time: v423, didSend: v123, from: v422 } = txn6;
    ;
    const v426 = stdlib.addressEq(v362, v422);
    stdlib.assert(v426, {
      at: './index.rsh:87:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    const v428 = {
      metadata: v411,
      name: v408,
      supply: v412,
      symbol: v409,
      url: v410
      };
    stdlib.protect(ctc5, await interact.reportTokenMinted(v419, v428), {
      at: './index.rsh:1:39:application',
      fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:88:31:application call to "liftedInteract" (defined at: ./index.rsh:88:31:application)'],
      msg: 'reportTokenMinted',
      who: 'Sponsor'
      });
    
    const txn7 = await (ctc.sendrecv({
      args: [v353, v362, v412, v419],
      evt_cnt: 0,
      funcNum: 6,
      lct: v423,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v431, time: v430, didSend: v134, from: v429 } = txn7;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v433 = stdlib.addressEq(v362, v429);
        stdlib.assert(v433, {
          at: './index.rsh:103:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        const v434 = stdlib.addressEq(v362, v353);
        const v436 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, 40), v412);
        const v437 = stdlib.div(v436, stdlib.checkedBigNumberify('./index.rsh:92:51:decimal', stdlib.UInt_max, 100));
        const v438 = stdlib.ge(v412, v437);
        const v439 = v434 ? v438 : false;
        if (v439) {
          const v445 = stdlib.sub(v412, v437);
          sim_r.txns.push({
            amt: v437,
            kind: 'from',
            to: v362,
            tok: v419
            });
          
          sim_r.isHalt = false;
          }
        else {
          if (v438) {
            const v630 = stdlib.sub(v412, v437);
            sim_r.txns.push({
              amt: v437,
              kind: 'from',
              to: v362,
              tok: v419
              });
            
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }}
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc10, ctc10, ctc0, ctc9],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v431, time: v430, didSend: v134, from: v429 } = txn7;
    ;
    const v433 = stdlib.addressEq(v362, v429);
    stdlib.assert(v433, {
      at: './index.rsh:103:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    const v434 = stdlib.addressEq(v362, v353);
    const v436 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, 40), v412);
    const v437 = stdlib.div(v436, stdlib.checkedBigNumberify('./index.rsh:92:51:decimal', stdlib.UInt_max, 100));
    const v438 = stdlib.ge(v412, v437);
    const v439 = v434 ? v438 : false;
    if (v439) {
      const v445 = stdlib.sub(v412, v437);
      ;
      stdlib.protect(ctc5, await interact.didTransfer(true, v437), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:94:29:application call to "liftedInteract" (defined at: ./index.rsh:94:29:application)', 'at ./index.rsh:104:14:application call to "doTransfer1" (defined at: ./index.rsh:91:33:function exp)'],
        msg: 'didTransfer',
        who: 'Sponsor'
        });
      
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 7,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v452, time: v451, didSend: v175, from: v450 } = txn8;
      ;
      const v454 = stdlib.addressEq(v353, v450);
      stdlib.assert(v454, {
        at: './index.rsh:106:6:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sponsor'
        });
      const v455 = stdlib.addressEq(v353, v353);
      const v459 = stdlib.ge(v445, v437);
      const v460 = v455 ? v459 : false;
      if (v460) {
        const v466 = stdlib.sub(v445, v437);
        ;
        const txn9 = await (ctc.sendrecv({
          args: [v353, v362, v412, v419, v466],
          evt_cnt: 0,
          funcNum: 8,
          lct: v451,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn9) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v473, time: v472, didSend: v216, from: v471 } = txn9;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v475 = stdlib.addressEq(v362, v471);
            stdlib.assert(v475, {
              at: './index.rsh:110:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            sim_r.txns.push({
              amt: v466,
              kind: 'from',
              to: v353,
              tok: v419
              });
            
            const v483 = v472;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              stdlib.simTokenBurn(sim_r, v419, v412);
              stdlib.simTokenDestroy(sim_r, v419);
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc10, ctc10, ctc0, ctc9, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v473, time: v472, didSend: v216, from: v471 } = txn9;
        ;
        const v475 = stdlib.addressEq(v362, v471);
        stdlib.assert(v475, {
          at: './index.rsh:110:4:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        ;
        stdlib.protect(ctc5, await interact.programEnded(), {
          at: './index.rsh:112:43:application',
          fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
          msg: 'programEnded',
          who: 'Sponsor'
          });
        
        let v483 = v472;
        
        while (await (async () => {
          
          return true;})()) {
          const txn10 = await (ctc.sendrecv({
            args: [v362, v412, v419],
            evt_cnt: 0,
            funcNum: 10,
            lct: v483,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn10) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v495, time: v494, didSend: v235, from: v493 } = txn10;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v497 = stdlib.addressEq(v362, v493);
              stdlib.assert(v497, {
                at: './index.rsh:117:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              const cv483 = v494;
              
              await (async () => {
                const v483 = cv483;
                
                if (await (async () => {
                  
                  return true;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  stdlib.simTokenBurn(sim_r, v419, v412);
                  stdlib.simTokenDestroy(sim_r, v419);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined,
            tys: [ctc10, ctc0, ctc9],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v495, time: v494, didSend: v235, from: v493 } = txn10;
          ;
          const v497 = stdlib.addressEq(v362, v493);
          stdlib.assert(v497, {
            at: './index.rsh:117:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          const cv483 = v494;
          
          v483 = cv483;
          
          continue;
          
          }
        undefined;
        undefined;
        stdlib.protect(ctc5, await interact.reportExit(), {
          at: './index.rsh:126:42:application',
          fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
          msg: 'reportExit',
          who: 'Sponsor'
          });
        
        return;
        
        
        }
      else {
        if (v459) {
          const v525 = stdlib.sub(v445, v437);
          ;
          const txn9 = await (ctc.sendrecv({
            args: [v353, v362, v412, v419, v525],
            evt_cnt: 0,
            funcNum: 11,
            lct: v451,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v532, time: v531, didSend: v216, from: v530 } = txn9;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v534 = stdlib.addressEq(v362, v530);
              stdlib.assert(v534, {
                at: './index.rsh:110:4:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              sim_r.txns.push({
                amt: v525,
                kind: 'from',
                to: v353,
                tok: v419
                });
              
              const v542 = v531;
              
              if (await (async () => {
                
                return true;})()) {
                sim_r.isHalt = false;
                }
              else {
                stdlib.simTokenBurn(sim_r, v419, v412);
                stdlib.simTokenDestroy(sim_r, v419);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined,
            tys: [ctc10, ctc10, ctc0, ctc9, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v532, time: v531, didSend: v216, from: v530 } = txn9;
          ;
          const v534 = stdlib.addressEq(v362, v530);
          stdlib.assert(v534, {
            at: './index.rsh:110:4:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          ;
          stdlib.protect(ctc5, await interact.programEnded(), {
            at: './index.rsh:112:43:application',
            fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
            msg: 'programEnded',
            who: 'Sponsor'
            });
          
          let v542 = v531;
          
          while (await (async () => {
            
            return true;})()) {
            const txn10 = await (ctc.sendrecv({
              args: [v362, v412, v419],
              evt_cnt: 0,
              funcNum: 13,
              lct: v542,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn10) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v554, time: v553, didSend: v235, from: v552 } = txn10;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v556 = stdlib.addressEq(v362, v552);
                stdlib.assert(v556, {
                  at: './index.rsh:117:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                const cv542 = v553;
                
                await (async () => {
                  const v542 = cv542;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    stdlib.simTokenBurn(sim_r, v419, v412);
                    stdlib.simTokenDestroy(sim_r, v419);
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc10, ctc0, ctc9],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v554, time: v553, didSend: v235, from: v552 } = txn10;
            ;
            const v556 = stdlib.addressEq(v362, v552);
            stdlib.assert(v556, {
              at: './index.rsh:117:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            const cv542 = v553;
            
            v542 = cv542;
            
            continue;
            
            }
          undefined;
          undefined;
          stdlib.protect(ctc5, await interact.reportExit(), {
            at: './index.rsh:126:42:application',
            fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
            msg: 'reportExit',
            who: 'Sponsor'
            });
          
          return;
          
          
          }
        else {
          const txn9 = await (ctc.sendrecv({
            args: [v353, v362, v412, v419, v445],
            evt_cnt: 0,
            funcNum: 14,
            lct: v451,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v578, time: v577, didSend: v216, from: v576 } = txn9;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v580 = stdlib.addressEq(v362, v576);
              stdlib.assert(v580, {
                at: './index.rsh:110:4:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              sim_r.txns.push({
                amt: v445,
                kind: 'from',
                to: v353,
                tok: v419
                });
              
              const v588 = v577;
              
              if (await (async () => {
                
                return true;})()) {
                sim_r.isHalt = false;
                }
              else {
                stdlib.simTokenBurn(sim_r, v419, v412);
                stdlib.simTokenDestroy(sim_r, v419);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined,
            tys: [ctc10, ctc10, ctc0, ctc9, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v578, time: v577, didSend: v216, from: v576 } = txn9;
          ;
          const v580 = stdlib.addressEq(v362, v576);
          stdlib.assert(v580, {
            at: './index.rsh:110:4:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          ;
          stdlib.protect(ctc5, await interact.programEnded(), {
            at: './index.rsh:112:43:application',
            fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
            msg: 'programEnded',
            who: 'Sponsor'
            });
          
          let v588 = v577;
          
          while (await (async () => {
            
            return true;})()) {
            const txn10 = await (ctc.sendrecv({
              args: [v362, v412, v419],
              evt_cnt: 0,
              funcNum: 16,
              lct: v588,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn10) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v600, time: v599, didSend: v235, from: v598 } = txn10;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v602 = stdlib.addressEq(v362, v598);
                stdlib.assert(v602, {
                  at: './index.rsh:117:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                const cv588 = v599;
                
                await (async () => {
                  const v588 = cv588;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    stdlib.simTokenBurn(sim_r, v419, v412);
                    stdlib.simTokenDestroy(sim_r, v419);
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc10, ctc0, ctc9],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v600, time: v599, didSend: v235, from: v598 } = txn10;
            ;
            const v602 = stdlib.addressEq(v362, v598);
            stdlib.assert(v602, {
              at: './index.rsh:117:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            const cv588 = v599;
            
            v588 = cv588;
            
            continue;
            
            }
          undefined;
          undefined;
          stdlib.protect(ctc5, await interact.reportExit(), {
            at: './index.rsh:126:42:application',
            fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
            msg: 'reportExit',
            who: 'Sponsor'
            });
          
          return;
          
          
          }}
      
      }
    else {
      if (v438) {
        const v630 = stdlib.sub(v412, v437);
        ;
        stdlib.protect(ctc5, await interact.didTransfer(true, v437), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:98:29:application call to "liftedInteract" (defined at: ./index.rsh:98:29:application)', 'at ./index.rsh:104:14:application call to "doTransfer1" (defined at: ./index.rsh:91:33:function exp)'],
          msg: 'didTransfer',
          who: 'Sponsor'
          });
        
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 17,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v637, time: v636, didSend: v175, from: v635 } = txn8;
        ;
        const v639 = stdlib.addressEq(v353, v635);
        stdlib.assert(v639, {
          at: './index.rsh:106:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        const v640 = stdlib.addressEq(v353, v353);
        const v644 = stdlib.ge(v630, v437);
        const v645 = v640 ? v644 : false;
        if (v645) {
          const v651 = stdlib.sub(v630, v437);
          ;
          const txn9 = await (ctc.sendrecv({
            args: [v353, v362, v412, v419, v651],
            evt_cnt: 0,
            funcNum: 18,
            lct: v636,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v658, time: v657, didSend: v216, from: v656 } = txn9;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v660 = stdlib.addressEq(v362, v656);
              stdlib.assert(v660, {
                at: './index.rsh:110:4:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              sim_r.txns.push({
                amt: v651,
                kind: 'from',
                to: v353,
                tok: v419
                });
              
              const v668 = v657;
              
              if (await (async () => {
                
                return true;})()) {
                sim_r.isHalt = false;
                }
              else {
                stdlib.simTokenBurn(sim_r, v419, v412);
                stdlib.simTokenDestroy(sim_r, v419);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined,
            tys: [ctc10, ctc10, ctc0, ctc9, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v658, time: v657, didSend: v216, from: v656 } = txn9;
          ;
          const v660 = stdlib.addressEq(v362, v656);
          stdlib.assert(v660, {
            at: './index.rsh:110:4:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          ;
          stdlib.protect(ctc5, await interact.programEnded(), {
            at: './index.rsh:112:43:application',
            fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
            msg: 'programEnded',
            who: 'Sponsor'
            });
          
          let v668 = v657;
          
          while (await (async () => {
            
            return true;})()) {
            const txn10 = await (ctc.sendrecv({
              args: [v362, v412, v419],
              evt_cnt: 0,
              funcNum: 20,
              lct: v668,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn10) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v680, time: v679, didSend: v235, from: v678 } = txn10;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v682 = stdlib.addressEq(v362, v678);
                stdlib.assert(v682, {
                  at: './index.rsh:117:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                const cv668 = v679;
                
                await (async () => {
                  const v668 = cv668;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    stdlib.simTokenBurn(sim_r, v419, v412);
                    stdlib.simTokenDestroy(sim_r, v419);
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc10, ctc0, ctc9],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v680, time: v679, didSend: v235, from: v678 } = txn10;
            ;
            const v682 = stdlib.addressEq(v362, v678);
            stdlib.assert(v682, {
              at: './index.rsh:117:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            const cv668 = v679;
            
            v668 = cv668;
            
            continue;
            
            }
          undefined;
          undefined;
          stdlib.protect(ctc5, await interact.reportExit(), {
            at: './index.rsh:126:42:application',
            fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
            msg: 'reportExit',
            who: 'Sponsor'
            });
          
          return;
          
          
          }
        else {
          if (v644) {
            const v710 = stdlib.sub(v630, v437);
            ;
            const txn9 = await (ctc.sendrecv({
              args: [v353, v362, v412, v419, v710],
              evt_cnt: 0,
              funcNum: 21,
              lct: v636,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn9) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v717, time: v716, didSend: v216, from: v715 } = txn9;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v719 = stdlib.addressEq(v362, v715);
                stdlib.assert(v719, {
                  at: './index.rsh:110:4:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                sim_r.txns.push({
                  amt: v710,
                  kind: 'from',
                  to: v353,
                  tok: v419
                  });
                
                const v727 = v716;
                
                if (await (async () => {
                  
                  return true;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  stdlib.simTokenBurn(sim_r, v419, v412);
                  stdlib.simTokenDestroy(sim_r, v419);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc10, ctc10, ctc0, ctc9, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v717, time: v716, didSend: v216, from: v715 } = txn9;
            ;
            const v719 = stdlib.addressEq(v362, v715);
            stdlib.assert(v719, {
              at: './index.rsh:110:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            ;
            stdlib.protect(ctc5, await interact.programEnded(), {
              at: './index.rsh:112:43:application',
              fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
              msg: 'programEnded',
              who: 'Sponsor'
              });
            
            let v727 = v716;
            
            while (await (async () => {
              
              return true;})()) {
              const txn10 = await (ctc.sendrecv({
                args: [v362, v412, v419],
                evt_cnt: 0,
                funcNum: 23,
                lct: v727,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn10) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v739, time: v738, didSend: v235, from: v737 } = txn10;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v741 = stdlib.addressEq(v362, v737);
                  stdlib.assert(v741, {
                    at: './index.rsh:117:7:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Sponsor'
                    });
                  const cv727 = v738;
                  
                  await (async () => {
                    const v727 = cv727;
                    
                    if (await (async () => {
                      
                      return true;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      stdlib.simTokenBurn(sim_r, v419, v412);
                      stdlib.simTokenDestroy(sim_r, v419);
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined
                        })
                      sim_r.isHalt = true;
                      }})();
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: undefined,
                tys: [ctc10, ctc0, ctc9],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v739, time: v738, didSend: v235, from: v737 } = txn10;
              ;
              const v741 = stdlib.addressEq(v362, v737);
              stdlib.assert(v741, {
                at: './index.rsh:117:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              const cv727 = v738;
              
              v727 = cv727;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc5, await interact.reportExit(), {
              at: './index.rsh:126:42:application',
              fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
              msg: 'reportExit',
              who: 'Sponsor'
              });
            
            return;
            
            
            }
          else {
            const txn9 = await (ctc.sendrecv({
              args: [v353, v362, v412, v419, v630],
              evt_cnt: 0,
              funcNum: 24,
              lct: v636,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn9) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v763, time: v762, didSend: v216, from: v761 } = txn9;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v765 = stdlib.addressEq(v362, v761);
                stdlib.assert(v765, {
                  at: './index.rsh:110:4:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                sim_r.txns.push({
                  amt: v630,
                  kind: 'from',
                  to: v353,
                  tok: v419
                  });
                
                const v773 = v762;
                
                if (await (async () => {
                  
                  return true;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  stdlib.simTokenBurn(sim_r, v419, v412);
                  stdlib.simTokenDestroy(sim_r, v419);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc10, ctc10, ctc0, ctc9, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v763, time: v762, didSend: v216, from: v761 } = txn9;
            ;
            const v765 = stdlib.addressEq(v362, v761);
            stdlib.assert(v765, {
              at: './index.rsh:110:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            ;
            stdlib.protect(ctc5, await interact.programEnded(), {
              at: './index.rsh:112:43:application',
              fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
              msg: 'programEnded',
              who: 'Sponsor'
              });
            
            let v773 = v762;
            
            while (await (async () => {
              
              return true;})()) {
              const txn10 = await (ctc.sendrecv({
                args: [v362, v412, v419],
                evt_cnt: 0,
                funcNum: 26,
                lct: v773,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn10) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v785, time: v784, didSend: v235, from: v783 } = txn10;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v787 = stdlib.addressEq(v362, v783);
                  stdlib.assert(v787, {
                    at: './index.rsh:117:7:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Sponsor'
                    });
                  const cv773 = v784;
                  
                  await (async () => {
                    const v773 = cv773;
                    
                    if (await (async () => {
                      
                      return true;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      stdlib.simTokenBurn(sim_r, v419, v412);
                      stdlib.simTokenDestroy(sim_r, v419);
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined
                        })
                      sim_r.isHalt = true;
                      }})();
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: undefined,
                tys: [ctc10, ctc0, ctc9],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v785, time: v784, didSend: v235, from: v783 } = txn10;
              ;
              const v787 = stdlib.addressEq(v362, v783);
              stdlib.assert(v787, {
                at: './index.rsh:117:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              const cv773 = v784;
              
              v773 = cv773;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc5, await interact.reportExit(), {
              at: './index.rsh:126:42:application',
              fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
              msg: 'reportExit',
              who: 'Sponsor'
              });
            
            return;
            
            
            }}
        
        }
      else {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 27,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v809, time: v808, didSend: v175, from: v807 } = txn8;
        ;
        const v811 = stdlib.addressEq(v353, v807);
        stdlib.assert(v811, {
          at: './index.rsh:106:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        const v812 = stdlib.addressEq(v353, v353);
        const v817 = v812 ? v438 : false;
        if (v817) {
          const v823 = stdlib.sub(v412, v437);
          ;
          const txn9 = await (ctc.sendrecv({
            args: [v353, v362, v412, v419, v823],
            evt_cnt: 0,
            funcNum: 28,
            lct: v808,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v830, time: v829, didSend: v216, from: v828 } = txn9;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v832 = stdlib.addressEq(v362, v828);
              stdlib.assert(v832, {
                at: './index.rsh:110:4:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              sim_r.txns.push({
                amt: v823,
                kind: 'from',
                to: v353,
                tok: v419
                });
              
              const v840 = v829;
              
              if (await (async () => {
                
                return true;})()) {
                sim_r.isHalt = false;
                }
              else {
                stdlib.simTokenBurn(sim_r, v419, v412);
                stdlib.simTokenDestroy(sim_r, v419);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined,
            tys: [ctc10, ctc10, ctc0, ctc9, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v830, time: v829, didSend: v216, from: v828 } = txn9;
          ;
          const v832 = stdlib.addressEq(v362, v828);
          stdlib.assert(v832, {
            at: './index.rsh:110:4:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          ;
          stdlib.protect(ctc5, await interact.programEnded(), {
            at: './index.rsh:112:43:application',
            fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
            msg: 'programEnded',
            who: 'Sponsor'
            });
          
          let v840 = v829;
          
          while (await (async () => {
            
            return true;})()) {
            const txn10 = await (ctc.sendrecv({
              args: [v362, v412, v419],
              evt_cnt: 0,
              funcNum: 30,
              lct: v840,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn10) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v852, time: v851, didSend: v235, from: v850 } = txn10;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v854 = stdlib.addressEq(v362, v850);
                stdlib.assert(v854, {
                  at: './index.rsh:117:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                const cv840 = v851;
                
                await (async () => {
                  const v840 = cv840;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    stdlib.simTokenBurn(sim_r, v419, v412);
                    stdlib.simTokenDestroy(sim_r, v419);
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc10, ctc0, ctc9],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v852, time: v851, didSend: v235, from: v850 } = txn10;
            ;
            const v854 = stdlib.addressEq(v362, v850);
            stdlib.assert(v854, {
              at: './index.rsh:117:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            const cv840 = v851;
            
            v840 = cv840;
            
            continue;
            
            }
          undefined;
          undefined;
          stdlib.protect(ctc5, await interact.reportExit(), {
            at: './index.rsh:126:42:application',
            fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
            msg: 'reportExit',
            who: 'Sponsor'
            });
          
          return;
          
          
          }
        else {
          if (v438) {
            const v882 = stdlib.sub(v412, v437);
            ;
            const txn9 = await (ctc.sendrecv({
              args: [v353, v362, v412, v419, v882],
              evt_cnt: 0,
              funcNum: 31,
              lct: v808,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn9) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v889, time: v888, didSend: v216, from: v887 } = txn9;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v891 = stdlib.addressEq(v362, v887);
                stdlib.assert(v891, {
                  at: './index.rsh:110:4:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                sim_r.txns.push({
                  amt: v882,
                  kind: 'from',
                  to: v353,
                  tok: v419
                  });
                
                const v899 = v888;
                
                if (await (async () => {
                  
                  return true;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  stdlib.simTokenBurn(sim_r, v419, v412);
                  stdlib.simTokenDestroy(sim_r, v419);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc10, ctc10, ctc0, ctc9, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v889, time: v888, didSend: v216, from: v887 } = txn9;
            ;
            const v891 = stdlib.addressEq(v362, v887);
            stdlib.assert(v891, {
              at: './index.rsh:110:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            ;
            stdlib.protect(ctc5, await interact.programEnded(), {
              at: './index.rsh:112:43:application',
              fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
              msg: 'programEnded',
              who: 'Sponsor'
              });
            
            let v899 = v888;
            
            while (await (async () => {
              
              return true;})()) {
              const txn10 = await (ctc.sendrecv({
                args: [v362, v412, v419],
                evt_cnt: 0,
                funcNum: 33,
                lct: v899,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn10) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v911, time: v910, didSend: v235, from: v909 } = txn10;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v913 = stdlib.addressEq(v362, v909);
                  stdlib.assert(v913, {
                    at: './index.rsh:117:7:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Sponsor'
                    });
                  const cv899 = v910;
                  
                  await (async () => {
                    const v899 = cv899;
                    
                    if (await (async () => {
                      
                      return true;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      stdlib.simTokenBurn(sim_r, v419, v412);
                      stdlib.simTokenDestroy(sim_r, v419);
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined
                        })
                      sim_r.isHalt = true;
                      }})();
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: undefined,
                tys: [ctc10, ctc0, ctc9],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v911, time: v910, didSend: v235, from: v909 } = txn10;
              ;
              const v913 = stdlib.addressEq(v362, v909);
              stdlib.assert(v913, {
                at: './index.rsh:117:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              const cv899 = v910;
              
              v899 = cv899;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc5, await interact.reportExit(), {
              at: './index.rsh:126:42:application',
              fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
              msg: 'reportExit',
              who: 'Sponsor'
              });
            
            return;
            
            
            }
          else {
            const txn9 = await (ctc.sendrecv({
              args: [v353, v362, v412, v419],
              evt_cnt: 0,
              funcNum: 34,
              lct: v808,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn9) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v935, time: v934, didSend: v216, from: v933 } = txn9;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v937 = stdlib.addressEq(v362, v933);
                stdlib.assert(v937, {
                  at: './index.rsh:110:4:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                sim_r.txns.push({
                  amt: v412,
                  kind: 'from',
                  to: v353,
                  tok: v419
                  });
                
                const v945 = v934;
                
                if (await (async () => {
                  
                  return true;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  stdlib.simTokenBurn(sim_r, v419, v412);
                  stdlib.simTokenDestroy(sim_r, v419);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc10, ctc10, ctc0, ctc9],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v935, time: v934, didSend: v216, from: v933 } = txn9;
            ;
            const v937 = stdlib.addressEq(v362, v933);
            stdlib.assert(v937, {
              at: './index.rsh:110:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            ;
            stdlib.protect(ctc5, await interact.programEnded(), {
              at: './index.rsh:112:43:application',
              fs: ['at ./index.rsh:112:6:application call to [unknown function] (defined at: ./index.rsh:112:19:function exp)'],
              msg: 'programEnded',
              who: 'Sponsor'
              });
            
            let v945 = v934;
            
            while (await (async () => {
              
              return true;})()) {
              const txn10 = await (ctc.sendrecv({
                args: [v362, v412, v419],
                evt_cnt: 0,
                funcNum: 36,
                lct: v945,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn10) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v957, time: v956, didSend: v235, from: v955 } = txn10;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v959 = stdlib.addressEq(v362, v955);
                  stdlib.assert(v959, {
                    at: './index.rsh:117:7:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Sponsor'
                    });
                  const cv945 = v956;
                  
                  await (async () => {
                    const v945 = cv945;
                    
                    if (await (async () => {
                      
                      return true;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      stdlib.simTokenBurn(sim_r, v419, v412);
                      stdlib.simTokenDestroy(sim_r, v419);
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined
                        })
                      sim_r.isHalt = true;
                      }})();
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: undefined,
                tys: [ctc10, ctc0, ctc9],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v957, time: v956, didSend: v235, from: v955 } = txn10;
              ;
              const v959 = stdlib.addressEq(v362, v955);
              stdlib.assert(v959, {
                at: './index.rsh:117:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              const cv945 = v956;
              
              v945 = cv945;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc5, await interact.reportExit(), {
              at: './index.rsh:126:42:application',
              fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
              msg: 'reportExit',
              who: 'Sponsor'
              });
            
            return;
            
            
            }}
        
        }}
    
    
    
    
    
    
    
    
    
    }
  else {
    stdlib.protect(ctc5, await interact.reportCancellation(), {
      at: './index.rsh:54:52:application',
      fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:22:function exp)'],
      msg: 'reportCancellation',
      who: 'Sponsor'
      });
    
    stdlib.protect(ctc5, await interact.reportExit(), {
      at: './index.rsh:55:44:application',
      fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:22:function exp)'],
      msg: 'reportExit',
      who: 'Sponsor'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
int 8
extract_uint64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 64
==
assert
dup
store 255
pop
// "CheckPay"
// "./index.rsh:43:6:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:43:6:dot"
// "[]"
txn Sender
int 1
bzero
dig 1
extract 0 32
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l2_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
store 255
pop
txna ApplicationArgs 2
dup
len
int 9
==
assert
dup
store 254
pop
// "CheckPay"
// "./index.rsh:51:5:dot"
// "[]"
load 254
extract 8 1
btoi
bz l3_ifF
load 255
txn Sender
concat
int 1
bzero
dig 1
extract 0 64
app_global_put
pop
int 2
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l3_ifF:
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l4_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l2_afterHandler1:
// Handler 2
dup
int 2
==
bz l5_afterHandler2
pop
// check step
int 2
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 253
pop
// "CheckPay"
// "./index.rsh:64:6:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:64:6:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
concat
load 253
itob
concat
int 1
bzero
dig 1
extract 0 72
app_global_put
pop
int 3
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l5_afterHandler2:
// Handler 3
dup
int 3
==
bz l6_afterHandler3
pop
// check step
int 3
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:70:5:dot"
// "[]"
load 253
dup
bz l7_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l7_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:70:5:dot"
// "[]"
load 254
txn Sender
==
assert
load 253
dup
bz l8_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l8_makeTxnK:
pop
load 255
load 254
concat
int 1
bzero
dig 1
extract 0 64
app_global_put
pop
int 4
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l6_afterHandler3:
// Handler 4
dup
int 4
==
bz l9_afterHandler4
pop
// check step
int 4
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
pop
txna ApplicationArgs 2
dup
len
int 184
==
assert
dup
extract 0 32
store 253
dup
extract 32 8
store 252
dup
extract 40 96
store 251
dup
extract 136 32
store 250
dup
int 168
extract_uint64
store 249
dup
int 176
extract_uint64
store 248
pop
// "CheckPay"
// "./index.rsh:80:6:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:80:6:dot"
// "[]"
load 255
txn Sender
==
assert
int 100000
dup
bz l10_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l10_checkTxnK:
pop
itxn_begin
int acfg
itxn_field TypeEnum
load 249
itxn_field ConfigAssetTotal
int 6
itxn_field ConfigAssetDecimals
load 252
itxn_field ConfigAssetUnitName
load 253
itxn_field ConfigAssetName
load 251
itxn_field ConfigAssetURL
load 250
itxn_field ConfigAssetMetadataHash
global CurrentApplicationAddress
itxn_field ConfigAssetManager
itxn_submit
itxn CreatedAssetID
store 247
byte base64(AAAAAAAAAaI=)
load 247
itob
concat
log // 16
load 247
store 246
load 255
load 254
concat
load 249
itob
concat
load 246
itob
concat
int 1
bzero
dig 1
extract 0 80
app_global_put
pop
int 5
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l9_afterHandler4:
// Handler 5
dup
int 5
==
bz l11_afterHandler5
pop
// check step
int 5
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:87:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:87:5:dot"
// "[]"
load 254
txn Sender
==
assert
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 80
app_global_put
pop
int 6
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l11_afterHandler5:
// Handler 6
dup
int 6
==
bz l12_afterHandler6
pop
// check step
int 6
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:103:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:103:5:dot"
// "[]"
load 254
txn Sender
==
assert
int 40
load 253
*
int 100
/
store 251
load 253
load 251
>=
store 250
load 254
load 255
==
load 250
&&
bz l13_ifF
load 253
load 251
-
store 249
load 251
dup
bz l14_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 254
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l14_makeTxnK:
pop
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 249
itob
concat
int 1
bzero
dig 1
extract 0 96
app_global_put
pop
int 7
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l13_ifF:
load 250
bz l15_ifF
load 253
load 251
-
store 249
load 251
dup
bz l16_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 254
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l16_makeTxnK:
pop
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 249
itob
concat
int 1
bzero
dig 1
extract 0 96
app_global_put
pop
int 20
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l15_ifF:
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob // bool
substring 7 8
concat
int 1
bzero
dig 1
extract 0 89
app_global_put
pop
int 33
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l12_afterHandler6:
// Handler 7
dup
int 7
==
bz l17_afterHandler7
pop
// check step
int 7
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:106:6:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:106:6:dot"
// "[]"
load 255
txn Sender
==
assert
load 250
load 251
>=
store 249
load 255
dup
==
load 249
&&
bz l18_ifF
load 250
load 251
-
store 248
load 251
dup
bz l19_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l19_makeTxnK:
pop
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 248
itob
concat
int 1
bzero
dig 1
extract 0 88
app_global_put
pop
int 8
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l18_ifF:
load 249
bz l20_ifF
load 250
load 251
-
store 248
load 251
dup
bz l21_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l21_makeTxnK:
pop
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 248
itob
concat
int 1
bzero
dig 1
extract 0 88
app_global_put
pop
int 12
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l20_ifF:
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 250
itob
concat
int 1
bzero
dig 1
extract 0 88
app_global_put
pop
int 16
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l17_afterHandler7:
// Handler 8
dup
int 8
==
bz l22_afterHandler8
pop
// check step
int 8
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:110:4:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:110:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l23_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l23_makeTxnK:
pop
load 254
load 253
itob
concat
load 252
itob
concat
global Round
itob
b loopBody9
l22_afterHandler8:
l24_afterHandler9:
// Handler 10
dup
int 10
==
bz l25_afterHandler10
pop
// check step
int 11
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:117:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:117:7:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
itob
concat
load 253
itob
concat
global Round
itob
b loopBody9
l25_afterHandler10:
// Handler 11
dup
int 11
==
bz l26_afterHandler11
pop
// check step
int 12
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:110:4:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:110:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l27_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l27_makeTxnK:
pop
load 254
load 253
itob
concat
load 252
itob
concat
global Round
itob
b loopBody12
l26_afterHandler11:
l28_afterHandler12:
// Handler 13
dup
int 13
==
bz l29_afterHandler13
pop
// check step
int 15
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:117:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:117:7:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
itob
concat
load 253
itob
concat
global Round
itob
b loopBody12
l29_afterHandler13:
// Handler 14
dup
int 14
==
bz l30_afterHandler14
pop
// check step
int 16
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:110:4:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:110:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l31_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l31_makeTxnK:
pop
load 254
load 253
itob
concat
load 252
itob
concat
global Round
itob
b loopBody15
l30_afterHandler14:
l32_afterHandler15:
// Handler 16
dup
int 16
==
bz l33_afterHandler16
pop
// check step
int 19
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:117:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:117:7:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
itob
concat
load 253
itob
concat
global Round
itob
b loopBody15
l33_afterHandler16:
// Handler 17
dup
int 17
==
bz l34_afterHandler17
pop
// check step
int 20
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:106:6:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:106:6:dot"
// "[]"
load 255
txn Sender
==
assert
load 250
load 251
>=
store 249
load 255
dup
==
load 249
&&
bz l35_ifF
load 250
load 251
-
store 248
load 251
dup
bz l36_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l36_makeTxnK:
pop
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 248
itob
concat
int 1
bzero
dig 1
extract 0 88
app_global_put
pop
int 21
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l35_ifF:
load 249
bz l37_ifF
load 250
load 251
-
store 248
load 251
dup
bz l38_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l38_makeTxnK:
pop
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 248
itob
concat
int 1
bzero
dig 1
extract 0 88
app_global_put
pop
int 25
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l37_ifF:
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 250
itob
concat
int 1
bzero
dig 1
extract 0 88
app_global_put
pop
int 29
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l34_afterHandler17:
// Handler 18
dup
int 18
==
bz l39_afterHandler18
pop
// check step
int 21
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:110:4:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:110:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l40_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l40_makeTxnK:
pop
load 254
load 253
itob
concat
load 252
itob
concat
global Round
itob
b loopBody19
l39_afterHandler18:
l41_afterHandler19:
// Handler 20
dup
int 20
==
bz l42_afterHandler20
pop
// check step
int 24
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:117:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:117:7:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
itob
concat
load 253
itob
concat
global Round
itob
b loopBody19
l42_afterHandler20:
// Handler 21
dup
int 21
==
bz l43_afterHandler21
pop
// check step
int 25
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:110:4:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:110:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l44_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l44_makeTxnK:
pop
load 254
load 253
itob
concat
load 252
itob
concat
global Round
itob
b loopBody22
l43_afterHandler21:
l45_afterHandler22:
// Handler 23
dup
int 23
==
bz l46_afterHandler23
pop
// check step
int 28
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:117:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:117:7:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
itob
concat
load 253
itob
concat
global Round
itob
b loopBody22
l46_afterHandler23:
// Handler 24
dup
int 24
==
bz l47_afterHandler24
pop
// check step
int 29
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:110:4:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:110:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l48_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l48_makeTxnK:
pop
load 254
load 253
itob
concat
load 252
itob
concat
global Round
itob
b loopBody25
l47_afterHandler24:
l49_afterHandler25:
// Handler 26
dup
int 26
==
bz l50_afterHandler26
pop
// check step
int 32
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:117:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:117:7:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
itob
concat
load 253
itob
concat
global Round
itob
b loopBody25
l50_afterHandler26:
// Handler 27
dup
int 27
==
bz l51_afterHandler27
pop
// check step
int 33
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
extract 88 1
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:106:6:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:106:6:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
dup
==
load 250
&&
bz l52_ifF
load 253
load 251
-
store 249
load 251
dup
bz l53_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l53_makeTxnK:
pop
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 249
itob
concat
int 1
bzero
dig 1
extract 0 88
app_global_put
pop
int 34
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l52_ifF:
load 250
bz l54_ifF
load 253
load 251
-
store 249
load 251
dup
bz l55_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l55_makeTxnK:
pop
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 249
itob
concat
int 1
bzero
dig 1
extract 0 88
app_global_put
pop
int 38
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l54_ifF:
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 80
app_global_put
pop
int 42
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l51_afterHandler27:
// Handler 28
dup
int 28
==
bz l56_afterHandler28
pop
// check step
int 34
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:110:4:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:110:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l57_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l57_makeTxnK:
pop
load 254
load 253
itob
concat
load 252
itob
concat
global Round
itob
b loopBody29
l56_afterHandler28:
l58_afterHandler29:
// Handler 30
dup
int 30
==
bz l59_afterHandler30
pop
// check step
int 37
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:117:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:117:7:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
itob
concat
load 253
itob
concat
global Round
itob
b loopBody29
l59_afterHandler30:
// Handler 31
dup
int 31
==
bz l60_afterHandler31
pop
// check step
int 38
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:110:4:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:110:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l61_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l61_makeTxnK:
pop
load 254
load 253
itob
concat
load 252
itob
concat
global Round
itob
b loopBody32
l60_afterHandler31:
l62_afterHandler32:
// Handler 33
dup
int 33
==
bz l63_afterHandler33
pop
// check step
int 41
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:117:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:117:7:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
itob
concat
load 253
itob
concat
global Round
itob
b loopBody32
l63_afterHandler33:
// Handler 34
dup
int 34
==
bz l64_afterHandler34
pop
// check step
int 42
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:110:4:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:110:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 253
dup
bz l65_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l65_makeTxnK:
pop
load 254
load 253
itob
concat
load 252
itob
concat
global Round
itob
b loopBody35
l64_afterHandler34:
l66_afterHandler35:
// Handler 36
dup
int 36
==
bz l67_afterHandler36
pop
// check step
int 45
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:117:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:117:7:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
itob
concat
load 253
itob
concat
global Round
itob
b loopBody35
l67_afterHandler36:
int 0
assert
loopBody9:
dup
btoi
store 255
pop
dup
extract 0 32
store 254
dup
int 32
extract_uint64
store 253
dup
int 40
extract_uint64
store 252
pop
load 254
load 253
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 11
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody12:
dup
btoi
store 255
pop
dup
extract 0 32
store 254
dup
int 32
extract_uint64
store 253
dup
int 40
extract_uint64
store 252
pop
load 254
load 253
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 15
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody15:
dup
btoi
store 255
pop
dup
extract 0 32
store 254
dup
int 32
extract_uint64
store 253
dup
int 40
extract_uint64
store 252
pop
load 254
load 253
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 19
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody19:
dup
btoi
store 255
pop
dup
extract 0 32
store 254
dup
int 32
extract_uint64
store 253
dup
int 40
extract_uint64
store 252
pop
load 254
load 253
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 24
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody22:
dup
btoi
store 255
pop
dup
extract 0 32
store 254
dup
int 32
extract_uint64
store 253
dup
int 40
extract_uint64
store 252
pop
load 254
load 253
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 28
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody25:
dup
btoi
store 255
pop
dup
extract 0 32
store 254
dup
int 32
extract_uint64
store 253
dup
int 40
extract_uint64
store 252
pop
load 254
load 253
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 32
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody29:
dup
btoi
store 255
pop
dup
extract 0 32
store 254
dup
int 32
extract_uint64
store 253
dup
int 40
extract_uint64
store 252
pop
load 254
load 253
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 37
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody32:
dup
btoi
store 255
pop
dup
extract 0 32
store 254
dup
int 32
extract_uint64
store 253
dup
int 40
extract_uint64
store 252
pop
load 254
load 253
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 41
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody35:
dup
btoi
store 255
pop
dup
extract 0 32
store 254
dup
int 32
extract_uint64
store 253
dup
int 40
extract_uint64
store 252
pop
load 254
load 253
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 45
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 6
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_fundraisingGoal",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes28",
                        "name": "elem0",
                        "type": "bytes28"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_projectDetails",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes28",
                        "name": "elem0",
                        "type": "bytes28"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_projectName",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T2",
                "name": "v354",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_fundraisingGoal",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes28",
                        "name": "elem0",
                        "type": "bytes28"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_projectDetails",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes28",
                        "name": "elem0",
                        "type": "bytes28"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_projectName",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T2",
                "name": "v354",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_amt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "_contribute",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T6",
                "name": "v363",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e18",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v379",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e20",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e21",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e23",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e24",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e26",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e27",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e28",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e30",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e31",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e33",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e34",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e36",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T15",
                "name": "v408",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T16",
                "name": "v409",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T17",
                "name": "v410",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T15",
                "name": "v411",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v412",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v413",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v418",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v418",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_amt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "_contribute",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T6",
                "name": "v363",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m18",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v379",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m20",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m21",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m23",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m24",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m26",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m27",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m28",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m30",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m31",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m33",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m34",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m36",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T15",
                "name": "v408",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T16",
                "name": "v409",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T17",
                "name": "v410",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T15",
                "name": "v411",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v412",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v413",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162005bb938038062005bb983398101604081905262000026916200028d565b6000805543600355604080518251815260208084015151805182840152908101515163ffffffff1990811683850152908301515116606082015290517f8302b0f24a2ffe1d985578653bc53343adcf2fb4aec8ed088c306c86a40df3fc9181900360800190a16200009a34156007620000eb565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000e292919062000115565b5050506200037f565b81620001115760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001239062000342565b90600052602060002090601f01602090048101928262000147576000855562000192565b82601f106200016257805160ff191683800117855562000192565b8280016001018555821562000192579182015b828111156200019257825182559160200191906001019062000175565b50620001a0929150620001a4565b5090565b5b80821115620001a05760008155600101620001a5565b604051602081016001600160401b0381118282101715620001ec57634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b0381118282101715620001ec57634e487b7160e01b600052604160045260246000fd5b6000602082840312156200023657600080fd5b604051602081016001600160401b03811182821017156200026757634e487b7160e01b600052604160045260246000fd5b6040528251909150819063ffffffff19811681146200028557600080fd5b905292915050565b60008183036080811215620002a157600080fd5b604080519081016001600160401b0381118282101715620002d257634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ec57600080fd5b620002f6620001bb565b915062000302620001f2565b6020850151815262000318866040870162000223565b60208201526200032c866060870162000223565b6040820152825260208101919091529392505050565b600181811c908216806200035757607f821691505b602082108114156200037957634e487b7160e01b600052602260045260246000fd5b50919050565b61582a806200038f6000396000f3fe608060405260043610620001df5760003560e01c80638a46175311620000ff578063ab53f2c6116200009b578063e00acef11162000069578063e00acef1146200045e578063e533a29d1462000475578063f19b4352146200048c578063f605335014620004a357005b8063ab53f2c614620003f1578063b18adbd61462000419578063bf2c5b241462000430578063c7980037146200044757005b80638ebe74ee11620000d95780638ebe74ee1462000395578063907f2d7a14620003ac5780639f25181014620003c3578063a035b2e014620003da57005b80638a46175314620003505780638b9fadc814620003675780638e314769146200037e57005b80634e9deb45116200017b578063681598b31162000149578063681598b314620002f457806373b4522c146200030b57806382a6a447146200032257806383230757146200033957005b80634e9deb4514620002985780635471c5a814620002af578063617e78ba14620002c657806364395e4814620002dd57005b80631e93b0f111620001b95780631e93b0f1146200022e5780633711704a146200025357806342414754146200026a57806345f70396146200028157005b806309fcce8714620001e95780630f6640cf14620002005780631b26a4bf146200021757005b36620001e757005b005b620001e7620001fa36600462003fcd565b620004ba565b620001e76200021136600462003fcd565b62000645565b620001e76200022836600462003fcd565b620007cb565b3480156200023b57600080fd5b506003545b6040519081526020015b60405180910390f35b620001e76200026436600462003fec565b6200096d565b620001e76200027b36600462003fcd565b62000b40565b620001e76200029236600462003fcd565b62000cc6565b620001e7620002a936600462003fcd565b62000e8e565b620001e7620002c036600462003fcd565b62001030565b620001e7620002d736600462003fcd565b620011b6565b620001e7620002ee36600462003fcd565b62001358565b620001e76200030536600462003fcd565b620014de565b620001e76200031c36600462003fcd565b62001680565b620001e76200033336600462003fcd565b6200185d565b3480156200034657600080fd5b5060015462000240565b620001e76200036136600462003fff565b620019e3565b620001e76200037836600462003fcd565b62001cfe565b620001e76200038f36600462003fcd565b62001ea0565b620001e7620003a636600462003fcd565b62002049565b620001e7620003bd36600462003fcd565b62002372565b620001e7620003d436600462003fcd565b62002514565b620001e7620003eb36600462003fcd565b62002861565b348015620003fe57600080fd5b506200040962002a03565b6040516200024a92919062004070565b620001e76200042a36600462003fcd565b62002aa8565b620001e76200044136600462003fcd565b62002c2e565b620001e76200045836600462003fcd565b62002f7b565b620001e76200046f36600462003fcd565b6200338b565b620001e76200048636600462003fcd565b62003511565b620001e76200049d36600462003fcd565b620036b3565b620001e7620004b436600462003fcd565b62003839565b620004cc602d600054146071620039db565b620004e981351580620004e157506001548235145b6072620039db565b600080805560028054620004fd9062004093565b80601f01602080910402602001604051908101604052809291908181526020018280546200052b9062004093565b80156200057c5780601f1062000550576101008083540402835291602001916200057c565b820191906000526020600020905b8154815290600101906020018083116200055e57829003601f168201915b50505050508060200190518101906200059691906200411f565b90507ff56199befcf0b68513215a2a85be1fb4fca1d0e4a1638730935fdb01bc191ac382604051620005c991906200419d565b60405180910390a1620005df3415606f620039db565b8051620005f9906001600160a01b031633146070620039db565b6200060362003e87565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152810151439052620006408162003a02565b505050565b620006576029600054146069620039db565b62000674813515806200066c57506001548235145b606a620039db565b600080805560028054620006889062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620006b69062004093565b8015620007075780601f10620006db5761010080835404028352916020019162000707565b820191906000526020600020905b815481529060010190602001808311620006e957829003601f168201915b50505050508060200190518101906200072191906200411f565b90507f8efda6143ea80087ba44ea5c132867e37dde35ab01b6c0e6eecefc253da97158826040516200075491906200419d565b60405180910390a16200076a34156067620039db565b805162000784906001600160a01b031633146068620039db565b6200078e62003e87565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152810151439052620006408162003a82565b620007dd6019600054146049620039db565b620007fa81351580620007f257506001548235145b604a620039db565b6000808055600280546200080e9062004093565b80601f01602080910402602001604051908101604052809291908181526020018280546200083c9062004093565b80156200088d5780601f1062000861576101008083540402835291602001916200088d565b820191906000526020600020905b8154815290600101906020018083116200086f57829003601f168201915b5050505050806020019051810190620008a791906200424c565b90507fc994af732d7092e2f923c670a05dd06dcc39938b89e46c484127f784f4b213a182604051620008da91906200419d565b60405180910390a1620008f034156047620039db565b60208101516200090d906001600160a01b031633146048620039db565b6200092681606001518260000151836080015162003adc565b6200093062003e87565b60208083015182516001600160a01b0391821690526040808501518451840152606085015184519216910152810151439052620006408162003af3565b6200097f6001600054146009620039db565b6200099c813515806200099457506001548235145b600a620039db565b600080805560028054620009b09062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620009de9062004093565b801562000a2f5780601f1062000a035761010080835404028352916020019162000a2f565b820191906000526020600020905b81548152906001019060200180831162000a1157829003601f168201915b505050505080602001905181019062000a4991906200426b565b90507f9ea6e8c055e86924b5db5f9635a4bdc97514ead0c112e90b6cc9dedc308452d48260405162000a7c9190620042c7565b60405180910390a162000a9234156008620039db565b62000aa46060830160408401620042e1565b1562000b2457604080518082019091526000808252602082015281516001600160a01b0390811680835233602080850191825260026000554360015560408051918201939093529051909216908201526060015b6040516020818303038152906040526002908051906020019062000b1e92919062003ebe565b50505050565b6000808055600181905562000b3c9060029062003f4d565b5050565b62000b526018600054146045620039db565b62000b6f8135158062000b6757506001548235145b6046620039db565b60008080556002805462000b839062004093565b80601f016020809104026020016040519081016040528092919081815260200182805462000bb19062004093565b801562000c025780601f1062000bd65761010080835404028352916020019162000c02565b820191906000526020600020905b81548152906001019060200180831162000be457829003601f168201915b505050505080602001905181019062000c1c91906200411f565b90507f427a9e8a08f0cc8f967a8e2dce4ce18b8f4de10aac559fe4af87cd3e759e131d8260405162000c4f91906200419d565b60405180910390a162000c6534156043620039db565b805162000c7f906001600160a01b031633146044620039db565b62000c8962003e87565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152810151439052620006408162003b4d565b62000cd8600260005414600d620039db565b62000cf58135158062000ced57506001548235145b600e620039db565b60008080556002805462000d099062004093565b80601f016020809104026020016040519081016040528092919081815260200182805462000d379062004093565b801562000d885780601f1062000d5c5761010080835404028352916020019162000d88565b820191906000526020600020905b81548152906001019060200180831162000d6a57829003601f168201915b505050505080602001905181019062000da2919062004301565b6040805184358152602080860135908201529192507fa8de7fa57e96b1b344028051973cc20a5275cd64ccacf1c4ebc1e38bc2945cb6910160405180910390a162000df03415600b620039db565b805162000e0a906001600160a01b03163314600c620039db565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528a850135835260039095554360015587518085019590955291519091168387015251828401528451808303909301835260809091019093528051919262000b1e926002929091019062003ebe565b62000ea0602260005414605d620039db565b62000ebd8135158062000eb557506001548235145b605e620039db565b60008080556002805462000ed19062004093565b80601f016020809104026020016040519081016040528092919081815260200182805462000eff9062004093565b801562000f505780601f1062000f245761010080835404028352916020019162000f50565b820191906000526020600020905b81548152906001019060200180831162000f3257829003601f168201915b505050505080602001905181019062000f6a91906200424c565b90507fbed89dd74cae374ab40e56da43251935a72e507a975ba8088fa10a6f3a45a6448260405162000f9d91906200419d565b60405180910390a162000fb33415605b620039db565b602081015162000fd0906001600160a01b03163314605c620039db565b62000fe981606001518260000151836080015162003adc565b62000ff362003e87565b60208083015182516001600160a01b0391821690526040808501518451840152606085015184519216910152810151439052620006408162003ba7565b62001042600f600054146031620039db565b6200105f813515806200105757506001548235145b6032620039db565b600080805560028054620010739062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620010a19062004093565b8015620010f25780601f10620010c657610100808354040283529160200191620010f2565b820191906000526020600020905b815481529060010190602001808311620010d457829003601f168201915b50505050508060200190518101906200110c91906200411f565b90507f07e6cc8e2fc82a9375e0bae2c8fb95cb33ae4f7121cc887b7bcd23b343d8ec05826040516200113f91906200419d565b60405180910390a1620011553415602f620039db565b80516200116f906001600160a01b031633146030620039db565b6200117962003e87565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152810151439052620006408162003c01565b620011c8602a60005414606d620039db565b620011e581351580620011dd57506001548235145b606e620039db565b600080805560028054620011f99062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620012279062004093565b8015620012785780601f106200124c5761010080835404028352916020019162001278565b820191906000526020600020905b8154815290600101906020018083116200125a57829003601f168201915b505050505080602001905181019062001292919062004370565b90507f4f0186e9075baafc83f7eee3c4df6a72d4de867fa2569e7e3631da47c772903482604051620012c591906200419d565b60405180910390a1620012db3415606b620039db565b6020810151620012f8906001600160a01b03163314606c620039db565b6200131181606001518260000151836040015162003adc565b6200131b62003e87565b60208083015182516001600160a01b0391821690526040808501518451840152606085015184519216910152810151439052620006408162003a02565b6200136a6020600054146055620039db565b62001387813515806200137f57506001548235145b6056620039db565b6000808055600280546200139b9062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620013c99062004093565b80156200141a5780601f10620013ee576101008083540402835291602001916200141a565b820191906000526020600020905b815481529060010190602001808311620013fc57829003601f168201915b50505050508060200190518101906200143491906200411f565b90507f2b7e9b090ddec9424c868da5fc141d6fe9bae66d67fdb80e00f08d3b57ac325c826040516200146791906200419d565b60405180910390a16200147d34156053620039db565b805162001497906001600160a01b031633146054620039db565b620014a162003e87565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152810151439052620006408162003c5b565b620014f06026600054146065620039db565b6200150d813515806200150557506001548235145b6066620039db565b600080805560028054620015219062004093565b80601f01602080910402602001604051908101604052809291908181526020018280546200154f9062004093565b8015620015a05780601f106200157457610100808354040283529160200191620015a0565b820191906000526020600020905b8154815290600101906020018083116200158257829003601f168201915b5050505050806020019051810190620015ba91906200424c565b90507fd0734acd0adcce68cacb1df6655f24aef982e646fa3b47a57745808e833fc81582604051620015ed91906200419d565b60405180910390a16200160334156063620039db565b602081015162001620906001600160a01b031633146064620039db565b6200163981606001518260000151836080015162003adc565b6200164362003e87565b60208083015182516001600160a01b0391821690526040808501518451840152606085015184519216910152810151439052620006408162003a82565b620016926003600054146011620039db565b620016af81351580620016a757506001548235145b6012620039db565b600080805560028054620016c39062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620016f19062004093565b8015620017425780601f10620017165761010080835404028352916020019162001742565b820191906000526020600020905b8154815290600101906020018083116200172457829003601f168201915b50505050508060200190518101906200175c9190620043fc565b90507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09826040516200178f91906200419d565b60405180910390a1620017aa81604001513414600f620039db565b6020810151620017c7906001600160a01b031633146010620039db565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562001805573d6000803e3d6000fd5b50604080518082019091526000808252602082015281516001600160a01b0390811680835260208085015183168185019081526004600055436001556040805192830193909352519092169082015260600162000af8565b6200186f6025600054146061620039db565b6200188c813515806200188457506001548235145b6062620039db565b600080805560028054620018a09062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620018ce9062004093565b80156200191f5780601f10620018f3576101008083540402835291602001916200191f565b820191906000526020600020905b8154815290600101906020018083116200190157829003601f168201915b50505050508060200190518101906200193991906200411f565b90507f5a27435c7f32d712493066de1d9824e76f41cceef3f7574d14d3e5383ae9eda5826040516200196c91906200419d565b60405180910390a1620019823415605f620039db565b80516200199c906001600160a01b031633146060620039db565b620019a662003e87565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152810151439052620006408162003ba7565b620019f56004600054146015620039db565b62001a128135158062001a0a57506001548235145b6016620039db565b60008080556002805462001a269062004093565b80601f016020809104026020016040519081016040528092919081815260200182805462001a549062004093565b801562001aa55780601f1062001a795761010080835404028352916020019162001aa5565b820191906000526020600020905b81548152906001019060200180831162001a8757829003601f168201915b505050505080602001905181019062001abf919062004301565b60408051808201909152600080825260208201529091507f982860f8d27e8cc7c0ebb9e4cd916f47e6690c6b4a3744b1369dcf0abfce34f48360405162001b07919062004466565b60405180910390a162001b1d34156013620039db565b815162001b37906001600160a01b031633146014620039db565b60408051602085810135908201520160408051601f1981840301815291815262001b689060608601908601620044da565b6040516001600160c01b0319909116602082015260280160408051808303601f1901815282825260608781013560208501526080808901359385019390935260a088013590840152910160408051808303601f1901815282825260c0880135602084015291016040516020818303038152906040528660200160c00135601260405162001bf59062003f8f565b62001c0696959493929190620044f8565b604051809103906000f08015801562001c23573d6000803e3d6000fd5b506001600160a01b031680825260208083018290526040519182527fa7bdd8cec640999d516dad9f36dd452b522e24c029736815481e2b0bda153f9e910160405180910390a160408051608081018252600080825260208083018281528385018381526060850184815288516001600160a01b03908116875289850151811690935260e08a01359091528683015190911690526005909155436001559151909162001cd19183910162004563565b6040516020818303038152906040526002908051906020019062001cf792919062003ebe565b5050505050565b62001d10600c60005414602d620039db565b62001d2d8135158062001d2557506001548235145b602e620039db565b60008080556002805462001d419062004093565b80601f016020809104026020016040519081016040528092919081815260200182805462001d6f9062004093565b801562001dc05780601f1062001d945761010080835404028352916020019162001dc0565b820191906000526020600020905b81548152906001019060200180831162001da257829003601f168201915b505050505080602001905181019062001dda91906200424c565b90507f5fe72957f5855f25860ec325face1305075da64ba42ea3b56918fbe46e26b4048260405162001e0d91906200419d565b60405180910390a162001e233415602b620039db565b602081015162001e40906001600160a01b03163314602c620039db565b62001e5981606001518260000151836080015162003adc565b62001e6362003e87565b60208083015182516001600160a01b0391821690526040808501518451840152606085015184519216910152810151439052620006408162003c01565b62001eb26005600054146019620039db565b62001ecf8135158062001ec757506001548235145b601a620039db565b60008080556002805462001ee39062004093565b80601f016020809104026020016040519081016040528092919081815260200182805462001f119062004093565b801562001f625780601f1062001f365761010080835404028352916020019162001f62565b820191906000526020600020905b81548152906001019060200180831162001f4457829003601f168201915b505050505080602001905181019062001f7c919062004370565b90507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de88260405162001faf91906200419d565b60405180910390a162001fc534156017620039db565b602081015162001fe2906001600160a01b031633146018620039db565b6040805160808101825260008082526020808301828152838501838152606080860185815288516001600160a01b0390811688528986015181169094528888015190925287015190911690526006909155436001559151909162000af89183910162004563565b6200205b6021600054146059620039db565b62002078813515806200207057506001548235145b605a620039db565b6000808055600280546200208c9062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620020ba9062004093565b80156200210b5780601f10620020df576101008083540402835291602001916200210b565b820191906000526020600020905b815481529060010190602001808311620020ed57829003601f168201915b50505050508060200190518101906200212591906200459c565b905062002145604051806040016040528060008152602001600081525090565b7f35e4198bc89d52fd314a8c5d55a40a219ff4262da074ac272b1fb352f981787f836040516200217691906200419d565b60405180910390a16200218c34156057620039db565b8151620021a6906001600160a01b031633146058620039db565b8160a0015115620022565781608001518260400151620021c791906200465d565b8152606082015182516080840151620021e292919062003adc565b6040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528a516001600160a01b0390811689528b87015181169095528a89015190935290890151909216909152855190526022909155436001559151909162001cd19183910162004677565b8160a00151156200230b57816080015182604001516200227791906200465d565b60208201526060820151825160808401516200229592919062003adc565b6040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528a516001600160a01b0390811689528b87015181169095528a890151909352908901519092169091528582015190526026909155436001559151909162001cd19183910162004677565b6040805160808101825260008082526020808301828152838501838152606080860185815289516001600160a01b0390811688528a8601518116909452898801519092528801519091169052602a909155436001559151909162001cd19183910162004563565b620023846015600054146041620039db565b620023a1813515806200239957506001548235145b6042620039db565b600080805560028054620023b59062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620023e39062004093565b8015620024345780601f10620024085761010080835404028352916020019162002434565b820191906000526020600020905b8154815290600101906020018083116200241657829003601f168201915b50505050508060200190518101906200244e91906200424c565b90507fc1e55c0eda497be6c786e1629355e9ba4b0e7536499c9916eca91e0c92561733826040516200248191906200419d565b60405180910390a1620024973415603f620039db565b6020810151620024b4906001600160a01b031633146040620039db565b620024cd81606001518260000151836080015162003adc565b620024d762003e87565b60208083015182516001600160a01b0391821690526040808501518451840152606085015184519216910152810151439052620006408162003b4d565b62002526601460005414603d620039db565b62002543813515806200253b57506001548235145b603e620039db565b600080805560028054620025579062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620025859062004093565b8015620025d65780601f10620025aa57610100808354040283529160200191620025d6565b820191906000526020600020905b815481529060010190602001808311620025b857829003601f168201915b5050505050806020019051810190620025f0919062004760565b905062002619604051806060016040528060001515815260200160008152602001600081525090565b7fa2bfcfc2bf018598bf89847a2aa2dc48cb8eec269fecfd468afbe606d78101bd836040516200264a91906200419d565b60405180910390a1620026603415603b620039db565b81516200267a906001600160a01b03163314603c620039db565b608082015160a08301511080158252620027385781608001518260a00151620026a491906200465d565b6020820152606082015182516080840151620026c292919062003adc565b6040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528a516001600160a01b0390811689528b87015181169095528a890151909352908901519092169091528582015190526015909155436001559151909162001cd19183910162004677565b805115620027ea5781608001518260a001516200275691906200465d565b60408201526060820151825160808401516200277492919062003adc565b6040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528a516001600160a01b0390811689528b87015181169095528a890151909352908901519092169091528585015190526019909155436001559151909162001cd19183910162004677565b6040805160a08082018352600080835260208084018281528486018381526060808701858152608088018681528b516001600160a01b039081168a528c87015181169095528b8a0151909352908a015190921690915292870151909252601d9055436001559151909162001cd19183910162004677565b620028736010600054146035620039db565b62002890813515806200288857506001548235145b6036620039db565b600080805560028054620028a49062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620028d29062004093565b8015620029235780601f10620028f75761010080835404028352916020019162002923565b820191906000526020600020905b8154815290600101906020018083116200290557829003601f168201915b50505050508060200190518101906200293d91906200424c565b90507fe0a2e1387b485a156cf7c3e3303f6334b1f0a305dca44d49ca15f2f74d8b4bda826040516200297091906200419d565b60405180910390a16200298634156033620039db565b6020810151620029a3906001600160a01b031633146034620039db565b620029bc81606001518260000151836080015162003adc565b620029c662003e87565b60208083015182516001600160a01b0391821690526040808501518451840152606085015184519216910152810151439052620006408162003cb4565b60006060600054600280805462002a1a9062004093565b80601f016020809104026020016040519081016040528092919081815260200182805462002a489062004093565b801562002a995780601f1062002a6d5761010080835404028352916020019162002a99565b820191906000526020600020905b81548152906001019060200180831162002a7b57829003601f168201915b50505050509050915091509091565b62002aba601c60005414604d620039db565b62002ad78135158062002acf57506001548235145b604e620039db565b60008080556002805462002aeb9062004093565b80601f016020809104026020016040519081016040528092919081815260200182805462002b199062004093565b801562002b6a5780601f1062002b3e5761010080835404028352916020019162002b6a565b820191906000526020600020905b81548152906001019060200180831162002b4c57829003601f168201915b505050505080602001905181019062002b8491906200411f565b90507f45559a3e180426ea195ce9b1df999c27f7e94d43b1c391fb910072ded4de54958260405162002bb791906200419d565b60405180910390a162002bcd3415604b620039db565b805162002be7906001600160a01b03163314604c620039db565b62002bf162003e87565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152810151439052620006408162003af3565b62002c406007600054146021620039db565b62002c5d8135158062002c5557506001548235145b6022620039db565b60008080556002805462002c719062004093565b80601f016020809104026020016040519081016040528092919081815260200182805462002c9f9062004093565b801562002cf05780601f1062002cc45761010080835404028352916020019162002cf0565b820191906000526020600020905b81548152906001019060200180831162002cd257829003601f168201915b505050505080602001905181019062002d0a919062004760565b905062002d33604051806060016040528060001515815260200160008152602001600081525090565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e08360405162002d6491906200419d565b60405180910390a162002d7a3415601f620039db565b815162002d94906001600160a01b031633146020620039db565b608082015160a0830151108015825262002e525781608001518260a0015162002dbe91906200465d565b602082015260608201518251608084015162002ddc92919062003adc565b6040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528a516001600160a01b0390811689528b87015181169095528a890151909352908901519092169091528582015190526008909155436001559151909162001cd19183910162004677565b80511562002f045781608001518260a0015162002e7091906200465d565b604082015260608201518251608084015162002e8e92919062003adc565b6040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528a516001600160a01b0390811689528b87015181169095528a89015190935290890151909216909152858501519052600c909155436001559151909162001cd19183910162004677565b6040805160a08082018352600080835260208084018281528486018381526060808701858152608088018681528b516001600160a01b039081168a528c87015181169095528b8a0151909352908a01519092169091529287015190925260109055436001559151909162001cd19183910162004677565b62002f8d600660005414601d620039db565b62002faa8135158062002fa257506001548235145b601e620039db565b60008080556002805462002fbe9062004093565b80601f016020809104026020016040519081016040528092919081815260200182805462002fec9062004093565b80156200303d5780601f1062003011576101008083540402835291602001916200303d565b820191906000526020600020905b8154815290600101906020018083116200301f57829003601f168201915b505050505080602001905181019062003057919062004370565b90506200308760405180608001604052806000815260200160001515815260200160008152602001600081525090565b7f4df267dd1a05b613b05cdeee7d7e028d3842cff6f4e5a9d9dde2cdaf4156275983604051620030b891906200419d565b60405180910390a1620030ce3415601b620039db565b6020820151620030eb906001600160a01b03163314601c620039db565b6064826040015160286200310091906200477f565b6200310c9190620047a1565b808252604083015110156020808301919091528251908301516001600160a01b039081169116146200314057600062003146565b80602001515b15620031ff57805160408301516200315f91906200465d565b60408201526060820151602083015182516200317d92919062003adc565b6040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088018781528b516001600160a01b039081168a528c88015181169096528b8a0151909452918a015190931690925286519091528585015190526007909155436001559151909162001cd191839101620047c4565b806020015115620032c057805160408301516200321d91906200465d565b8160600181815250506200323f82606001518360200151836000015162003adc565b6040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088018781528b516001600160a01b039081168a528c88015181169096528b8a01519094528a830151909416905287519092529086015190526014909155436001559151909162001cd191839101620047c4565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811680835260208086015183168185019081526040808801518187019081526060808a0151871681890190815289516080808b019182528b880151151560a0808d019182526021600055436001558751998a019a909a5296518a169588019590955292519186019190915251909516908301529251918101919091529051151560c082015260e00162001cd1565b6200339d600b600054146029620039db565b620033ba81351580620033b257506001548235145b602a620039db565b600080805560028054620033ce9062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620033fc9062004093565b80156200344d5780601f1062003421576101008083540402835291602001916200344d565b820191906000526020600020905b8154815290600101906020018083116200342f57829003601f168201915b50505050508060200190518101906200346791906200411f565b90507f4c8b89b6d291e7da782b3a03ba8192a22dc69ae73b79029441f7242310b1a5a4826040516200349a91906200419d565b60405180910390a1620034b034156027620039db565b8051620034ca906001600160a01b031633146028620039db565b620034d462003e87565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152810151439052620006408162003d0e565b620035236008600054146025620039db565b62003540813515806200353857506001548235145b6026620039db565b600080805560028054620035549062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620035829062004093565b8015620035d35780601f10620035a757610100808354040283529160200191620035d3565b820191906000526020600020905b815481529060010190602001808311620035b557829003601f168201915b5050505050806020019051810190620035ed91906200424c565b90507fb9845e39b4c5715a32bc04872bfe1723e638b66042817fdde0a44e5b0466b6dc826040516200362091906200419d565b60405180910390a16200363634156023620039db565b602081015162003653906001600160a01b031633146024620039db565b6200366c81606001518260000151836080015162003adc565b6200367662003e87565b60208083015182516001600160a01b0391821690526040808501518451840152606085015184519216910152810151439052620006408162003d0e565b620036c56013600054146039620039db565b620036e281351580620036da57506001548235145b603a620039db565b600080805560028054620036f69062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620037249062004093565b8015620037755780601f10620037495761010080835404028352916020019162003775565b820191906000526020600020905b8154815290600101906020018083116200375757829003601f168201915b50505050508060200190518101906200378f91906200411f565b90507f359a55deeb4d5872fc8fd0567a7ed5063e7b4dc07b55df97304b61bb4b680e1282604051620037c291906200419d565b60405180910390a1620037d834156037620039db565b8051620037f2906001600160a01b031633146038620039db565b620037fc62003e87565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152810151439052620006408162003cb4565b6200384b601d600054146051620039db565b62003868813515806200386057506001548235145b6052620039db565b6000808055600280546200387c9062004093565b80601f0160208091040260200160405190810160405280929190818152602001828054620038aa9062004093565b8015620038fb5780601f10620038cf57610100808354040283529160200191620038fb565b820191906000526020600020905b815481529060010190602001808311620038dd57829003601f168201915b50505050508060200190518101906200391591906200424c565b90507f322ee4284cfff566341927d6f2f7e2d1a5c0f8fa56564384979fc8a9b75ff941826040516200394891906200419d565b60405180910390a16200395e3415604f620039db565b60208101516200397b906001600160a01b031633146050620039db565b6200399481606001518260000151836080015162003adc565b6200399e62003e87565b60208083015182516001600160a01b0391821690526040808501518451840152606085015184519216910152810151439052620006408162003c5b565b8162000b3c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60408051606081018252600080825260208083018281528385018381528651516001600160a01b039081168652875184015190925286518601519091169052602d909155436001559151909162003a5c9183910162004814565b604051602081830303815290604052600290805190602001906200064092919062003ebe565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b0390811686528751840151909252865186015190911690526029909155436001559151909162003a5c9183910162004814565b62003ae983838362003d68565b6200064057600080fd5b60408051606081018252600080825260208083018281528385018381528651516001600160a01b039081168652875184015190925286518601519091169052601c909155436001559151909162003a5c9183910162004814565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b0390811686528751840151909252865186015190911690526018909155436001559151909162003a5c9183910162004814565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b0390811686528751840151909252865186015190911690526025909155436001559151909162003a5c9183910162004814565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b039081168652875184015190925286518601519091169052600f909155436001559151909162003a5c9183910162004814565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401519092528651860151909116905290819055436001559151909162003a5c9183910162004814565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b0390811686528751840151909252865186015190911690526013909155436001559151909162003a5c9183910162004814565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b039081168652875184015190925286518601519091169052600b909155436001559151909162003a5c9183910162004814565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839162003dc99162004841565b60006040518083038185875af1925050503d806000811462003e08576040519150601f19603f3d011682016040523d82523d6000602084013e62003e0d565b606091505b509150915062003e208282600262003e41565b508080602001905181019062003e3791906200485f565b9695505050505050565b6060831562003e5257508162003e80565b82511562003e635782518084602001fd5b60405163100960cb60e01b815260048101839052602401620039f9565b9392505050565b6040805160a08101825260008183018181526060830182905260808301829052825282516020818101909452908152909182015290565b82805462003ecc9062004093565b90600052602060002090601f01602090048101928262003ef0576000855562003f3b565b82601f1062003f0b57805160ff191683800117855562003f3b565b8280016001018555821562003f3b579182015b8281111562003f3b57825182559160200191906001019062003f1e565b5062003f4992915062003f9d565b5090565b50805462003f5b9062004093565b6000825580601f1062003f6c575050565b601f01602090049060005260206000209081019062003f8c919062003f9d565b50565b610f75806200488083390190565b5b8082111562003f49576000815560010162003f9e565b60006040828403121562003fc757600080fd5b50919050565b60006040828403121562003fe057600080fd5b62003e80838362003fb4565b60006060828403121562003fc757600080fd5b6000610120828403121562003fc757600080fd5b60005b838110156200403057818101518382015260200162004016565b8381111562000b1e5750506000910152565b600081518084526200405c81602086016020860162004013565b601f01601f19169290920160200192915050565b8281526040602082015260006200408b604083018462004042565b949350505050565b600181811c90821680620040a857607f821691505b6020821081141562003fc757634e487b7160e01b600052602260045260246000fd5b6040516060810167ffffffffffffffff81118282101715620040fc57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200411a57600080fd5b919050565b6000606082840312156200413257600080fd5b6200413c620040ca565b620041478362004102565b815260208301516020820152620041616040840162004102565b60408201529392505050565b801515811462003f8c57600080fd5b80358252602081013562004190816200416d565b8015156020840152505050565b60408101620041ad82846200417c565b92915050565b600060a08284031215620041c657600080fd5b60405160a0810181811067ffffffffffffffff82111715620041f857634e487b7160e01b600052604160045260246000fd5b604052905080620042098362004102565b8152620042196020840162004102565b602082015260408301516040820152620042366060840162004102565b6060820152608083015160808201525092915050565b600060a082840312156200425f57600080fd5b62003e808383620041b3565b6000602082840312156200427e57600080fd5b6040516020810181811067ffffffffffffffff82111715620042b057634e487b7160e01b600052604160045260246000fd5b604052620042be8362004102565b81529392505050565b8135815260608101620041ad60208084019085016200417c565b600060208284031215620042f457600080fd5b813562003e80816200416d565b6000604082840312156200431457600080fd5b6040516040810181811067ffffffffffffffff821117156200434657634e487b7160e01b600052604160045260246000fd5b604052620043548362004102565b8152620043646020840162004102565b60208201529392505050565b6000608082840312156200438357600080fd5b6040516080810181811067ffffffffffffffff82111715620043b557634e487b7160e01b600052604160045260246000fd5b604052620043c38362004102565b8152620043d36020840162004102565b602082015260408301516040820152620043f06060840162004102565b60608201529392505050565b6000606082840312156200440f57600080fd5b62004419620040ca565b620044248362004102565b8152620044346020840162004102565b6020820152604083015160408201528091505092915050565b80356001600160c01b0319811681146200411a57600080fd5b813581526020808301359082015261012081016001600160c01b031962004490604085016200444d565b166040830152606083013560608301526080830135608083015260a083013560a083015260c083013560c083015260e083013560e083015261010080840135818401525092915050565b600060208284031215620044ed57600080fd5b62003e80826200444d565b60c0815260006200450d60c083018962004042565b828103602084015262004521818962004042565b9050828103604084015262004537818862004042565b905082810360608401526200454d818762004042565b6080840195909552505060a00152949350505050565b81516001600160a01b03908116825260208084015182169083015260408084015190830152606092830151169181019190915260800190565b600060c08284031215620045af57600080fd5b60405160c0810181811067ffffffffffffffff82111715620045e157634e487b7160e01b600052604160045260246000fd5b604052620045ef8362004102565b8152620045ff6020840162004102565b6020820152604083015160408201526200461c6060840162004102565b60608201526080830151608082015260a08301516200463b816200416d565b60a08201529392505050565b634e487b7160e01b600052601160045260246000fd5b60008282101562004672576200467262004647565b500390565b81516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151909116908201526080808301519082015260a08101620041ad565b600060c08284031215620046d057600080fd5b60405160c0810181811067ffffffffffffffff821117156200470257634e487b7160e01b600052604160045260246000fd5b604052905080620047138362004102565b8152620047236020840162004102565b602082015260408301516040820152620047406060840162004102565b60608201526080830151608082015260a083015160a08201525092915050565b600060c082840312156200477357600080fd5b62003e808383620046bd565b60008160001904831182151516156200479c576200479c62004647565b500290565b600082620047bf57634e487b7160e01b600052601260045260246000fd5b500490565b81516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c08101620041ad565b81516001600160a01b03908116825260208084015190830152604092830151169181019190915260600190565b600082516200485581846020870162004013565b9190910192915050565b6000602082840312156200487257600080fd5b815162003e80816200416d56fe60806040523480156200001157600080fd5b5060405162000f7538038062000f75833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610af580620004806000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806383197ef01161006657806383197ef01461019b57806395d89b41146101a5578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b806342966c68146101575780635600f04f1461016a57806370a082311461017257600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063392f37e91461014f575b600080fd5b6100dc6101f9565b6040516100e991906108fa565b60405180910390f35b61010561010036600461096b565b61028b565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610995565b6102a1565b60085460405160ff90911681526020016100e9565b6100dc610357565b6101056101653660046109d1565b610366565b6100dc6103dc565b6101196101803660046109ea565b6001600160a01b031660009081526020819052604090205490565b6101a36103eb565b005b6100dc610492565b6101056101bb36600461096b565b6104a1565b6101196101ce366004610a0c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020890610a3f565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a3f565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b60006102983384846104ae565b50600192915050565b60006102ae8484846105d3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103385760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034c85336103478685610a90565b6104ae565b506001949350505050565b60606007805461020890610a3f565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b6005546103d4906001600160a01b0316836107ab565b506001919050565b60606006805461020890610a3f565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b604482015260640161032f565b6005546001600160a01b0316ff5b60606004805461020890610a3f565b60006102983384846105d3565b6001600160a01b0383166105105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032f565b6001600160a01b0382166105715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032f565b6001600160a01b0382166106995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032f565b6001600160a01b038316600090815260208190526040902054818110156107115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032f565b61071b8282610a90565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610751908490610aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079d91815260200190565b60405180910390a350505050565b6001600160a01b03821661080b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032f565b6001600160a01b0382166000908152602081905260409020548181101561087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032f565b6108898282610a90565b6001600160a01b038416600090815260208190526040812091909155600280548492906108b7908490610a90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105c6565b600060208083528351808285015260005b818110156109275785810183015185820160400152820161090b565b81811115610939576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461096657600080fd5b919050565b6000806040838503121561097e57600080fd5b6109878361094f565b946020939093013593505050565b6000806000606084860312156109aa57600080fd5b6109b38461094f565b92506109c16020850161094f565b9150604084013590509250925092565b6000602082840312156109e357600080fd5b5035919050565b6000602082840312156109fc57600080fd5b610a058261094f565b9392505050565b60008060408385031215610a1f57600080fd5b610a288361094f565b9150610a366020840161094f565b90509250929050565b600181811c90821680610a5357607f821691505b60208210811415610a7457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610aa257610aa2610a7a565b500390565b60008219821115610aba57610aba610a7a565b50019056fea2646970667358221220398b94006918768239e34bc2a5c722747340ba212734f3445413bc565e8dcdef64736f6c63430008090033a26469706673582212203f94ae876caa6e71abf51a0cb3f94cee1ba07fa2c5dbd3eb2c35fe4e25056fb164736f6c63430008090033`,
  BytecodeLen: 23481,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "ProjectOwner": ProjectOwner,
  "Sponsor": Sponsor
  };
export const _APIs = {
  };
