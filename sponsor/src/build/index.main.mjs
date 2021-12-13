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
      4: [ctc0, ctc0, ctc1],
      5: [ctc0, ctc0],
      6: [ctc0, ctc0, ctc1, ctc2],
      7: [ctc0, ctc0, ctc1, ctc2],
      8: [ctc0, ctc0, ctc1, ctc2, ctc1, ctc1],
      9: [ctc0, ctc0, ctc1, ctc2, ctc1],
      12: [ctc0, ctc1, ctc2],
      13: [ctc0, ctc0, ctc1, ctc2, ctc1],
      16: [ctc0, ctc1, ctc2],
      17: [ctc0, ctc0, ctc1, ctc2, ctc1],
      20: [ctc0, ctc1, ctc2],
      21: [ctc0, ctc0, ctc1, ctc2, ctc1, ctc1],
      22: [ctc0, ctc0, ctc1, ctc2, ctc1],
      25: [ctc0, ctc1, ctc2],
      26: [ctc0, ctc0, ctc1, ctc2, ctc1],
      29: [ctc0, ctc1, ctc2],
      30: [ctc0, ctc0, ctc1, ctc2, ctc1],
      33: [ctc0, ctc1, ctc2],
      34: [ctc0, ctc0, ctc1, ctc2, ctc1, ctc3],
      35: [ctc0, ctc0, ctc1, ctc2, ctc1],
      38: [ctc0, ctc1, ctc2],
      39: [ctc0, ctc0, ctc1, ctc2, ctc1],
      42: [ctc0, ctc1, ctc2],
      43: [ctc0, ctc0, ctc1, ctc2],
      46: [ctc0, ctc1, ctc2]
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
  
  
  const v377 = stdlib.protect(ctc2, interact.projectInfo, 'for ProjectOwner\'s interact field projectInfo');
  
  const txn1 = await (ctc.sendrecv({
    args: [v377],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/index.rsh:44:6:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v381], secs: v383, time: v382, didSend: v24, from: v380 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
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
  const {data: [v381], secs: v383, time: v382, didSend: v24, from: v380 } = txn1;
  ;
  stdlib.protect(ctc3, await interact.reportReady(), {
    at: './src/index.rsh:1:39:application',
    fs: ['at ./src/index.rsh:1:21:application call to [unknown function] (defined at: ./src/index.rsh:1:25:function exp)', 'at ./src/index.rsh:46:26:application call to "liftedInteract" (defined at: ./src/index.rsh:46:26:application)'],
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
  const {data: [v390], secs: v392, time: v391, didSend: v38, from: v389 } = txn2;
  ;
  const v394 = v390.contribute;
  if (v394) {
    const v404 = v381.fundraisingGoal;
    
    const txn3 = await (ctc.sendrecv({
      args: [v380, v389, v404],
      evt_cnt: 1,
      funcNum: 2,
      lct: v391,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v406], secs: v408, time: v407, didSend: v65, from: v405 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v410 = stdlib.addressEq(v380, v405);
        stdlib.assert(v410, {
          at: './src/index.rsh:65:6:dot',
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
    const {data: [v406], secs: v408, time: v407, didSend: v65, from: v405 } = txn3;
    ;
    const v410 = stdlib.addressEq(v380, v405);
    stdlib.assert(v410, {
      at: './src/index.rsh:65:6:dot',
      fs: [],
      msg: 'sender correct',
      who: 'ProjectOwner'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v415], secs: v417, time: v416, didSend: v76, from: v414 } = txn4;
    ;
    const v419 = stdlib.addressEq(v389, v414);
    stdlib.assert(v419, {
      at: './src/index.rsh:70:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'ProjectOwner'
      });
    if (v415) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v429, time: v428, didSend: v99, from: v427 } = txn5;
      ;
      const v432 = stdlib.addressEq(v389, v427);
      stdlib.assert(v432, {
        at: './src/index.rsh:81:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'ProjectOwner'
        });
      stdlib.protect(ctc3, await interact.reportPayment(v406), {
        at: './src/index.rsh:83:45:application',
        fs: ['at ./src/index.rsh:83:7:application call to [unknown function] (defined at: ./src/index.rsh:83:20:function exp)'],
        msg: 'reportPayment',
        who: 'ProjectOwner'
        });
      
      ;
      stdlib.protect(ctc3, await interact.reportTransfer(v406), {
        at: './src/index.rsh:85:46:application',
        fs: ['at ./src/index.rsh:85:7:application call to [unknown function] (defined at: ./src/index.rsh:85:20:function exp)'],
        msg: 'reportTransfer',
        who: 'ProjectOwner'
        });
      
      const v443 = stdlib.protect(ctc9, await interact.getParams(), {
        at: './src/index.rsh:88:100:application',
        fs: ['at ./src/index.rsh:88:10:application call to [unknown function] (defined at: ./src/index.rsh:88:14:function exp)'],
        msg: 'getParams',
        who: 'ProjectOwner'
        });
      const v444 = v443.name;
      const v445 = v443.symbol;
      const v446 = v443.url;
      const v447 = v443.metadata;
      const v448 = v443.supply;
      const v449 = v443.amt;
      
      const txn6 = await (ctc.sendrecv({
        args: [v380, v389, v444, v445, v446, v447, v448, v449],
        evt_cnt: 6,
        funcNum: 5,
        lct: v428,
        onlyIf: true,
        out_tys: [ctc6, ctc7, ctc8, ctc6, ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v451, v452, v453, v454, v455, v456], secs: v458, time: v457, didSend: v137, from: v450 } = txn6;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v460 = stdlib.addressEq(v380, v450);
          stdlib.assert(v460, {
            at: './src/index.rsh:91:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          const v461 = stdlib.simTokenNew(sim_r, v451, v452, v453, v454, v455, undefined);
          const v462 = await txn6.getOutput('tokenNew', 'v461', ctc10, v461);
          
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc11, ctc11, ctc6, ctc7, ctc8, ctc6, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v451, v452, v453, v454, v455, v456], secs: v458, time: v457, didSend: v137, from: v450 } = txn6;
      ;
      const v460 = stdlib.addressEq(v380, v450);
      stdlib.assert(v460, {
        at: './src/index.rsh:91:6:dot',
        fs: [],
        msg: 'sender correct',
        who: 'ProjectOwner'
        });
      const v461 = undefined;
      const v462 = await txn6.getOutput('tokenNew', 'v461', ctc10, v461);
      const v464 = {
        metadata: v454,
        name: v451,
        supply: v455,
        symbol: v452,
        url: v453
        };
      stdlib.protect(ctc3, await interact.reportTokenMinted(v462, v464), {
        at: './src/index.rsh:1:39:application',
        fs: ['at ./src/index.rsh:1:21:application call to [unknown function] (defined at: ./src/index.rsh:1:25:function exp)', 'at ./src/index.rsh:95:32:application call to "liftedInteract" (defined at: ./src/index.rsh:95:32:application)'],
        msg: 'reportTokenMinted',
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
      const {data: [], secs: v467, time: v466, didSend: v150, from: v465 } = txn7;
      ;
      const v469 = stdlib.addressEq(v389, v465);
      stdlib.assert(v469, {
        at: './src/index.rsh:98:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'ProjectOwner'
        });
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 7,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v474, time: v473, didSend: v161, from: v472 } = txn8;
      ;
      const v476 = stdlib.addressEq(v389, v472);
      stdlib.assert(v476, {
        at: './src/index.rsh:114:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'ProjectOwner'
        });
      const v477 = stdlib.addressEq(v389, v380);
      const v479 = stdlib.mul(stdlib.checkedBigNumberify('./src/index.rsh:103:39:decimal', stdlib.UInt_max, 40), v455);
      const v480 = stdlib.div(v479, stdlib.checkedBigNumberify('./src/index.rsh:103:51:decimal', stdlib.UInt_max, 100));
      const v481 = stdlib.ge(v455, v480);
      const v482 = v477 ? v481 : false;
      if (v482) {
        const v488 = stdlib.sub(v455, v480);
        ;
        const txn9 = await (ctc.sendrecv({
          args: [v380, v389, v455, v462, v480, v488],
          evt_cnt: 0,
          funcNum: 8,
          lct: v473,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn9) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v495, time: v494, didSend: v202, from: v493 } = txn9;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v497 = stdlib.addressEq(v380, v493);
            stdlib.assert(v497, {
              at: './src/index.rsh:117:6:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            const v498 = stdlib.addressEq(v380, v380);
            const v502 = stdlib.ge(v488, v480);
            const v503 = v498 ? v502 : false;
            if (v503) {
              const v509 = stdlib.sub(v488, v480);
              sim_r.txns.push({
                amt: v480,
                kind: 'from',
                to: v380,
                tok: v462
                });
              
              sim_r.isHalt = false;
              }
            else {
              if (v502) {
                const v568 = stdlib.sub(v488, v480);
                sim_r.txns.push({
                  amt: v480,
                  kind: 'from',
                  to: v380,
                  tok: v462
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
        const {data: [], secs: v495, time: v494, didSend: v202, from: v493 } = txn9;
        ;
        const v497 = stdlib.addressEq(v380, v493);
        stdlib.assert(v497, {
          at: './src/index.rsh:117:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        const v498 = stdlib.addressEq(v380, v380);
        const v502 = stdlib.ge(v488, v480);
        const v503 = v498 ? v502 : false;
        if (v503) {
          const v509 = stdlib.sub(v488, v480);
          ;
          stdlib.protect(ctc3, await interact.didTransfer(true, v480), {
            at: './src/index.rsh:1:39:application',
            fs: ['at ./src/index.rsh:1:21:application call to [unknown function] (defined at: ./src/index.rsh:1:25:function exp)', 'at ./src/index.rsh:105:29:application call to "liftedInteract" (defined at: ./src/index.rsh:105:29:application)', 'at ./src/index.rsh:118:14:application call to "doTransfer1" (defined at: ./src/index.rsh:102:33:function exp)'],
            msg: 'didTransfer',
            who: 'ProjectOwner'
            });
          
          const txn10 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v516, time: v515, didSend: v243, from: v514 } = txn10;
          ;
          const v518 = stdlib.addressEq(v389, v514);
          stdlib.assert(v518, {
            at: './src/index.rsh:121:4:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          ;
          stdlib.protect(ctc3, await interact.programEnded(), {
            at: './src/index.rsh:123:43:application',
            fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
            msg: 'programEnded',
            who: 'ProjectOwner'
            });
          
          let v526 = v515;
          
          while (await (async () => {
            
            return true;})()) {
            const txn11 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 11,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v538, time: v537, didSend: v262, from: v536 } = txn11;
            ;
            const v540 = stdlib.addressEq(v389, v536);
            stdlib.assert(v540, {
              at: './src/index.rsh:128:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            const cv526 = v537;
            
            v526 = cv526;
            
            continue;
            
            }
          undefined;
          undefined;
          stdlib.protect(ctc3, await interact.reportExit(), {
            at: './src/index.rsh:137:42:application',
            fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
            msg: 'reportExit',
            who: 'ProjectOwner'
            });
          
          return;
          
          
          }
        else {
          if (v502) {
            const v568 = stdlib.sub(v488, v480);
            ;
            stdlib.protect(ctc3, await interact.didTransfer(true, v480), {
              at: './src/index.rsh:1:39:application',
              fs: ['at ./src/index.rsh:1:21:application call to [unknown function] (defined at: ./src/index.rsh:1:25:function exp)', 'at ./src/index.rsh:109:29:application call to "liftedInteract" (defined at: ./src/index.rsh:109:29:application)', 'at ./src/index.rsh:118:14:application call to "doTransfer1" (defined at: ./src/index.rsh:102:33:function exp)'],
              msg: 'didTransfer',
              who: 'ProjectOwner'
              });
            
            const txn10 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 12,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v575, time: v574, didSend: v243, from: v573 } = txn10;
            ;
            const v577 = stdlib.addressEq(v389, v573);
            stdlib.assert(v577, {
              at: './src/index.rsh:121:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            ;
            stdlib.protect(ctc3, await interact.programEnded(), {
              at: './src/index.rsh:123:43:application',
              fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
              msg: 'programEnded',
              who: 'ProjectOwner'
              });
            
            let v585 = v574;
            
            while (await (async () => {
              
              return true;})()) {
              const txn11 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 14,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v597, time: v596, didSend: v262, from: v595 } = txn11;
              ;
              const v599 = stdlib.addressEq(v389, v595);
              stdlib.assert(v599, {
                at: './src/index.rsh:128:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              const cv585 = v596;
              
              v585 = cv585;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc3, await interact.reportExit(), {
              at: './src/index.rsh:137:42:application',
              fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
              msg: 'reportExit',
              who: 'ProjectOwner'
              });
            
            return;
            
            
            }
          else {
            const txn10 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 15,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v621, time: v620, didSend: v243, from: v619 } = txn10;
            ;
            const v623 = stdlib.addressEq(v389, v619);
            stdlib.assert(v623, {
              at: './src/index.rsh:121:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            ;
            stdlib.protect(ctc3, await interact.programEnded(), {
              at: './src/index.rsh:123:43:application',
              fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
              msg: 'programEnded',
              who: 'ProjectOwner'
              });
            
            let v631 = v620;
            
            while (await (async () => {
              
              return true;})()) {
              const txn11 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 17,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v643, time: v642, didSend: v262, from: v641 } = txn11;
              ;
              const v645 = stdlib.addressEq(v389, v641);
              stdlib.assert(v645, {
                at: './src/index.rsh:128:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              const cv631 = v642;
              
              v631 = cv631;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc3, await interact.reportExit(), {
              at: './src/index.rsh:137:42:application',
              fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
              msg: 'reportExit',
              who: 'ProjectOwner'
              });
            
            return;
            
            
            }}
        
        }
      else {
        if (v481) {
          const v673 = stdlib.sub(v455, v480);
          ;
          const txn9 = await (ctc.sendrecv({
            args: [v380, v389, v455, v462, v480, v673],
            evt_cnt: 0,
            funcNum: 18,
            lct: v473,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v680, time: v679, didSend: v202, from: v678 } = txn9;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v682 = stdlib.addressEq(v380, v678);
              stdlib.assert(v682, {
                at: './src/index.rsh:117:6:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              const v683 = stdlib.addressEq(v380, v380);
              const v687 = stdlib.ge(v673, v480);
              const v688 = v683 ? v687 : false;
              if (v688) {
                const v694 = stdlib.sub(v673, v480);
                sim_r.txns.push({
                  amt: v480,
                  kind: 'from',
                  to: v380,
                  tok: v462
                  });
                
                sim_r.isHalt = false;
                }
              else {
                if (v687) {
                  const v753 = stdlib.sub(v673, v480);
                  sim_r.txns.push({
                    amt: v480,
                    kind: 'from',
                    to: v380,
                    tok: v462
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
          const {data: [], secs: v680, time: v679, didSend: v202, from: v678 } = txn9;
          ;
          const v682 = stdlib.addressEq(v380, v678);
          stdlib.assert(v682, {
            at: './src/index.rsh:117:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          const v683 = stdlib.addressEq(v380, v380);
          const v687 = stdlib.ge(v673, v480);
          const v688 = v683 ? v687 : false;
          if (v688) {
            const v694 = stdlib.sub(v673, v480);
            ;
            stdlib.protect(ctc3, await interact.didTransfer(true, v480), {
              at: './src/index.rsh:1:39:application',
              fs: ['at ./src/index.rsh:1:21:application call to [unknown function] (defined at: ./src/index.rsh:1:25:function exp)', 'at ./src/index.rsh:105:29:application call to "liftedInteract" (defined at: ./src/index.rsh:105:29:application)', 'at ./src/index.rsh:118:14:application call to "doTransfer1" (defined at: ./src/index.rsh:102:33:function exp)'],
              msg: 'didTransfer',
              who: 'ProjectOwner'
              });
            
            const txn10 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 19,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v701, time: v700, didSend: v243, from: v699 } = txn10;
            ;
            const v703 = stdlib.addressEq(v389, v699);
            stdlib.assert(v703, {
              at: './src/index.rsh:121:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            ;
            stdlib.protect(ctc3, await interact.programEnded(), {
              at: './src/index.rsh:123:43:application',
              fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
              msg: 'programEnded',
              who: 'ProjectOwner'
              });
            
            let v711 = v700;
            
            while (await (async () => {
              
              return true;})()) {
              const txn11 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 21,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v723, time: v722, didSend: v262, from: v721 } = txn11;
              ;
              const v725 = stdlib.addressEq(v389, v721);
              stdlib.assert(v725, {
                at: './src/index.rsh:128:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              const cv711 = v722;
              
              v711 = cv711;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc3, await interact.reportExit(), {
              at: './src/index.rsh:137:42:application',
              fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
              msg: 'reportExit',
              who: 'ProjectOwner'
              });
            
            return;
            
            
            }
          else {
            if (v687) {
              const v753 = stdlib.sub(v673, v480);
              ;
              stdlib.protect(ctc3, await interact.didTransfer(true, v480), {
                at: './src/index.rsh:1:39:application',
                fs: ['at ./src/index.rsh:1:21:application call to [unknown function] (defined at: ./src/index.rsh:1:25:function exp)', 'at ./src/index.rsh:109:29:application call to "liftedInteract" (defined at: ./src/index.rsh:109:29:application)', 'at ./src/index.rsh:118:14:application call to "doTransfer1" (defined at: ./src/index.rsh:102:33:function exp)'],
                msg: 'didTransfer',
                who: 'ProjectOwner'
                });
              
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 22,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v760, time: v759, didSend: v243, from: v758 } = txn10;
              ;
              const v762 = stdlib.addressEq(v389, v758);
              stdlib.assert(v762, {
                at: './src/index.rsh:121:4:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              ;
              stdlib.protect(ctc3, await interact.programEnded(), {
                at: './src/index.rsh:123:43:application',
                fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
                msg: 'programEnded',
                who: 'ProjectOwner'
                });
              
              let v770 = v759;
              
              while (await (async () => {
                
                return true;})()) {
                const txn11 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 0,
                  funcNum: 24,
                  out_tys: [],
                  timeoutAt: undefined,
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v782, time: v781, didSend: v262, from: v780 } = txn11;
                ;
                const v784 = stdlib.addressEq(v389, v780);
                stdlib.assert(v784, {
                  at: './src/index.rsh:128:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'ProjectOwner'
                  });
                const cv770 = v781;
                
                v770 = cv770;
                
                continue;
                
                }
              undefined;
              undefined;
              stdlib.protect(ctc3, await interact.reportExit(), {
                at: './src/index.rsh:137:42:application',
                fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
                msg: 'reportExit',
                who: 'ProjectOwner'
                });
              
              return;
              
              
              }
            else {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 25,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v806, time: v805, didSend: v243, from: v804 } = txn10;
              ;
              const v808 = stdlib.addressEq(v389, v804);
              stdlib.assert(v808, {
                at: './src/index.rsh:121:4:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              ;
              stdlib.protect(ctc3, await interact.programEnded(), {
                at: './src/index.rsh:123:43:application',
                fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
                msg: 'programEnded',
                who: 'ProjectOwner'
                });
              
              let v816 = v805;
              
              while (await (async () => {
                
                return true;})()) {
                const txn11 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 0,
                  funcNum: 27,
                  out_tys: [],
                  timeoutAt: undefined,
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v828, time: v827, didSend: v262, from: v826 } = txn11;
                ;
                const v830 = stdlib.addressEq(v389, v826);
                stdlib.assert(v830, {
                  at: './src/index.rsh:128:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'ProjectOwner'
                  });
                const cv816 = v827;
                
                v816 = cv816;
                
                continue;
                
                }
              undefined;
              undefined;
              stdlib.protect(ctc3, await interact.reportExit(), {
                at: './src/index.rsh:137:42:application',
                fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
                msg: 'reportExit',
                who: 'ProjectOwner'
                });
              
              return;
              
              
              }}
          
          }
        else {
          const txn9 = await (ctc.sendrecv({
            args: [v380, v389, v455, v462, v480, v481],
            evt_cnt: 0,
            funcNum: 28,
            lct: v473,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v852, time: v851, didSend: v202, from: v850 } = txn9;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v854 = stdlib.addressEq(v380, v850);
              stdlib.assert(v854, {
                at: './src/index.rsh:117:6:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              const v855 = stdlib.addressEq(v380, v380);
              const v860 = v855 ? v481 : false;
              if (v860) {
                const v866 = stdlib.sub(v455, v480);
                sim_r.txns.push({
                  amt: v480,
                  kind: 'from',
                  to: v380,
                  tok: v462
                  });
                
                sim_r.isHalt = false;
                }
              else {
                if (v481) {
                  const v925 = stdlib.sub(v455, v480);
                  sim_r.txns.push({
                    amt: v480,
                    kind: 'from',
                    to: v380,
                    tok: v462
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
          const {data: [], secs: v852, time: v851, didSend: v202, from: v850 } = txn9;
          ;
          const v854 = stdlib.addressEq(v380, v850);
          stdlib.assert(v854, {
            at: './src/index.rsh:117:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          const v855 = stdlib.addressEq(v380, v380);
          const v860 = v855 ? v481 : false;
          if (v860) {
            const v866 = stdlib.sub(v455, v480);
            ;
            stdlib.protect(ctc3, await interact.didTransfer(true, v480), {
              at: './src/index.rsh:1:39:application',
              fs: ['at ./src/index.rsh:1:21:application call to [unknown function] (defined at: ./src/index.rsh:1:25:function exp)', 'at ./src/index.rsh:105:29:application call to "liftedInteract" (defined at: ./src/index.rsh:105:29:application)', 'at ./src/index.rsh:118:14:application call to "doTransfer1" (defined at: ./src/index.rsh:102:33:function exp)'],
              msg: 'didTransfer',
              who: 'ProjectOwner'
              });
            
            const txn10 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 29,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v873, time: v872, didSend: v243, from: v871 } = txn10;
            ;
            const v875 = stdlib.addressEq(v389, v871);
            stdlib.assert(v875, {
              at: './src/index.rsh:121:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            ;
            stdlib.protect(ctc3, await interact.programEnded(), {
              at: './src/index.rsh:123:43:application',
              fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
              msg: 'programEnded',
              who: 'ProjectOwner'
              });
            
            let v883 = v872;
            
            while (await (async () => {
              
              return true;})()) {
              const txn11 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 31,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v895, time: v894, didSend: v262, from: v893 } = txn11;
              ;
              const v897 = stdlib.addressEq(v389, v893);
              stdlib.assert(v897, {
                at: './src/index.rsh:128:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              const cv883 = v894;
              
              v883 = cv883;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc3, await interact.reportExit(), {
              at: './src/index.rsh:137:42:application',
              fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
              msg: 'reportExit',
              who: 'ProjectOwner'
              });
            
            return;
            
            
            }
          else {
            if (v481) {
              const v925 = stdlib.sub(v455, v480);
              ;
              stdlib.protect(ctc3, await interact.didTransfer(true, v480), {
                at: './src/index.rsh:1:39:application',
                fs: ['at ./src/index.rsh:1:21:application call to [unknown function] (defined at: ./src/index.rsh:1:25:function exp)', 'at ./src/index.rsh:109:29:application call to "liftedInteract" (defined at: ./src/index.rsh:109:29:application)', 'at ./src/index.rsh:118:14:application call to "doTransfer1" (defined at: ./src/index.rsh:102:33:function exp)'],
                msg: 'didTransfer',
                who: 'ProjectOwner'
                });
              
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 32,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v932, time: v931, didSend: v243, from: v930 } = txn10;
              ;
              const v934 = stdlib.addressEq(v389, v930);
              stdlib.assert(v934, {
                at: './src/index.rsh:121:4:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              ;
              stdlib.protect(ctc3, await interact.programEnded(), {
                at: './src/index.rsh:123:43:application',
                fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
                msg: 'programEnded',
                who: 'ProjectOwner'
                });
              
              let v942 = v931;
              
              while (await (async () => {
                
                return true;})()) {
                const txn11 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 0,
                  funcNum: 34,
                  out_tys: [],
                  timeoutAt: undefined,
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v954, time: v953, didSend: v262, from: v952 } = txn11;
                ;
                const v956 = stdlib.addressEq(v389, v952);
                stdlib.assert(v956, {
                  at: './src/index.rsh:128:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'ProjectOwner'
                  });
                const cv942 = v953;
                
                v942 = cv942;
                
                continue;
                
                }
              undefined;
              undefined;
              stdlib.protect(ctc3, await interact.reportExit(), {
                at: './src/index.rsh:137:42:application',
                fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
                msg: 'reportExit',
                who: 'ProjectOwner'
                });
              
              return;
              
              
              }
            else {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 35,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v978, time: v977, didSend: v243, from: v976 } = txn10;
              ;
              const v980 = stdlib.addressEq(v389, v976);
              stdlib.assert(v980, {
                at: './src/index.rsh:121:4:dot',
                fs: [],
                msg: 'sender correct',
                who: 'ProjectOwner'
                });
              ;
              stdlib.protect(ctc3, await interact.programEnded(), {
                at: './src/index.rsh:123:43:application',
                fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
                msg: 'programEnded',
                who: 'ProjectOwner'
                });
              
              let v988 = v977;
              
              while (await (async () => {
                
                return true;})()) {
                const txn11 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 0,
                  funcNum: 37,
                  out_tys: [],
                  timeoutAt: undefined,
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v1000, time: v999, didSend: v262, from: v998 } = txn11;
                ;
                const v1002 = stdlib.addressEq(v389, v998);
                stdlib.assert(v1002, {
                  at: './src/index.rsh:128:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'ProjectOwner'
                  });
                const cv988 = v999;
                
                v988 = cv988;
                
                continue;
                
                }
              undefined;
              undefined;
              stdlib.protect(ctc3, await interact.reportExit(), {
                at: './src/index.rsh:137:42:application',
                fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
                msg: 'reportExit',
                who: 'ProjectOwner'
                });
              
              return;
              
              
              }}
          
          }}
      
      
      
      
      
      
      
      }
    else {
      stdlib.protect(ctc3, await interact.reportCancellation(), {
        at: './src/index.rsh:73:52:application',
        fs: ['at ./src/index.rsh:73:9:application call to [unknown function] (defined at: ./src/index.rsh:73:22:function exp)'],
        msg: 'reportCancellation',
        who: 'ProjectOwner'
        });
      
      stdlib.protect(ctc3, await interact.reportExit(), {
        at: './src/index.rsh:74:44:application',
        fs: ['at ./src/index.rsh:74:9:application call to [unknown function] (defined at: ./src/index.rsh:74:22:function exp)'],
        msg: 'reportExit',
        who: 'ProjectOwner'
        });
      
      return;
      }
    
    
    
    }
  else {
    stdlib.protect(ctc3, await interact.reportCancellation(), {
      at: './src/index.rsh:55:52:application',
      fs: ['at ./src/index.rsh:55:9:application call to [unknown function] (defined at: ./src/index.rsh:55:22:function exp)'],
      msg: 'reportCancellation',
      who: 'ProjectOwner'
      });
    
    stdlib.protect(ctc3, await interact.reportExit(), {
      at: './src/index.rsh:56:44:application',
      fs: ['at ./src/index.rsh:56:9:application call to [unknown function] (defined at: ./src/index.rsh:56:22:function exp)'],
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
  const {data: [v381], secs: v383, time: v382, didSend: v24, from: v380 } = txn1;
  ;
  const v388 = stdlib.protect(ctc4, await interact.sponsor(v381), {
    at: './src/index.rsh:51:61:application',
    fs: ['at ./src/index.rsh:51:9:application call to [unknown function] (defined at: ./src/index.rsh:51:13:function exp)'],
    msg: 'sponsor',
    who: 'Sponsor'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v380, v388],
    evt_cnt: 1,
    funcNum: 1,
    lct: v382,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v390], secs: v392, time: v391, didSend: v38, from: v389 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v394 = v390.contribute;
      if (v394) {
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
  const {data: [v390], secs: v392, time: v391, didSend: v38, from: v389 } = txn2;
  ;
  const v394 = v390.contribute;
  if (v394) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc0],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v406], secs: v408, time: v407, didSend: v65, from: v405 } = txn3;
    ;
    const v410 = stdlib.addressEq(v380, v405);
    stdlib.assert(v410, {
      at: './src/index.rsh:65:6:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    const v413 = stdlib.protect(ctc3, await interact.confirmAgreeToSponsor(v406), {
      at: './src/index.rsh:69:76:application',
      fs: ['at ./src/index.rsh:69:9:application call to [unknown function] (defined at: ./src/index.rsh:69:13:function exp)'],
      msg: 'confirmAgreeToSponsor',
      who: 'Sponsor'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v380, v389, v406, v413],
      evt_cnt: 1,
      funcNum: 3,
      lct: v407,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v415], secs: v417, time: v416, didSend: v76, from: v414 } = txn4;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v419 = stdlib.addressEq(v389, v414);
        stdlib.assert(v419, {
          at: './src/index.rsh:70:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        if (v415) {
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
      tys: [ctc10, ctc10, ctc0, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v415], secs: v417, time: v416, didSend: v76, from: v414 } = txn4;
    ;
    const v419 = stdlib.addressEq(v389, v414);
    stdlib.assert(v419, {
      at: './src/index.rsh:70:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    if (v415) {
      const txn5 = await (ctc.sendrecv({
        args: [v380, v389, v406],
        evt_cnt: 0,
        funcNum: 4,
        lct: v416,
        onlyIf: true,
        out_tys: [],
        pay: [v406, []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v429, time: v428, didSend: v99, from: v427 } = txn5;
          
          sim_r.txns.push({
            amt: v406,
            kind: 'to',
            tok: undefined
            });
          const v432 = stdlib.addressEq(v389, v427);
          stdlib.assert(v432, {
            at: './src/index.rsh:81:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          
          sim_r.txns.push({
            amt: v406,
            kind: 'from',
            to: v380,
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
      const {data: [], secs: v429, time: v428, didSend: v99, from: v427 } = txn5;
      ;
      const v432 = stdlib.addressEq(v389, v427);
      stdlib.assert(v432, {
        at: './src/index.rsh:81:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sponsor'
        });
      stdlib.protect(ctc5, await interact.reportPayment(v406), {
        at: './src/index.rsh:83:45:application',
        fs: ['at ./src/index.rsh:83:7:application call to [unknown function] (defined at: ./src/index.rsh:83:20:function exp)'],
        msg: 'reportPayment',
        who: 'Sponsor'
        });
      
      ;
      stdlib.protect(ctc5, await interact.reportTransfer(v406), {
        at: './src/index.rsh:85:46:application',
        fs: ['at ./src/index.rsh:85:7:application call to [unknown function] (defined at: ./src/index.rsh:85:20:function exp)'],
        msg: 'reportTransfer',
        who: 'Sponsor'
        });
      
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 6,
        funcNum: 5,
        out_tys: [ctc6, ctc7, ctc8, ctc6, ctc0, ctc0],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [v451, v452, v453, v454, v455, v456], secs: v458, time: v457, didSend: v137, from: v450 } = txn6;
      ;
      const v460 = stdlib.addressEq(v380, v450);
      stdlib.assert(v460, {
        at: './src/index.rsh:91:6:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sponsor'
        });
      const v461 = undefined;
      const v462 = await txn6.getOutput('tokenNew', 'v461', ctc9, v461);
      const txn7 = await (ctc.sendrecv({
        args: [v380, v389, v455, v462],
        evt_cnt: 0,
        funcNum: 6,
        lct: v457,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v467, time: v466, didSend: v150, from: v465 } = txn7;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v469 = stdlib.addressEq(v389, v465);
          stdlib.assert(v469, {
            at: './src/index.rsh:98:5:dot',
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
      const {data: [], secs: v467, time: v466, didSend: v150, from: v465 } = txn7;
      ;
      const v469 = stdlib.addressEq(v389, v465);
      stdlib.assert(v469, {
        at: './src/index.rsh:98:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sponsor'
        });
      const v471 = {
        metadata: v454,
        name: v451,
        supply: v455,
        symbol: v452,
        url: v453
        };
      stdlib.protect(ctc5, await interact.reportTokenMinted(v462, v471), {
        at: './src/index.rsh:1:39:application',
        fs: ['at ./src/index.rsh:1:21:application call to [unknown function] (defined at: ./src/index.rsh:1:25:function exp)', 'at ./src/index.rsh:99:31:application call to "liftedInteract" (defined at: ./src/index.rsh:99:31:application)'],
        msg: 'reportTokenMinted',
        who: 'Sponsor'
        });
      
      const txn8 = await (ctc.sendrecv({
        args: [v380, v389, v455, v462],
        evt_cnt: 0,
        funcNum: 7,
        lct: v466,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v474, time: v473, didSend: v161, from: v472 } = txn8;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v476 = stdlib.addressEq(v389, v472);
          stdlib.assert(v476, {
            at: './src/index.rsh:114:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          const v477 = stdlib.addressEq(v389, v380);
          const v479 = stdlib.mul(stdlib.checkedBigNumberify('./src/index.rsh:103:39:decimal', stdlib.UInt_max, 40), v455);
          const v480 = stdlib.div(v479, stdlib.checkedBigNumberify('./src/index.rsh:103:51:decimal', stdlib.UInt_max, 100));
          const v481 = stdlib.ge(v455, v480);
          const v482 = v477 ? v481 : false;
          if (v482) {
            const v488 = stdlib.sub(v455, v480);
            sim_r.txns.push({
              amt: v480,
              kind: 'from',
              to: v389,
              tok: v462
              });
            
            sim_r.isHalt = false;
            }
          else {
            if (v481) {
              const v673 = stdlib.sub(v455, v480);
              sim_r.txns.push({
                amt: v480,
                kind: 'from',
                to: v389,
                tok: v462
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
      const {data: [], secs: v474, time: v473, didSend: v161, from: v472 } = txn8;
      ;
      const v476 = stdlib.addressEq(v389, v472);
      stdlib.assert(v476, {
        at: './src/index.rsh:114:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sponsor'
        });
      const v477 = stdlib.addressEq(v389, v380);
      const v479 = stdlib.mul(stdlib.checkedBigNumberify('./src/index.rsh:103:39:decimal', stdlib.UInt_max, 40), v455);
      const v480 = stdlib.div(v479, stdlib.checkedBigNumberify('./src/index.rsh:103:51:decimal', stdlib.UInt_max, 100));
      const v481 = stdlib.ge(v455, v480);
      const v482 = v477 ? v481 : false;
      if (v482) {
        const v488 = stdlib.sub(v455, v480);
        ;
        stdlib.protect(ctc5, await interact.didTransfer(true, v480), {
          at: './src/index.rsh:1:39:application',
          fs: ['at ./src/index.rsh:1:21:application call to [unknown function] (defined at: ./src/index.rsh:1:25:function exp)', 'at ./src/index.rsh:105:29:application call to "liftedInteract" (defined at: ./src/index.rsh:105:29:application)', 'at ./src/index.rsh:115:14:application call to "doTransfer1" (defined at: ./src/index.rsh:102:33:function exp)'],
          msg: 'didTransfer',
          who: 'Sponsor'
          });
        
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 8,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v495, time: v494, didSend: v202, from: v493 } = txn9;
        ;
        const v497 = stdlib.addressEq(v380, v493);
        stdlib.assert(v497, {
          at: './src/index.rsh:117:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        const v498 = stdlib.addressEq(v380, v380);
        const v502 = stdlib.ge(v488, v480);
        const v503 = v498 ? v502 : false;
        if (v503) {
          const v509 = stdlib.sub(v488, v480);
          ;
          const txn10 = await (ctc.sendrecv({
            args: [v380, v389, v455, v462, v509],
            evt_cnt: 0,
            funcNum: 9,
            lct: v494,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn10) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v516, time: v515, didSend: v243, from: v514 } = txn10;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v518 = stdlib.addressEq(v389, v514);
              stdlib.assert(v518, {
                at: './src/index.rsh:121:4:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              sim_r.txns.push({
                amt: v509,
                kind: 'from',
                to: v380,
                tok: v462
                });
              
              const v526 = v515;
              
              if (await (async () => {
                
                return true;})()) {
                sim_r.isHalt = false;
                }
              else {
                stdlib.simTokenBurn(sim_r, v462, v455);
                stdlib.simTokenDestroy(sim_r, v462);
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
          const {data: [], secs: v516, time: v515, didSend: v243, from: v514 } = txn10;
          ;
          const v518 = stdlib.addressEq(v389, v514);
          stdlib.assert(v518, {
            at: './src/index.rsh:121:4:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          ;
          stdlib.protect(ctc5, await interact.programEnded(), {
            at: './src/index.rsh:123:43:application',
            fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
            msg: 'programEnded',
            who: 'Sponsor'
            });
          
          let v526 = v515;
          
          while (await (async () => {
            
            return true;})()) {
            const txn11 = await (ctc.sendrecv({
              args: [v389, v455, v462],
              evt_cnt: 0,
              funcNum: 11,
              lct: v526,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn11) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v538, time: v537, didSend: v262, from: v536 } = txn11;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v540 = stdlib.addressEq(v389, v536);
                stdlib.assert(v540, {
                  at: './src/index.rsh:128:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                const cv526 = v537;
                
                await (async () => {
                  const v526 = cv526;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    stdlib.simTokenBurn(sim_r, v462, v455);
                    stdlib.simTokenDestroy(sim_r, v462);
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
            const {data: [], secs: v538, time: v537, didSend: v262, from: v536 } = txn11;
            ;
            const v540 = stdlib.addressEq(v389, v536);
            stdlib.assert(v540, {
              at: './src/index.rsh:128:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            const cv526 = v537;
            
            v526 = cv526;
            
            continue;
            
            }
          undefined;
          undefined;
          stdlib.protect(ctc5, await interact.reportExit(), {
            at: './src/index.rsh:137:42:application',
            fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
            msg: 'reportExit',
            who: 'Sponsor'
            });
          
          return;
          
          
          }
        else {
          if (v502) {
            const v568 = stdlib.sub(v488, v480);
            ;
            const txn10 = await (ctc.sendrecv({
              args: [v380, v389, v455, v462, v568],
              evt_cnt: 0,
              funcNum: 12,
              lct: v494,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn10) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v575, time: v574, didSend: v243, from: v573 } = txn10;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v577 = stdlib.addressEq(v389, v573);
                stdlib.assert(v577, {
                  at: './src/index.rsh:121:4:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                sim_r.txns.push({
                  amt: v568,
                  kind: 'from',
                  to: v380,
                  tok: v462
                  });
                
                const v585 = v574;
                
                if (await (async () => {
                  
                  return true;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  stdlib.simTokenBurn(sim_r, v462, v455);
                  stdlib.simTokenDestroy(sim_r, v462);
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
            const {data: [], secs: v575, time: v574, didSend: v243, from: v573 } = txn10;
            ;
            const v577 = stdlib.addressEq(v389, v573);
            stdlib.assert(v577, {
              at: './src/index.rsh:121:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            ;
            stdlib.protect(ctc5, await interact.programEnded(), {
              at: './src/index.rsh:123:43:application',
              fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
              msg: 'programEnded',
              who: 'Sponsor'
              });
            
            let v585 = v574;
            
            while (await (async () => {
              
              return true;})()) {
              const txn11 = await (ctc.sendrecv({
                args: [v389, v455, v462],
                evt_cnt: 0,
                funcNum: 14,
                lct: v585,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn11) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v597, time: v596, didSend: v262, from: v595 } = txn11;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v599 = stdlib.addressEq(v389, v595);
                  stdlib.assert(v599, {
                    at: './src/index.rsh:128:7:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Sponsor'
                    });
                  const cv585 = v596;
                  
                  await (async () => {
                    const v585 = cv585;
                    
                    if (await (async () => {
                      
                      return true;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      stdlib.simTokenBurn(sim_r, v462, v455);
                      stdlib.simTokenDestroy(sim_r, v462);
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
              const {data: [], secs: v597, time: v596, didSend: v262, from: v595 } = txn11;
              ;
              const v599 = stdlib.addressEq(v389, v595);
              stdlib.assert(v599, {
                at: './src/index.rsh:128:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              const cv585 = v596;
              
              v585 = cv585;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc5, await interact.reportExit(), {
              at: './src/index.rsh:137:42:application',
              fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
              msg: 'reportExit',
              who: 'Sponsor'
              });
            
            return;
            
            
            }
          else {
            const txn10 = await (ctc.sendrecv({
              args: [v380, v389, v455, v462, v488],
              evt_cnt: 0,
              funcNum: 15,
              lct: v494,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn10) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v621, time: v620, didSend: v243, from: v619 } = txn10;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v623 = stdlib.addressEq(v389, v619);
                stdlib.assert(v623, {
                  at: './src/index.rsh:121:4:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                sim_r.txns.push({
                  amt: v488,
                  kind: 'from',
                  to: v380,
                  tok: v462
                  });
                
                const v631 = v620;
                
                if (await (async () => {
                  
                  return true;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  stdlib.simTokenBurn(sim_r, v462, v455);
                  stdlib.simTokenDestroy(sim_r, v462);
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
            const {data: [], secs: v621, time: v620, didSend: v243, from: v619 } = txn10;
            ;
            const v623 = stdlib.addressEq(v389, v619);
            stdlib.assert(v623, {
              at: './src/index.rsh:121:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            ;
            stdlib.protect(ctc5, await interact.programEnded(), {
              at: './src/index.rsh:123:43:application',
              fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
              msg: 'programEnded',
              who: 'Sponsor'
              });
            
            let v631 = v620;
            
            while (await (async () => {
              
              return true;})()) {
              const txn11 = await (ctc.sendrecv({
                args: [v389, v455, v462],
                evt_cnt: 0,
                funcNum: 17,
                lct: v631,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn11) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v643, time: v642, didSend: v262, from: v641 } = txn11;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v645 = stdlib.addressEq(v389, v641);
                  stdlib.assert(v645, {
                    at: './src/index.rsh:128:7:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Sponsor'
                    });
                  const cv631 = v642;
                  
                  await (async () => {
                    const v631 = cv631;
                    
                    if (await (async () => {
                      
                      return true;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      stdlib.simTokenBurn(sim_r, v462, v455);
                      stdlib.simTokenDestroy(sim_r, v462);
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
              const {data: [], secs: v643, time: v642, didSend: v262, from: v641 } = txn11;
              ;
              const v645 = stdlib.addressEq(v389, v641);
              stdlib.assert(v645, {
                at: './src/index.rsh:128:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              const cv631 = v642;
              
              v631 = cv631;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc5, await interact.reportExit(), {
              at: './src/index.rsh:137:42:application',
              fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
              msg: 'reportExit',
              who: 'Sponsor'
              });
            
            return;
            
            
            }}
        
        }
      else {
        if (v481) {
          const v673 = stdlib.sub(v455, v480);
          ;
          stdlib.protect(ctc5, await interact.didTransfer(true, v480), {
            at: './src/index.rsh:1:39:application',
            fs: ['at ./src/index.rsh:1:21:application call to [unknown function] (defined at: ./src/index.rsh:1:25:function exp)', 'at ./src/index.rsh:109:29:application call to "liftedInteract" (defined at: ./src/index.rsh:109:29:application)', 'at ./src/index.rsh:115:14:application call to "doTransfer1" (defined at: ./src/index.rsh:102:33:function exp)'],
            msg: 'didTransfer',
            who: 'Sponsor'
            });
          
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 18,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v680, time: v679, didSend: v202, from: v678 } = txn9;
          ;
          const v682 = stdlib.addressEq(v380, v678);
          stdlib.assert(v682, {
            at: './src/index.rsh:117:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          const v683 = stdlib.addressEq(v380, v380);
          const v687 = stdlib.ge(v673, v480);
          const v688 = v683 ? v687 : false;
          if (v688) {
            const v694 = stdlib.sub(v673, v480);
            ;
            const txn10 = await (ctc.sendrecv({
              args: [v380, v389, v455, v462, v694],
              evt_cnt: 0,
              funcNum: 19,
              lct: v679,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn10) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v701, time: v700, didSend: v243, from: v699 } = txn10;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v703 = stdlib.addressEq(v389, v699);
                stdlib.assert(v703, {
                  at: './src/index.rsh:121:4:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                sim_r.txns.push({
                  amt: v694,
                  kind: 'from',
                  to: v380,
                  tok: v462
                  });
                
                const v711 = v700;
                
                if (await (async () => {
                  
                  return true;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  stdlib.simTokenBurn(sim_r, v462, v455);
                  stdlib.simTokenDestroy(sim_r, v462);
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
            const {data: [], secs: v701, time: v700, didSend: v243, from: v699 } = txn10;
            ;
            const v703 = stdlib.addressEq(v389, v699);
            stdlib.assert(v703, {
              at: './src/index.rsh:121:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            ;
            stdlib.protect(ctc5, await interact.programEnded(), {
              at: './src/index.rsh:123:43:application',
              fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
              msg: 'programEnded',
              who: 'Sponsor'
              });
            
            let v711 = v700;
            
            while (await (async () => {
              
              return true;})()) {
              const txn11 = await (ctc.sendrecv({
                args: [v389, v455, v462],
                evt_cnt: 0,
                funcNum: 21,
                lct: v711,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn11) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v723, time: v722, didSend: v262, from: v721 } = txn11;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v725 = stdlib.addressEq(v389, v721);
                  stdlib.assert(v725, {
                    at: './src/index.rsh:128:7:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Sponsor'
                    });
                  const cv711 = v722;
                  
                  await (async () => {
                    const v711 = cv711;
                    
                    if (await (async () => {
                      
                      return true;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      stdlib.simTokenBurn(sim_r, v462, v455);
                      stdlib.simTokenDestroy(sim_r, v462);
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
              const {data: [], secs: v723, time: v722, didSend: v262, from: v721 } = txn11;
              ;
              const v725 = stdlib.addressEq(v389, v721);
              stdlib.assert(v725, {
                at: './src/index.rsh:128:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              const cv711 = v722;
              
              v711 = cv711;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc5, await interact.reportExit(), {
              at: './src/index.rsh:137:42:application',
              fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
              msg: 'reportExit',
              who: 'Sponsor'
              });
            
            return;
            
            
            }
          else {
            if (v687) {
              const v753 = stdlib.sub(v673, v480);
              ;
              const txn10 = await (ctc.sendrecv({
                args: [v380, v389, v455, v462, v753],
                evt_cnt: 0,
                funcNum: 22,
                lct: v679,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn10) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v760, time: v759, didSend: v243, from: v758 } = txn10;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v762 = stdlib.addressEq(v389, v758);
                  stdlib.assert(v762, {
                    at: './src/index.rsh:121:4:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Sponsor'
                    });
                  sim_r.txns.push({
                    amt: v753,
                    kind: 'from',
                    to: v380,
                    tok: v462
                    });
                  
                  const v770 = v759;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    stdlib.simTokenBurn(sim_r, v462, v455);
                    stdlib.simTokenDestroy(sim_r, v462);
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
              const {data: [], secs: v760, time: v759, didSend: v243, from: v758 } = txn10;
              ;
              const v762 = stdlib.addressEq(v389, v758);
              stdlib.assert(v762, {
                at: './src/index.rsh:121:4:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              ;
              stdlib.protect(ctc5, await interact.programEnded(), {
                at: './src/index.rsh:123:43:application',
                fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
                msg: 'programEnded',
                who: 'Sponsor'
                });
              
              let v770 = v759;
              
              while (await (async () => {
                
                return true;})()) {
                const txn11 = await (ctc.sendrecv({
                  args: [v389, v455, v462],
                  evt_cnt: 0,
                  funcNum: 24,
                  lct: v770,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn11) => {
                    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                    
                    const {data: [], secs: v782, time: v781, didSend: v262, from: v780 } = txn11;
                    
                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                      kind: 'to',
                      tok: undefined
                      });
                    const v784 = stdlib.addressEq(v389, v780);
                    stdlib.assert(v784, {
                      at: './src/index.rsh:128:7:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Sponsor'
                      });
                    const cv770 = v781;
                    
                    await (async () => {
                      const v770 = cv770;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        stdlib.simTokenBurn(sim_r, v462, v455);
                        stdlib.simTokenDestroy(sim_r, v462);
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
                const {data: [], secs: v782, time: v781, didSend: v262, from: v780 } = txn11;
                ;
                const v784 = stdlib.addressEq(v389, v780);
                stdlib.assert(v784, {
                  at: './src/index.rsh:128:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                const cv770 = v781;
                
                v770 = cv770;
                
                continue;
                
                }
              undefined;
              undefined;
              stdlib.protect(ctc5, await interact.reportExit(), {
                at: './src/index.rsh:137:42:application',
                fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
                msg: 'reportExit',
                who: 'Sponsor'
                });
              
              return;
              
              
              }
            else {
              const txn10 = await (ctc.sendrecv({
                args: [v380, v389, v455, v462, v673],
                evt_cnt: 0,
                funcNum: 25,
                lct: v679,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn10) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v806, time: v805, didSend: v243, from: v804 } = txn10;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v808 = stdlib.addressEq(v389, v804);
                  stdlib.assert(v808, {
                    at: './src/index.rsh:121:4:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Sponsor'
                    });
                  sim_r.txns.push({
                    amt: v673,
                    kind: 'from',
                    to: v380,
                    tok: v462
                    });
                  
                  const v816 = v805;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    stdlib.simTokenBurn(sim_r, v462, v455);
                    stdlib.simTokenDestroy(sim_r, v462);
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
              const {data: [], secs: v806, time: v805, didSend: v243, from: v804 } = txn10;
              ;
              const v808 = stdlib.addressEq(v389, v804);
              stdlib.assert(v808, {
                at: './src/index.rsh:121:4:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              ;
              stdlib.protect(ctc5, await interact.programEnded(), {
                at: './src/index.rsh:123:43:application',
                fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
                msg: 'programEnded',
                who: 'Sponsor'
                });
              
              let v816 = v805;
              
              while (await (async () => {
                
                return true;})()) {
                const txn11 = await (ctc.sendrecv({
                  args: [v389, v455, v462],
                  evt_cnt: 0,
                  funcNum: 27,
                  lct: v816,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn11) => {
                    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                    
                    const {data: [], secs: v828, time: v827, didSend: v262, from: v826 } = txn11;
                    
                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                      kind: 'to',
                      tok: undefined
                      });
                    const v830 = stdlib.addressEq(v389, v826);
                    stdlib.assert(v830, {
                      at: './src/index.rsh:128:7:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Sponsor'
                      });
                    const cv816 = v827;
                    
                    await (async () => {
                      const v816 = cv816;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        stdlib.simTokenBurn(sim_r, v462, v455);
                        stdlib.simTokenDestroy(sim_r, v462);
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
                const {data: [], secs: v828, time: v827, didSend: v262, from: v826 } = txn11;
                ;
                const v830 = stdlib.addressEq(v389, v826);
                stdlib.assert(v830, {
                  at: './src/index.rsh:128:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                const cv816 = v827;
                
                v816 = cv816;
                
                continue;
                
                }
              undefined;
              undefined;
              stdlib.protect(ctc5, await interact.reportExit(), {
                at: './src/index.rsh:137:42:application',
                fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
                msg: 'reportExit',
                who: 'Sponsor'
                });
              
              return;
              
              
              }}
          
          }
        else {
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 28,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v852, time: v851, didSend: v202, from: v850 } = txn9;
          ;
          const v854 = stdlib.addressEq(v380, v850);
          stdlib.assert(v854, {
            at: './src/index.rsh:117:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          const v855 = stdlib.addressEq(v380, v380);
          const v860 = v855 ? v481 : false;
          if (v860) {
            const v866 = stdlib.sub(v455, v480);
            ;
            const txn10 = await (ctc.sendrecv({
              args: [v380, v389, v455, v462, v866],
              evt_cnt: 0,
              funcNum: 29,
              lct: v851,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn10) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v873, time: v872, didSend: v243, from: v871 } = txn10;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v875 = stdlib.addressEq(v389, v871);
                stdlib.assert(v875, {
                  at: './src/index.rsh:121:4:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                sim_r.txns.push({
                  amt: v866,
                  kind: 'from',
                  to: v380,
                  tok: v462
                  });
                
                const v883 = v872;
                
                if (await (async () => {
                  
                  return true;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  stdlib.simTokenBurn(sim_r, v462, v455);
                  stdlib.simTokenDestroy(sim_r, v462);
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
            const {data: [], secs: v873, time: v872, didSend: v243, from: v871 } = txn10;
            ;
            const v875 = stdlib.addressEq(v389, v871);
            stdlib.assert(v875, {
              at: './src/index.rsh:121:4:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            ;
            stdlib.protect(ctc5, await interact.programEnded(), {
              at: './src/index.rsh:123:43:application',
              fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
              msg: 'programEnded',
              who: 'Sponsor'
              });
            
            let v883 = v872;
            
            while (await (async () => {
              
              return true;})()) {
              const txn11 = await (ctc.sendrecv({
                args: [v389, v455, v462],
                evt_cnt: 0,
                funcNum: 31,
                lct: v883,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn11) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v895, time: v894, didSend: v262, from: v893 } = txn11;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v897 = stdlib.addressEq(v389, v893);
                  stdlib.assert(v897, {
                    at: './src/index.rsh:128:7:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Sponsor'
                    });
                  const cv883 = v894;
                  
                  await (async () => {
                    const v883 = cv883;
                    
                    if (await (async () => {
                      
                      return true;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      stdlib.simTokenBurn(sim_r, v462, v455);
                      stdlib.simTokenDestroy(sim_r, v462);
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
              const {data: [], secs: v895, time: v894, didSend: v262, from: v893 } = txn11;
              ;
              const v897 = stdlib.addressEq(v389, v893);
              stdlib.assert(v897, {
                at: './src/index.rsh:128:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              const cv883 = v894;
              
              v883 = cv883;
              
              continue;
              
              }
            undefined;
            undefined;
            stdlib.protect(ctc5, await interact.reportExit(), {
              at: './src/index.rsh:137:42:application',
              fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
              msg: 'reportExit',
              who: 'Sponsor'
              });
            
            return;
            
            
            }
          else {
            if (v481) {
              const v925 = stdlib.sub(v455, v480);
              ;
              const txn10 = await (ctc.sendrecv({
                args: [v380, v389, v455, v462, v925],
                evt_cnt: 0,
                funcNum: 32,
                lct: v851,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn10) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v932, time: v931, didSend: v243, from: v930 } = txn10;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v934 = stdlib.addressEq(v389, v930);
                  stdlib.assert(v934, {
                    at: './src/index.rsh:121:4:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Sponsor'
                    });
                  sim_r.txns.push({
                    amt: v925,
                    kind: 'from',
                    to: v380,
                    tok: v462
                    });
                  
                  const v942 = v931;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    stdlib.simTokenBurn(sim_r, v462, v455);
                    stdlib.simTokenDestroy(sim_r, v462);
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
              const {data: [], secs: v932, time: v931, didSend: v243, from: v930 } = txn10;
              ;
              const v934 = stdlib.addressEq(v389, v930);
              stdlib.assert(v934, {
                at: './src/index.rsh:121:4:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              ;
              stdlib.protect(ctc5, await interact.programEnded(), {
                at: './src/index.rsh:123:43:application',
                fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
                msg: 'programEnded',
                who: 'Sponsor'
                });
              
              let v942 = v931;
              
              while (await (async () => {
                
                return true;})()) {
                const txn11 = await (ctc.sendrecv({
                  args: [v389, v455, v462],
                  evt_cnt: 0,
                  funcNum: 34,
                  lct: v942,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn11) => {
                    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                    
                    const {data: [], secs: v954, time: v953, didSend: v262, from: v952 } = txn11;
                    
                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                      kind: 'to',
                      tok: undefined
                      });
                    const v956 = stdlib.addressEq(v389, v952);
                    stdlib.assert(v956, {
                      at: './src/index.rsh:128:7:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Sponsor'
                      });
                    const cv942 = v953;
                    
                    await (async () => {
                      const v942 = cv942;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        stdlib.simTokenBurn(sim_r, v462, v455);
                        stdlib.simTokenDestroy(sim_r, v462);
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
                const {data: [], secs: v954, time: v953, didSend: v262, from: v952 } = txn11;
                ;
                const v956 = stdlib.addressEq(v389, v952);
                stdlib.assert(v956, {
                  at: './src/index.rsh:128:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                const cv942 = v953;
                
                v942 = cv942;
                
                continue;
                
                }
              undefined;
              undefined;
              stdlib.protect(ctc5, await interact.reportExit(), {
                at: './src/index.rsh:137:42:application',
                fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
                msg: 'reportExit',
                who: 'Sponsor'
                });
              
              return;
              
              
              }
            else {
              const txn10 = await (ctc.sendrecv({
                args: [v380, v389, v455, v462],
                evt_cnt: 0,
                funcNum: 35,
                lct: v851,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn10) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v978, time: v977, didSend: v243, from: v976 } = txn10;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v980 = stdlib.addressEq(v389, v976);
                  stdlib.assert(v980, {
                    at: './src/index.rsh:121:4:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Sponsor'
                    });
                  sim_r.txns.push({
                    amt: v455,
                    kind: 'from',
                    to: v380,
                    tok: v462
                    });
                  
                  const v988 = v977;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    stdlib.simTokenBurn(sim_r, v462, v455);
                    stdlib.simTokenDestroy(sim_r, v462);
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
              const {data: [], secs: v978, time: v977, didSend: v243, from: v976 } = txn10;
              ;
              const v980 = stdlib.addressEq(v389, v976);
              stdlib.assert(v980, {
                at: './src/index.rsh:121:4:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              ;
              stdlib.protect(ctc5, await interact.programEnded(), {
                at: './src/index.rsh:123:43:application',
                fs: ['at ./src/index.rsh:123:6:application call to [unknown function] (defined at: ./src/index.rsh:123:19:function exp)'],
                msg: 'programEnded',
                who: 'Sponsor'
                });
              
              let v988 = v977;
              
              while (await (async () => {
                
                return true;})()) {
                const txn11 = await (ctc.sendrecv({
                  args: [v389, v455, v462],
                  evt_cnt: 0,
                  funcNum: 37,
                  lct: v988,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn11) => {
                    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                    
                    const {data: [], secs: v1000, time: v999, didSend: v262, from: v998 } = txn11;
                    
                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('./src/index.rsh:decimal', stdlib.UInt_max, 0),
                      kind: 'to',
                      tok: undefined
                      });
                    const v1002 = stdlib.addressEq(v389, v998);
                    stdlib.assert(v1002, {
                      at: './src/index.rsh:128:7:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Sponsor'
                      });
                    const cv988 = v999;
                    
                    await (async () => {
                      const v988 = cv988;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        stdlib.simTokenBurn(sim_r, v462, v455);
                        stdlib.simTokenDestroy(sim_r, v462);
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
                const {data: [], secs: v1000, time: v999, didSend: v262, from: v998 } = txn11;
                ;
                const v1002 = stdlib.addressEq(v389, v998);
                stdlib.assert(v1002, {
                  at: './src/index.rsh:128:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sponsor'
                  });
                const cv988 = v999;
                
                v988 = cv988;
                
                continue;
                
                }
              undefined;
              undefined;
              stdlib.protect(ctc5, await interact.reportExit(), {
                at: './src/index.rsh:137:42:application',
                fs: ['at ./src/index.rsh:137:7:application call to [unknown function] (defined at: ./src/index.rsh:137:20:function exp)'],
                msg: 'reportExit',
                who: 'Sponsor'
                });
              
              return;
              
              
              }}
          
          }}
      
      
      
      
      
      
      
      }
    else {
      stdlib.protect(ctc5, await interact.reportCancellation(), {
        at: './src/index.rsh:73:52:application',
        fs: ['at ./src/index.rsh:73:9:application call to [unknown function] (defined at: ./src/index.rsh:73:22:function exp)'],
        msg: 'reportCancellation',
        who: 'Sponsor'
        });
      
      stdlib.protect(ctc5, await interact.reportExit(), {
        at: './src/index.rsh:74:44:application',
        fs: ['at ./src/index.rsh:74:9:application call to [unknown function] (defined at: ./src/index.rsh:74:22:function exp)'],
        msg: 'reportExit',
        who: 'Sponsor'
        });
      
      return;
      }
    
    
    
    }
  else {
    stdlib.protect(ctc5, await interact.reportCancellation(), {
      at: './src/index.rsh:55:52:application',
      fs: ['at ./src/index.rsh:55:9:application call to [unknown function] (defined at: ./src/index.rsh:55:22:function exp)'],
      msg: 'reportCancellation',
      who: 'Sponsor'
      });
    
    stdlib.protect(ctc5, await interact.reportExit(), {
      at: './src/index.rsh:56:44:application',
      fs: ['at ./src/index.rsh:56:9:application call to [unknown function] (defined at: ./src/index.rsh:56:22:function exp)'],
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
// "./src/index.rsh:44:6:dot"
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
// "./src/index.rsh:44:6:dot"
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
// "./src/index.rsh:52:5:dot"
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
// "./src/index.rsh:65:6:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:65:6:dot"
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
int 1
==
assert
dup
btoi
store 252
pop
// "CheckPay"
// "./src/index.rsh:70:5:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:70:5:dot"
// "[]"
load 254
txn Sender
==
assert
load 252
bz l7_ifF
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
int 4
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l7_ifF:
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
l8_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
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
// "./src/index.rsh:81:5:dot"
// "[]"
load 253
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
// Just "sender correct"
// "./src/index.rsh:81:5:dot"
// "[]"
load 254
txn Sender
==
assert
load 253
dup
bz l11_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l11_makeTxnK:
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
bz l12_afterHandler5
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
// "./src/index.rsh:91:6:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:91:6:dot"
// "[]"
load 255
txn Sender
==
assert
int 100000
dup
bz l13_checkTxnK
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
l13_checkTxnK:
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
byte base64(AAAAAAAAAc0=)
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
int 6
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l12_afterHandler5:
// Handler 6
dup
int 6
==
bz l14_afterHandler6
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
// "./src/index.rsh:98:5:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:98:5:dot"
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
int 7
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l14_afterHandler6:
// Handler 7
dup
int 7
==
bz l15_afterHandler7
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
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/index.rsh:114:5:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:114:5:dot"
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
bz l16_ifF
load 253
load 251
-
store 249
load 251
dup
bz l17_makeTxnK
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
l17_makeTxnK:
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
int 8
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l16_ifF:
load 250
bz l18_ifF
load 253
load 251
-
store 249
load 251
dup
bz l19_makeTxnK
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
int 21
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l18_ifF:
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
int 34
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l15_afterHandler7:
// Handler 8
dup
int 8
==
bz l20_afterHandler8
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
// "./src/index.rsh:117:6:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:117:6:dot"
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
bz l21_ifF
load 250
load 251
-
store 248
load 251
dup
bz l22_makeTxnK
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
l22_makeTxnK:
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
int 9
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l21_ifF:
load 249
bz l23_ifF
load 250
load 251
-
store 248
load 251
dup
bz l24_makeTxnK
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
l24_makeTxnK:
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
int 13
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l23_ifF:
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
int 17
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l20_afterHandler8:
// Handler 9
dup
int 9
==
bz l25_afterHandler9
pop
// check step
int 9
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
// "./src/index.rsh:121:4:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:121:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l26_makeTxnK
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
l26_makeTxnK:
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
b loopBody10
l25_afterHandler9:
l27_afterHandler10:
// Handler 11
dup
int 11
==
bz l28_afterHandler11
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
// "./src/index.rsh:128:7:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:128:7:dot"
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
b loopBody10
l28_afterHandler11:
// Handler 12
dup
int 12
==
bz l29_afterHandler12
pop
// check step
int 13
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
// "./src/index.rsh:121:4:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:121:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l30_makeTxnK
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
l30_makeTxnK:
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
b loopBody13
l29_afterHandler12:
l31_afterHandler13:
// Handler 14
dup
int 14
==
bz l32_afterHandler14
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
// "./src/index.rsh:128:7:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:128:7:dot"
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
b loopBody13
l32_afterHandler14:
// Handler 15
dup
int 15
==
bz l33_afterHandler15
pop
// check step
int 17
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
// "./src/index.rsh:121:4:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:121:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l34_makeTxnK
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
l34_makeTxnK:
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
b loopBody16
l33_afterHandler15:
l35_afterHandler16:
// Handler 17
dup
int 17
==
bz l36_afterHandler17
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
// "./src/index.rsh:128:7:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:128:7:dot"
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
b loopBody16
l36_afterHandler17:
// Handler 18
dup
int 18
==
bz l37_afterHandler18
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
// "./src/index.rsh:117:6:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:117:6:dot"
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
bz l38_ifF
load 250
load 251
-
store 248
load 251
dup
bz l39_makeTxnK
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
l39_makeTxnK:
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
int 22
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l38_ifF:
load 249
bz l40_ifF
load 250
load 251
-
store 248
load 251
dup
bz l41_makeTxnK
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
l41_makeTxnK:
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
int 26
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l40_ifF:
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
int 30
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l37_afterHandler18:
// Handler 19
dup
int 19
==
bz l42_afterHandler19
pop
// check step
int 22
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
// "./src/index.rsh:121:4:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:121:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l43_makeTxnK
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
l43_makeTxnK:
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
b loopBody20
l42_afterHandler19:
l44_afterHandler20:
// Handler 21
dup
int 21
==
bz l45_afterHandler21
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
// "./src/index.rsh:128:7:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:128:7:dot"
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
b loopBody20
l45_afterHandler21:
// Handler 22
dup
int 22
==
bz l46_afterHandler22
pop
// check step
int 26
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
// "./src/index.rsh:121:4:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:121:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l47_makeTxnK
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
l47_makeTxnK:
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
b loopBody23
l46_afterHandler22:
l48_afterHandler23:
// Handler 24
dup
int 24
==
bz l49_afterHandler24
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
// "./src/index.rsh:128:7:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:128:7:dot"
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
b loopBody23
l49_afterHandler24:
// Handler 25
dup
int 25
==
bz l50_afterHandler25
pop
// check step
int 30
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
// "./src/index.rsh:121:4:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:121:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l51_makeTxnK
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
l51_makeTxnK:
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
b loopBody26
l50_afterHandler25:
l52_afterHandler26:
// Handler 27
dup
int 27
==
bz l53_afterHandler27
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
// "./src/index.rsh:128:7:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:128:7:dot"
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
b loopBody26
l53_afterHandler27:
// Handler 28
dup
int 28
==
bz l54_afterHandler28
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
// "./src/index.rsh:117:6:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:117:6:dot"
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
bz l55_ifF
load 253
load 251
-
store 249
load 251
dup
bz l56_makeTxnK
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
l56_makeTxnK:
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
int 35
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l55_ifF:
load 250
bz l57_ifF
load 253
load 251
-
store 249
load 251
dup
bz l58_makeTxnK
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
l58_makeTxnK:
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
int 39
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l57_ifF:
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
int 43
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l54_afterHandler28:
// Handler 29
dup
int 29
==
bz l59_afterHandler29
pop
// check step
int 35
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
// "./src/index.rsh:121:4:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:121:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l60_makeTxnK
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
l60_makeTxnK:
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
b loopBody30
l59_afterHandler29:
l61_afterHandler30:
// Handler 31
dup
int 31
==
bz l62_afterHandler31
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
// "./src/index.rsh:128:7:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:128:7:dot"
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
b loopBody30
l62_afterHandler31:
// Handler 32
dup
int 32
==
bz l63_afterHandler32
pop
// check step
int 39
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
// "./src/index.rsh:121:4:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:121:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l64_makeTxnK
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
l64_makeTxnK:
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
b loopBody33
l63_afterHandler32:
l65_afterHandler33:
// Handler 34
dup
int 34
==
bz l66_afterHandler34
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
// "./src/index.rsh:128:7:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:128:7:dot"
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
b loopBody33
l66_afterHandler34:
// Handler 35
dup
int 35
==
bz l67_afterHandler35
pop
// check step
int 43
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
// "./src/index.rsh:121:4:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:121:4:dot"
// "[]"
load 254
txn Sender
==
assert
load 253
dup
bz l68_makeTxnK
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
l68_makeTxnK:
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
b loopBody36
l67_afterHandler35:
l69_afterHandler36:
// Handler 37
dup
int 37
==
bz l70_afterHandler37
pop
// check step
int 46
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
// "./src/index.rsh:128:7:dot"
// "[]"
// Just "sender correct"
// "./src/index.rsh:128:7:dot"
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
b loopBody36
l70_afterHandler37:
int 0
assert
loopBody10:
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
int 12
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody13:
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
int 16
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody16:
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
int 20
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody20:
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
int 25
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody23:
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
int 29
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody26:
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
int 33
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody30:
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
int 38
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody33:
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
int 42
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody36:
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
int 46
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
                "name": "v381",
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
                "name": "v381",
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
                "name": "v390",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e19",
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
                "name": "v406",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e22",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e25",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e29",
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
                "internalType": "bool",
                "name": "v415",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e32",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e35",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e37",
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
        "internalType": "struct T15",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T17",
                "name": "v451",
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
                "internalType": "struct T18",
                "name": "v452",
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
                "internalType": "struct T19",
                "name": "v453",
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
                "internalType": "struct T17",
                "name": "v454",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v455",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v456",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v461",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v461",
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
                "name": "v390",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m19",
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
                "name": "v406",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m22",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m25",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m29",
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
                "internalType": "bool",
                "name": "v415",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m32",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m35",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m37",
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
        "internalType": "struct T15",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T17",
                "name": "v451",
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
                "internalType": "struct T18",
                "name": "v452",
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
                "internalType": "struct T19",
                "name": "v453",
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
                "internalType": "struct T17",
                "name": "v454",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v455",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v456",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162005dcf38038062005dcf83398101604081905262000026916200028d565b6000805543600355604080518251815260208084015151805182840152908101515163ffffffff1990811683850152908301515116606082015290517f8302b0f24a2ffe1d985578653bc53343adcf2fb4aec8ed088c306c86a40df3fc9181900360800190a16200009a34156007620000eb565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000e292919062000115565b5050506200037f565b81620001115760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001239062000342565b90600052602060002090601f01602090048101928262000147576000855562000192565b82601f106200016257805160ff191683800117855562000192565b8280016001018555821562000192579182015b828111156200019257825182559160200191906001019062000175565b50620001a0929150620001a4565b5090565b5b80821115620001a05760008155600101620001a5565b604051602081016001600160401b0381118282101715620001ec57634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b0381118282101715620001ec57634e487b7160e01b600052604160045260246000fd5b6000602082840312156200023657600080fd5b604051602081016001600160401b03811182821017156200026757634e487b7160e01b600052604160045260246000fd5b6040528251909150819063ffffffff19811681146200028557600080fd5b905292915050565b60008183036080811215620002a157600080fd5b604080519081016001600160401b0381118282101715620002d257634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ec57600080fd5b620002f6620001bb565b915062000302620001f2565b6020850151815262000318866040870162000223565b60208201526200032c866060870162000223565b6040820152825260208101919091529392505050565b600181811c908216806200035757607f821691505b602082108114156200037957634e487b7160e01b600052602260045260246000fd5b50919050565b615a40806200038f6000396000f3fe608060405260043610620001eb5760003560e01c80639f251810116200010b578063c7980037116200009b578063e533a29d1162000069578063e533a29d1462000481578063eead410d1462000498578063f292ff7214620004af578063f605335014620004c657005b8063c79800371462000425578063de736998146200043c578063e047ea351462000453578063e2186a08146200046a57005b8063ab53f2c611620000d9578063ab53f2c614620003b8578063b047592414620003e0578063b381e9d714620003f7578063bf2c5b24146200040e57005b80639f251810146200035c578063a035b2e01462000373578063a7661d54146200038a578063aa53dd0814620003a157005b8063592159c1116200018757806389fce655116200015557806389fce65514620003005780638b9fadc814620003175780638ebe74ee146200032e578063907f2d7a146200034557005b8063592159c114620002a4578063617e78ba14620002bb578063681598b314620002d25780638323075714620002e957005b80633711704a11620001c55780633711704a14620002485780633a31ddbd146200025f57806345f7039614620002765780634e9deb45146200028d57005b806311faee8c14620001f55780631b26a4bf146200020c5780631e93b0f1146200022357005b36620001f357005b005b620001f362000206366004620041bc565b620004dd565b620001f36200021d366004620041bc565b62000684565b3480156200023057600080fd5b506003545b6040519081526020015b60405180910390f35b620001f362000259366004620041db565b6200080a565b620001f362000270366004620041bc565b620009dd565b620001f362000287366004620041bc565b62000b7f565b620001f36200029e366004620041bc565b62000d47565b620001f3620002b5366004620041bc565b6200109d565b620001f3620002cc366004620041bc565b6200123f565b620001f3620002e3366004620041bc565b620013c5565b348015620002f657600080fd5b5060015462000235565b620001f362000311366004620041bc565b6200154b565b620001f362000328366004620041bc565b620016d1565b620001f36200033f366004620041bc565b62001857565b620001f362000356366004620041bc565b620019dd565b620001f36200036d366004620041bc565b62001d2a565b620001f362000384366004620041bc565b62001eb0565b620001f36200039b366004620041bc565b62002036565b620001f3620003b2366004620041bc565b62002213565b348015620003c557600080fd5b50620003d0620023b5565b6040516200023f9291906200424b565b620001f3620003f1366004620041bc565b6200245a565b620001f362000408366004620041bc565b620025fc565b620001f36200041f366004620041bc565b6200279e565b620001f362000436366004620041bc565b62002bb6565b620001f36200044d366004620041bc565b62002d5f565b620001f362000464366004620041bc565b62002f01565b620001f36200047b366004620041bc565b620030a3565b620001f362000492366004620041bc565b62003266565b620001f3620004a93660046200426e565b620035b3565b620001f3620004c0366004620041bc565b620038a1565b620001f3620004d7366004620041bc565b62003a43565b620004ef600d60005414603162003bc9565b6200050c813515806200050457506001548235145b603262003bc9565b600080805560028054620005209062004282565b80601f01602080910402602001604051908101604052809291908181526020018280546200054e9062004282565b80156200059f5780601f1062000573576101008083540402835291602001916200059f565b820191906000526020600020905b8154815290600101906020018083116200058157829003601f168201915b5050505050806020019051810190620005b99190620043a7565b90507f1c3c1eb1a49b49281bc33392d8e3bef6fbe90ccd8bc1d2451934aa1b13794fbf82604051620005ec9190620043f6565b60405180910390a1620006023415602f62003bc9565b60208101516200061f906001600160a01b03163314603062003bc9565b6200063881606001518260000151836080015162003bf0565b6200064262004076565b60208083015182516001600160a01b03918216905260408085015184518401526060850151845192169101528101514390526200067f8162003c07565b505050565b62000696601960005414604962003bc9565b620006b381351580620006ab57506001548235145b604a62003bc9565b600080805560028054620006c79062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620006f59062004282565b8015620007465780601f106200071a5761010080835404028352916020019162000746565b820191906000526020600020905b8154815290600101906020018083116200072857829003601f168201915b50505050508060200190518101906200076091906200440c565b90507fc994af732d7092e2f923c670a05dd06dcc39938b89e46c484127f784f4b213a182604051620007939190620043f6565b60405180910390a1620007a93415604762003bc9565b8051620007c3906001600160a01b03163314604862003bc9565b620007cd62004076565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528101514390526200067f8162003c87565b6200081c600160005414600962003bc9565b62000839813515806200083157506001548235145b600a62003bc9565b6000808055600280546200084d9062004282565b80601f01602080910402602001604051908101604052809291908181526020018280546200087b9062004282565b8015620008cc5780601f10620008a057610100808354040283529160200191620008cc565b820191906000526020600020905b815481529060010190602001808311620008ae57829003601f168201915b5050505050806020019051810190620008e691906200445a565b90507f9ea6e8c055e86924b5db5f9635a4bdc97514ead0c112e90b6cc9dedc308452d482604051620009199190620044b6565b60405180910390a16200092f3415600862003bc9565b620009416060830160408401620044d0565b15620009c157604080518082019091526000808252602082015281516001600160a01b0390811680835233602080850191825260026000554360015560408051918201939093529051909216908201526060015b60405160208183030381529060405260029080519060200190620009bb929190620040ad565b50505050565b60008080556001819055620009d9906002906200413c565b5050565b620009ef601160005414603962003bc9565b62000a0c8135158062000a0457506001548235145b603a62003bc9565b60008080556002805462000a209062004282565b80601f016020809104026020016040519081016040528092919081815260200182805462000a4e9062004282565b801562000a9f5780601f1062000a735761010080835404028352916020019162000a9f565b820191906000526020600020905b81548152906001019060200180831162000a8157829003601f168201915b505050505080602001905181019062000ab99190620043a7565b90507f96969340a6658e1e09f3b3af80819f55bac87c191bbf60c7b83615ec9e37fc068260405162000aec9190620043f6565b60405180910390a162000b023415603762003bc9565b602081015162000b1f906001600160a01b03163314603862003bc9565b62000b3881606001518260000151836080015162003bf0565b62000b4262004076565b60208083015182516001600160a01b03918216905260408085015184518401526060850151845192169101528101514390526200067f8162003ce1565b62000b91600260005414600d62003bc9565b62000bae8135158062000ba657506001548235145b600e62003bc9565b60008080556002805462000bc29062004282565b80601f016020809104026020016040519081016040528092919081815260200182805462000bf09062004282565b801562000c415780601f1062000c155761010080835404028352916020019162000c41565b820191906000526020600020905b81548152906001019060200180831162000c2357829003601f168201915b505050505080602001905181019062000c5b9190620044f0565b6040805184358152602080860135908201529192507fa8de7fa57e96b1b344028051973cc20a5275cd64ccacf1c4ebc1e38bc2945cb6910160405180910390a162000ca93415600b62003bc9565b805162000cc3906001600160a01b03163314600c62003bc9565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528a8501358352600390955543600155875180850195909552915190911683870152518284015284518083039093018352608090910190935280519192620009bb9260029290910190620040ad565b62000d59602260005414605d62003bc9565b62000d768135158062000d6e57506001548235145b605e62003bc9565b60008080556002805462000d8a9062004282565b80601f016020809104026020016040519081016040528092919081815260200182805462000db89062004282565b801562000e095780601f1062000ddd5761010080835404028352916020019162000e09565b820191906000526020600020905b81548152906001019060200180831162000deb57829003601f168201915b505050505080602001905181019062000e2391906200455f565b905062000e43604051806040016040528060008152602001600081525090565b7fbed89dd74cae374ab40e56da43251935a72e507a975ba8088fa10a6f3a45a6448360405162000e749190620043f6565b60405180910390a162000e8a3415605b62003bc9565b815162000ea4906001600160a01b03163314605c62003bc9565b8160a001511562000f81578160800151826040015162000ec5919062004620565b815260608201518251608084015162000ee092919062003bf0565b6040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528a516001600160a01b0390811689528b87015181169095528a89015190935290890151909216909152855190526023909155436001559151909162000f54918391016200463a565b6040516020818303038152906040526002908051906020019062000f7a929190620040ad565b5050505050565b8160a001511562001036578160800151826040015162000fa2919062004620565b602082015260608201518251608084015162000fc092919062003bf0565b6040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528a516001600160a01b0390811689528b87015181169095528a890151909352908901519092169091528582015190526027909155436001559151909162000f54918391016200463a565b6040805160808101825260008082526020808301828152838501838152606080860185815289516001600160a01b0390811688528a8601518116909452898801519092528801519091169052602b909155436001559151909162000f549183910162004680565b620010af602760005414606962003bc9565b620010cc81351580620010c457506001548235145b606a62003bc9565b600080805560028054620010e09062004282565b80601f01602080910402602001604051908101604052809291908181526020018280546200110e9062004282565b80156200115f5780601f1062001133576101008083540402835291602001916200115f565b820191906000526020600020905b8154815290600101906020018083116200114157829003601f168201915b5050505050806020019051810190620011799190620043a7565b90507f4aca3671d04a3603e52ebd840b3cb522637d3dd0d7fca046da0cd797abca073c82604051620011ac9190620043f6565b60405180910390a1620011c23415606762003bc9565b6020810151620011df906001600160a01b03163314606862003bc9565b620011f881606001518260000151836080015162003bf0565b6200120262004076565b60208083015182516001600160a01b03918216905260408085015184518401526060850151845192169101528101514390526200067f8162003d3b565b62001251602a60005414606d62003bc9565b6200126e813515806200126657506001548235145b606e62003bc9565b600080805560028054620012829062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620012b09062004282565b8015620013015780601f10620012d55761010080835404028352916020019162001301565b820191906000526020600020905b815481529060010190602001808311620012e357829003601f168201915b50505050508060200190518101906200131b91906200440c565b90507f4f0186e9075baafc83f7eee3c4df6a72d4de867fa2569e7e3631da47c7729034826040516200134e9190620043f6565b60405180910390a1620013643415606b62003bc9565b80516200137e906001600160a01b03163314606c62003bc9565b6200138862004076565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528101514390526200067f8162003d3b565b620013d7602660005414606562003bc9565b620013f481351580620013ec57506001548235145b606662003bc9565b600080805560028054620014089062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620014369062004282565b8015620014875780601f106200145b5761010080835404028352916020019162001487565b820191906000526020600020905b8154815290600101906020018083116200146957829003601f168201915b5050505050806020019051810190620014a191906200440c565b90507fd0734acd0adcce68cacb1df6655f24aef982e646fa3b47a57745808e833fc81582604051620014d49190620043f6565b60405180910390a1620014ea3415606362003bc9565b805162001504906001600160a01b03163314606462003bc9565b6200150e62004076565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528101514390526200067f8162003d95565b6200155d602e60005414607562003bc9565b6200157a813515806200157257506001548235145b607662003bc9565b6000808055600280546200158e9062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620015bc9062004282565b80156200160d5780601f10620015e1576101008083540402835291602001916200160d565b820191906000526020600020905b815481529060010190602001808311620015ef57829003601f168201915b50505050508060200190518101906200162791906200440c565b90507f23382c7a003b21673959d3a576f6dbce95618af0d6ff77d59af5eea6d2e396b7826040516200165a9190620043f6565b60405180910390a1620016703415607362003bc9565b80516200168a906001600160a01b03163314607462003bc9565b6200169462004076565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528101514390526200067f8162003def565b620016e3600c60005414602d62003bc9565b6200170081351580620016f857506001548235145b602e62003bc9565b600080805560028054620017149062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620017429062004282565b8015620017935780601f10620017675761010080835404028352916020019162001793565b820191906000526020600020905b8154815290600101906020018083116200177557829003601f168201915b5050505050806020019051810190620017ad91906200440c565b90507f5fe72957f5855f25860ec325face1305075da64ba42ea3b56918fbe46e26b40482604051620017e09190620043f6565b60405180910390a1620017f63415602b62003bc9565b805162001810906001600160a01b03163314602c62003bc9565b6200181a62004076565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528101514390526200067f8162003e49565b62001869602160005414605962003bc9565b62001886813515806200187e57506001548235145b605a62003bc9565b6000808055600280546200189a9062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620018c89062004282565b8015620019195780601f10620018ed5761010080835404028352916020019162001919565b820191906000526020600020905b815481529060010190602001808311620018fb57829003601f168201915b50505050508060200190518101906200193391906200440c565b90507f35e4198bc89d52fd314a8c5d55a40a219ff4262da074ac272b1fb352f981787f82604051620019669190620043f6565b60405180910390a16200197c3415605762003bc9565b805162001996906001600160a01b03163314605862003bc9565b620019a062004076565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528101514390526200067f8162003ea3565b620019ef601560005414604162003bc9565b62001a0c8135158062001a0457506001548235145b604262003bc9565b60008080556002805462001a209062004282565b80601f016020809104026020016040519081016040528092919081815260200182805462001a4e9062004282565b801562001a9f5780601f1062001a735761010080835404028352916020019162001a9f565b820191906000526020600020905b81548152906001019060200180831162001a8157829003601f168201915b505050505080602001905181019062001ab991906200475c565b905062001ae2604051806060016040528060001515815260200160008152602001600081525090565b7fc1e55c0eda497be6c786e1629355e9ba4b0e7536499c9916eca91e0c925617338360405162001b139190620043f6565b60405180910390a162001b293415603f62003bc9565b815162001b43906001600160a01b03163314604062003bc9565b608082015160a0830151108015825262001c015781608001518260a0015162001b6d919062004620565b602082015260608201518251608084015162001b8b92919062003bf0565b6040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528a516001600160a01b0390811689528b87015181169095528a890151909352908901519092169091528582015190526016909155436001559151909162000f54918391016200463a565b80511562001cb35781608001518260a0015162001c1f919062004620565b604082015260608201518251608084015162001c3d92919062003bf0565b6040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528a516001600160a01b0390811689528b87015181169095528a89015190935290890151909216909152858501519052601a909155436001559151909162000f54918391016200463a565b6040805160a08082018352600080835260208084018281528486018381526060808701858152608088018681528b516001600160a01b039081168a528c87015181169095528b8a0151909352908a015190921690915292870151909252601e9055436001559151909162000f54918391016200463a565b62001d3c601460005414603d62003bc9565b62001d598135158062001d5157506001548235145b603e62003bc9565b60008080556002805462001d6d9062004282565b80601f016020809104026020016040519081016040528092919081815260200182805462001d9b9062004282565b801562001dec5780601f1062001dc05761010080835404028352916020019162001dec565b820191906000526020600020905b81548152906001019060200180831162001dce57829003601f168201915b505050505080602001905181019062001e0691906200440c565b90507fa2bfcfc2bf018598bf89847a2aa2dc48cb8eec269fecfd468afbe606d78101bd8260405162001e399190620043f6565b60405180910390a162001e4f3415603b62003bc9565b805162001e69906001600160a01b03163314603c62003bc9565b62001e7362004076565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528101514390526200067f8162003ce1565b62001ec2601060005414603562003bc9565b62001edf8135158062001ed757506001548235145b603662003bc9565b60008080556002805462001ef39062004282565b80601f016020809104026020016040519081016040528092919081815260200182805462001f219062004282565b801562001f725780601f1062001f465761010080835404028352916020019162001f72565b820191906000526020600020905b81548152906001019060200180831162001f5457829003601f168201915b505050505080602001905181019062001f8c91906200440c565b90507fe0a2e1387b485a156cf7c3e3303f6334b1f0a305dca44d49ca15f2f74d8b4bda8260405162001fbf9190620043f6565b60405180910390a162001fd53415603362003bc9565b805162001fef906001600160a01b03163314603462003bc9565b62001ff962004076565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528101514390526200067f8162003c07565b62002048600460005414601562003bc9565b62002065813515806200205d57506001548235145b601662003bc9565b600080805560028054620020799062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620020a79062004282565b8015620020f85780601f10620020cc57610100808354040283529160200191620020f8565b820191906000526020600020905b815481529060010190602001808311620020da57829003601f168201915b50505050508060200190518101906200211291906200477b565b90507fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d182604051620021459190620043f6565b60405180910390a16200216081604001513414601362003bc9565b60208101516200217d906001600160a01b03163314601462003bc9565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015620021bb573d6000803e3d6000fd5b50604080518082019091526000808252602082015281516001600160a01b0390811680835260208085015183168185019081526005600055436001556040805192830193909352519092169082015260600162000995565b62002225602b60005414607162003bc9565b62002242813515806200223a57506001548235145b607262003bc9565b600080805560028054620022569062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620022849062004282565b8015620022d55780601f10620022a957610100808354040283529160200191620022d5565b820191906000526020600020905b815481529060010190602001808311620022b757829003601f168201915b5050505050806020019051810190620022ef9190620047cc565b90507ff8d597075dac5982c014e7234cbb2fafb981604cac959a7edd20b58d677570fb82604051620023229190620043f6565b60405180910390a1620023383415606f62003bc9565b602081015162002355906001600160a01b03163314607062003bc9565b6200236e81606001518260000151836040015162003bf0565b6200237862004076565b60208083015182516001600160a01b03918216905260408085015184518401526060850151845192169101528101514390526200067f8162003def565b600060606000546002808054620023cc9062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620023fa9062004282565b80156200244b5780601f106200241f576101008083540402835291602001916200244b565b820191906000526020600020905b8154815290600101906020018083116200242d57829003601f168201915b50505050509050915091509091565b6200246c601660005414604562003bc9565b62002489813515806200248157506001548235145b604662003bc9565b6000808055600280546200249d9062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620024cb9062004282565b80156200251c5780601f10620024f0576101008083540402835291602001916200251c565b820191906000526020600020905b815481529060010190602001808311620024fe57829003601f168201915b5050505050806020019051810190620025369190620043a7565b90507f5ae608c4c48ee2433de06c2fc29d1e343c30e0f511de477e5bbe4d438a70432b82604051620025699190620043f6565b60405180910390a16200257f3415604362003bc9565b60208101516200259c906001600160a01b03163314604462003bc9565b620025b581606001518260000151836080015162003bf0565b620025bf62004076565b60208083015182516001600160a01b03918216905260408085015184518401526060850151845192169101528101514390526200067f8162003c87565b6200260e602360005414606162003bc9565b6200262b813515806200262357506001548235145b606262003bc9565b6000808055600280546200263f9062004282565b80601f01602080910402602001604051908101604052809291908181526020018280546200266d9062004282565b8015620026be5780601f106200269257610100808354040283529160200191620026be565b820191906000526020600020905b815481529060010190602001808311620026a057829003601f168201915b5050505050806020019051810190620026d89190620043a7565b90507f600108ede373206cf56af9f3b3c5980120274f2d3d928652d83c603aca7a4698826040516200270b9190620043f6565b60405180910390a1620027213415605f62003bc9565b60208101516200273e906001600160a01b03163314606062003bc9565b6200275781606001518260000151836080015162003bf0565b6200276162004076565b60208083015182516001600160a01b03918216905260408085015184518401526060850151845192169101528101514390526200067f8162003d95565b620027b0600760005414602162003bc9565b620027cd81351580620027c557506001548235145b602262003bc9565b600080805560028054620027e19062004282565b80601f01602080910402602001604051908101604052809291908181526020018280546200280f9062004282565b8015620028605780601f10620028345761010080835404028352916020019162002860565b820191906000526020600020905b8154815290600101906020018083116200284257829003601f168201915b50505050508060200190518101906200287a9190620047cc565b9050620028aa60405180608001604052806000815260200160001515815260200160008152602001600081525090565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e083604051620028db9190620043f6565b60405180910390a1620028f13415601f62003bc9565b62002916336001600160a01b031683602001516001600160a01b031614602062003bc9565b6064826040015160286200292b919062004858565b6200293791906200487a565b808252604083015110156020808301919091528251908301516001600160a01b039081169116146200296b57600062002971565b80602001515b1562002a2a57805160408301516200298a919062004620565b6040820152606082015160208301518251620029a892919062003bf0565b6040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088018781528b516001600160a01b039081168a528c88015181169096528b8a0151909452918a015190931690925286519091528585015190526008909155436001559151909162000f54918391016200489d565b80602001511562002aeb578051604083015162002a48919062004620565b81606001818152505062002a6a82606001518360200151836000015162003bf0565b6040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088018781528b516001600160a01b039081168a528c88015181169096528b8a01519094528a830151909416905287519092529086015190526015909155436001559151909162000f54918391016200489d565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811680835260208086015183168185019081526040808801518187019081526060808a0151871681890190815289516080808b019182528b880151151560a0808d019182526022600055436001558751998a019a909a5296518a169588019590955292519186019190915251909516908301529251918101919091529051151560c082015260e00162000f54565b62002bc8600660005414601d62003bc9565b62002be58135158062002bdd57506001548235145b601e62003bc9565b60008080556002805462002bf99062004282565b80601f016020809104026020016040519081016040528092919081815260200182805462002c279062004282565b801562002c785780601f1062002c4c5761010080835404028352916020019162002c78565b820191906000526020600020905b81548152906001019060200180831162002c5a57829003601f168201915b505050505080602001905181019062002c929190620047cc565b90507f4df267dd1a05b613b05cdeee7d7e028d3842cff6f4e5a9d9dde2cdaf415627598260405162002cc59190620043f6565b60405180910390a162002cdb3415601b62003bc9565b602081015162002cf8906001600160a01b03163314601c62003bc9565b6040805160808101825260008082526020808301828152838501838152606080860185815288516001600160a01b03908116885289860151811690945288880151909252870151909116905260079091554360015591519091620009959183910162004680565b62002d71600960005414602962003bc9565b62002d8e8135158062002d8657506001548235145b602a62003bc9565b60008080556002805462002da29062004282565b80601f016020809104026020016040519081016040528092919081815260200182805462002dd09062004282565b801562002e215780601f1062002df55761010080835404028352916020019162002e21565b820191906000526020600020905b81548152906001019060200180831162002e0357829003601f168201915b505050505080602001905181019062002e3b9190620043a7565b90507fb764c356a899e639c4043e82fb6274894baac6d84c74f3b3ae78d8f4b22b00038260405162002e6e9190620043f6565b60405180910390a162002e843415602762003bc9565b602081015162002ea1906001600160a01b03163314602862003bc9565b62002eba81606001518260000151836080015162003bf0565b62002ec462004076565b60208083015182516001600160a01b03918216905260408085015184518401526060850151845192169101528101514390526200067f8162003e49565b62002f13601a60005414604d62003bc9565b62002f308135158062002f2857506001548235145b604e62003bc9565b60008080556002805462002f449062004282565b80601f016020809104026020016040519081016040528092919081815260200182805462002f729062004282565b801562002fc35780601f1062002f975761010080835404028352916020019162002fc3565b820191906000526020600020905b81548152906001019060200180831162002fa557829003601f168201915b505050505080602001905181019062002fdd9190620043a7565b90507fa336e788113f26595a35f5c7a7632b1db8cf62d75c8c065401c9fdbeb6ae56ae82604051620030109190620043f6565b60405180910390a1620030263415604b62003bc9565b602081015162003043906001600160a01b03163314604c62003bc9565b6200305c81606001518260000151836080015162003bf0565b6200306662004076565b60208083015182516001600160a01b03918216905260408085015184518401526060850151845192169101528101514390526200067f8162003efd565b620030b5600360005414601162003bc9565b620030d281351580620030ca57506001548235145b601262003bc9565b600080805560028054620030e69062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620031149062004282565b8015620031655780601f10620031395761010080835404028352916020019162003165565b820191906000526020600020905b8154815290600101906020018083116200314757829003601f168201915b50505050508060200190518101906200317f91906200477b565b90507f46fa595f7924075e82e3f58fa001775f50eda2857c56728dafc78ec80de66f4982604051620031b29190620048ed565b60405180910390a1620031c83415600f62003bc9565b6020810151620031e5906001600160a01b03163314601062003bc9565b620031f76040830160208401620044d0565b15620009c15760408051606080820183526000808352602080840182815284860183815287516001600160a01b03908116808852898501518216845289890151835260049095554360015587519384019490945290519092169481019490945251908301529060800162000995565b62003278600860005414602562003bc9565b62003295813515806200328d57506001548235145b602662003bc9565b600080805560028054620032a99062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620032d79062004282565b8015620033285780601f10620032fc5761010080835404028352916020019162003328565b820191906000526020600020905b8154815290600101906020018083116200330a57829003601f168201915b50505050508060200190518101906200334291906200475c565b90506200336b604051806060016040528060001515815260200160008152602001600081525090565b7fb9845e39b4c5715a32bc04872bfe1723e638b66042817fdde0a44e5b0466b6dc836040516200339c9190620043f6565b60405180910390a1620033b23415602362003bc9565b8151620033cc906001600160a01b03163314602462003bc9565b608082015160a083015110801582526200348a5781608001518260a00151620033f6919062004620565b60208201526060820151825160808401516200341492919062003bf0565b6040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528a516001600160a01b0390811689528b87015181169095528a890151909352908901519092169091528582015190526009909155436001559151909162000f54918391016200463a565b8051156200353c5781608001518260a00151620034a8919062004620565b6040820152606082015182516080840151620034c692919062003bf0565b6040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528a516001600160a01b0390811689528b87015181169095528a89015190935290890151909216909152858501519052600d909155436001559151909162000f54918391016200463a565b6040805160a08082018352600080835260208084018281528486018381526060808701858152608088018681528b516001600160a01b039081168a528c87015181169095528b8a0151909352908a01519092169091529287015190925260119055436001559151909162000f54918391016200463a565b620035c5600560005414601962003bc9565b620035e281351580620035da57506001548235145b601a62003bc9565b600080805560028054620035f69062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620036249062004282565b8015620036755780601f10620036495761010080835404028352916020019162003675565b820191906000526020600020905b8154815290600101906020018083116200365757829003601f168201915b50505050508060200190518101906200368f9190620044f0565b60408051808201909152600080825260208201529091507f4b0e092f37b086713c7354c6dc6283d2c7506c251b5d62ee7fea9ade0c19ff9183604051620036d791906200492d565b60405180910390a1620036ed3415601762003bc9565b815162003707906001600160a01b03163314601862003bc9565b60408051602085810135908201520160408051601f19818403018152918152620037389060608601908601620049a1565b6040516001600160c01b0319909116602082015260280160408051808303601f1901815282825260608781013560208501526080808901359385019390935260a088013590840152910160408051808303601f1901815282825260c0880135602084015291016040516020818303038152906040528660200160c001356012604051620037c5906200417e565b620037d696959493929190620049bf565b604051809103906000f080158015620037f3573d6000803e3d6000fd5b506001600160a01b031680825260208083018290526040519182527f81739cf2e804182b0fe8b1a0b96f7c70de2de859b6f761598b34d76d5f1b4451910160405180910390a160408051608081018252600080825260208083018281528385018381526060850184815288516001600160a01b03908116875289850151811690935260e08a01359091528683015190911690526006909155436001559151909162000f549183910162004680565b620038b3601e60005414605562003bc9565b620038d081351580620038c857506001548235145b605662003bc9565b600080805560028054620038e49062004282565b80601f0160208091040260200160405190810160405280929190818152602001828054620039129062004282565b8015620039635780601f10620039375761010080835404028352916020019162003963565b820191906000526020600020905b8154815290600101906020018083116200394557829003601f168201915b50505050508060200190518101906200397d9190620043a7565b90507fe8e2cf8f36752826afecc9ca82471dd56e00e77a642c034dfb3234f3dfdaf9c682604051620039b09190620043f6565b60405180910390a1620039c63415605362003bc9565b6020810151620039e3906001600160a01b03163314605462003bc9565b620039fc81606001518260000151836080015162003bf0565b62003a0662004076565b60208083015182516001600160a01b03918216905260408085015184518401526060850151845192169101528101514390526200067f8162003ea3565b62003a55601d60005414605162003bc9565b62003a728135158062003a6a57506001548235145b605262003bc9565b60008080556002805462003a869062004282565b80601f016020809104026020016040519081016040528092919081815260200182805462003ab49062004282565b801562003b055780601f1062003ad95761010080835404028352916020019162003b05565b820191906000526020600020905b81548152906001019060200180831162003ae757829003601f168201915b505050505080602001905181019062003b1f91906200440c565b90507f322ee4284cfff566341927d6f2f7e2d1a5c0f8fa56564384979fc8a9b75ff9418260405162003b529190620043f6565b60405180910390a162003b683415604f62003bc9565b805162003b82906001600160a01b03163314605062003bc9565b62003b8c62004076565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528101514390526200067f8162003efd565b81620009d95760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b62003bfd83838362003f57565b6200067f57600080fd5b60408051606081018252600080825260208083018281528385018381528651516001600160a01b0390811686528751840151909252865186015190911690526010909155436001559151909162003c619183910162004a2a565b604051602081830303815290604052600290805190602001906200067f929190620040ad565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b0390811686528751840151909252865186015190911690526019909155436001559151909162003c619183910162004a2a565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b0390811686528751840151909252865186015190911690526014909155436001559151909162003c619183910162004a2a565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b039081168652875184015190925286518601519091169052602a909155436001559151909162003c619183910162004a2a565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b0390811686528751840151909252865186015190911690526026909155436001559151909162003c619183910162004a2a565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b039081168652875184015190925286518601519091169052602e909155436001559151909162003c619183910162004a2a565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b039081168652875184015190925286518601519091169052600c909155436001559151909162003c619183910162004a2a565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b0390811686528751840151909252865186015190911690526021909155436001559151909162003c619183910162004a2a565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b039081168652875184015190925286518601519091169052601d909155436001559151909162003c619183910162004a2a565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839162003fb89162004a57565b60006040518083038185875af1925050503d806000811462003ff7576040519150601f19603f3d011682016040523d82523d6000602084013e62003ffc565b606091505b50915091506200400f8282600262004030565b508080602001905181019062004026919062004a75565b9695505050505050565b60608315620040415750816200406f565b825115620040525782518084602001fd5b60405163100960cb60e01b81526004810183905260240162003be7565b9392505050565b6040805160a08101825260008183018181526060830182905260808301829052825282516020818101909452908152909182015290565b828054620040bb9062004282565b90600052602060002090601f016020900481019282620040df57600085556200412a565b82601f10620040fa57805160ff19168380011785556200412a565b828001600101855582156200412a579182015b828111156200412a5782518255916020019190600101906200410d565b50620041389291506200418c565b5090565b5080546200414a9062004282565b6000825580601f106200415b575050565b601f0160209004906000526020600020908101906200417b91906200418c565b50565b610f758062004a9683390190565b5b808211156200413857600081556001016200418d565b600060408284031215620041b657600080fd5b50919050565b600060408284031215620041cf57600080fd5b6200406f8383620041a3565b600060608284031215620041b657600080fd5b60005b838110156200420b578181015183820152602001620041f1565b83811115620009bb5750506000910152565b6000815180845262004237816020860160208601620041ee565b601f01601f19169290920160200192915050565b8281526040602082015260006200426660408301846200421d565b949350505050565b60006101208284031215620041b657600080fd5b600181811c908216806200429757607f821691505b60208210811415620041b657634e487b7160e01b600052602260045260246000fd5b6040516060810167ffffffffffffffff81118282101715620042eb57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200430957600080fd5b919050565b600060a082840312156200432157600080fd5b60405160a0810181811067ffffffffffffffff821117156200435357634e487b7160e01b600052604160045260246000fd5b6040529050806200436483620042f1565b81526200437460208401620042f1565b6020820152604083015160408201526200439160608401620042f1565b6060820152608083015160808201525092915050565b600060a08284031215620043ba57600080fd5b6200406f83836200430e565b80151581146200417b57600080fd5b803582526020810135620043e981620043c6565b8015156020840152505050565b60408101620044068284620043d5565b92915050565b6000606082840312156200441f57600080fd5b62004429620042b9565b6200443483620042f1565b8152602083015160208201526200444e60408401620042f1565b60408201529392505050565b6000602082840312156200446d57600080fd5b6040516020810181811067ffffffffffffffff821117156200449f57634e487b7160e01b600052604160045260246000fd5b604052620044ad83620042f1565b81529392505050565b8135815260608101620044066020808401908501620043d5565b600060208284031215620044e357600080fd5b81356200406f81620043c6565b6000604082840312156200450357600080fd5b6040516040810181811067ffffffffffffffff821117156200453557634e487b7160e01b600052604160045260246000fd5b6040526200454383620042f1565b81526200455360208401620042f1565b60208201529392505050565b600060c082840312156200457257600080fd5b60405160c0810181811067ffffffffffffffff82111715620045a457634e487b7160e01b600052604160045260246000fd5b604052620045b283620042f1565b8152620045c260208401620042f1565b602082015260408301516040820152620045df60608401620042f1565b60608201526080830151608082015260a0830151620045fe81620043c6565b60a08201529392505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156200463557620046356200460a565b500390565b81516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151909116908201526080808301519082015260a0810162004406565b81516001600160a01b03908116825260208084015182169083015260408084015190830152606092830151169181019190915260800190565b600060c08284031215620046cc57600080fd5b60405160c0810181811067ffffffffffffffff82111715620046fe57634e487b7160e01b600052604160045260246000fd5b6040529050806200470f83620042f1565b81526200471f60208401620042f1565b6020820152604083015160408201526200473c60608401620042f1565b60608201526080830151608082015260a083015160a08201525092915050565b600060c082840312156200476f57600080fd5b6200406f8383620046b9565b6000606082840312156200478e57600080fd5b62004798620042b9565b620047a383620042f1565b8152620047b360208401620042f1565b6020820152604083015160408201528091505092915050565b600060808284031215620047df57600080fd5b6040516080810181811067ffffffffffffffff821117156200481157634e487b7160e01b600052604160045260246000fd5b6040526200481f83620042f1565b81526200482f60208401620042f1565b6020820152604083015160408201526200484c60608401620042f1565b60608201529392505050565b60008160001904831182151516156200487557620048756200460a565b500290565b6000826200489857634e487b7160e01b600052601260045260246000fd5b500490565b81516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c0810162004406565b813581526040810160208301356200490581620043c6565b80151560208401525092915050565b80356001600160c01b0319811681146200430957600080fd5b813581526020808301359082015261012081016001600160c01b0319620049576040850162004914565b166040830152606083013560608301526080830135608083015260a083013560a083015260c083013560c083015260e083013560e083015261010080840135818401525092915050565b600060208284031215620049b457600080fd5b6200406f8262004914565b60c081526000620049d460c08301896200421d565b8281036020840152620049e881896200421d565b90508281036040840152620049fe81886200421d565b9050828103606084015262004a1481876200421d565b6080840195909552505060a00152949350505050565b81516001600160a01b03908116825260208084015190830152604092830151169181019190915260600190565b6000825162004a6b818460208701620041ee565b9190910192915050565b60006020828403121562004a8857600080fd5b81516200406f81620043c656fe60806040523480156200001157600080fd5b5060405162000f7538038062000f75833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610af580620004806000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806383197ef01161006657806383197ef01461019b57806395d89b41146101a5578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b806342966c68146101575780635600f04f1461016a57806370a082311461017257600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063392f37e91461014f575b600080fd5b6100dc6101f9565b6040516100e991906108fa565b60405180910390f35b61010561010036600461096b565b61028b565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610995565b6102a1565b60085460405160ff90911681526020016100e9565b6100dc610357565b6101056101653660046109d1565b610366565b6100dc6103dc565b6101196101803660046109ea565b6001600160a01b031660009081526020819052604090205490565b6101a36103eb565b005b6100dc610492565b6101056101bb36600461096b565b6104a1565b6101196101ce366004610a0c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020890610a3f565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a3f565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b60006102983384846104ae565b50600192915050565b60006102ae8484846105d3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103385760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034c85336103478685610a90565b6104ae565b506001949350505050565b60606007805461020890610a3f565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b6005546103d4906001600160a01b0316836107ab565b506001919050565b60606006805461020890610a3f565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b604482015260640161032f565b6005546001600160a01b0316ff5b60606004805461020890610a3f565b60006102983384846105d3565b6001600160a01b0383166105105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032f565b6001600160a01b0382166105715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032f565b6001600160a01b0382166106995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032f565b6001600160a01b038316600090815260208190526040902054818110156107115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032f565b61071b8282610a90565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610751908490610aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079d91815260200190565b60405180910390a350505050565b6001600160a01b03821661080b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032f565b6001600160a01b0382166000908152602081905260409020548181101561087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032f565b6108898282610a90565b6001600160a01b038416600090815260208190526040812091909155600280548492906108b7908490610a90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105c6565b600060208083528351808285015260005b818110156109275785810183015185820160400152820161090b565b81811115610939576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461096657600080fd5b919050565b6000806040838503121561097e57600080fd5b6109878361094f565b946020939093013593505050565b6000806000606084860312156109aa57600080fd5b6109b38461094f565b92506109c16020850161094f565b9150604084013590509250925092565b6000602082840312156109e357600080fd5b5035919050565b6000602082840312156109fc57600080fd5b610a058261094f565b9392505050565b60008060408385031215610a1f57600080fd5b610a288361094f565b9150610a366020840161094f565b90509250929050565b600181811c90821680610a5357607f821691505b60208210811415610a7457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610aa257610aa2610a7a565b500390565b60008219821115610aba57610aba610a7a565b50019056fea2646970667358221220374d87e106c2c2bce4369ae12b8bb6de60f50ff6fe95c412cf7460b78ddcb48f64736f6c63430008090033a2646970667358221220ff1c2c5f5326e840e872c4f4e3343a9b439013a0472e47d3c2cb4b4368357f8e64736f6c63430008090033`,
  BytecodeLen: 24015,
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
