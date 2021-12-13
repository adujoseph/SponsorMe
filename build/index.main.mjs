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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc0],
      3: [ctc0, ctc0, ctc1],
      4: [ctc0, ctc0],
      5: [ctc0, ctc0, ctc1, ctc1, ctc2],
      6: [ctc0, ctc0, ctc1, ctc1, ctc2],
      7: [ctc0, ctc0, ctc1, ctc2, ctc1],
      8: [ctc0, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc2, ctc1],
      11: [ctc0, ctc0, ctc1, ctc2, ctc1],
      12: [ctc0, ctc1, ctc2, ctc1],
      14: [ctc0, ctc0, ctc1, ctc2, ctc1],
      15: [ctc0, ctc0, ctc1, ctc2, ctc1],
      16: [ctc0, ctc1, ctc2, ctc1],
      18: [ctc0, ctc0, ctc1, ctc2, ctc1],
      19: [ctc0, ctc1, ctc2, ctc1]
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
  
  
  const v233 = stdlib.protect(ctc2, interact.projectInfo, 'for ProjectOwner\'s interact field projectInfo');
  
  const txn1 = await (ctc.sendrecv({
    args: [v233],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:42:6:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v237], secs: v239, time: v238, didSend: v24, from: v236 } = txn1;
      
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
  const {data: [v237], secs: v239, time: v238, didSend: v24, from: v236 } = txn1;
  ;
  stdlib.protect(ctc3, await interact.reportReady(), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:44:26:application call to "liftedInteract" (defined at: ./index.rsh:44:26:application)'],
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
  const {data: [v246], secs: v248, time: v247, didSend: v38, from: v245 } = txn2;
  ;
  const v250 = v246.contribute;
  if (v250) {
    const v260 = v237.fundraisingGoal;
    
    const txn3 = await (ctc.sendrecv({
      args: [v236, v245, v260],
      evt_cnt: 1,
      funcNum: 2,
      lct: v247,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v262], secs: v264, time: v263, didSend: v65, from: v261 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v266 = stdlib.addressEq(v236, v261);
        stdlib.assert(v266, {
          at: './index.rsh:63:6:dot',
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
    const {data: [v262], secs: v264, time: v263, didSend: v65, from: v261 } = txn3;
    ;
    const v266 = stdlib.addressEq(v236, v261);
    stdlib.assert(v266, {
      at: './index.rsh:63:6:dot',
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
    const {data: [], secs: v269, time: v268, didSend: v72, from: v267 } = txn4;
    ;
    const v272 = stdlib.addressEq(v245, v267);
    stdlib.assert(v272, {
      at: './index.rsh:69:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'ProjectOwner'
      });
    stdlib.protect(ctc3, await interact.reportPayment(v262), {
      at: './index.rsh:71:45:application',
      fs: ['at ./index.rsh:71:7:application call to [unknown function] (defined at: ./index.rsh:71:20:function exp)'],
      msg: 'reportPayment',
      who: 'ProjectOwner'
      });
    
    ;
    stdlib.protect(ctc3, await interact.reportTransfer(v262), {
      at: './index.rsh:73:46:application',
      fs: ['at ./index.rsh:73:7:application call to [unknown function] (defined at: ./index.rsh:73:20:function exp)'],
      msg: 'reportTransfer',
      who: 'ProjectOwner'
      });
    
    const v283 = stdlib.protect(ctc9, await interact.getParams(), {
      at: './index.rsh:76:100:application',
      fs: ['at ./index.rsh:76:10:application call to [unknown function] (defined at: ./index.rsh:76:14:function exp)'],
      msg: 'getParams',
      who: 'ProjectOwner'
      });
    const v284 = v283.name;
    const v285 = v283.symbol;
    const v286 = v283.url;
    const v287 = v283.metadata;
    const v288 = v283.supply;
    const v289 = v283.amt;
    const v290 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:77:10:decimal', stdlib.UInt_max, 4), v289);
    const v291 = stdlib.le(v290, v288);
    stdlib.assert(v291, {
      at: './index.rsh:77:9:application',
      fs: ['at ./index.rsh:76:10:application call to [unknown function] (defined at: ./index.rsh:76:14:function exp)'],
      msg: null,
      who: 'ProjectOwner'
      });
    const v293 = stdlib.le(v290, stdlib.UInt_max);
    stdlib.assert(v293, {
      at: './index.rsh:78:9:application',
      fs: ['at ./index.rsh:76:10:application call to [unknown function] (defined at: ./index.rsh:76:14:function exp)'],
      msg: null,
      who: 'ProjectOwner'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v236, v245, v284, v285, v286, v287, v288, v289],
      evt_cnt: 6,
      funcNum: 4,
      lct: v268,
      onlyIf: true,
      out_tys: [ctc6, ctc7, ctc8, ctc6, ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v295, v296, v297, v298, v299, v300], secs: v302, time: v301, didSend: v114, from: v294 } = txn5;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v304 = stdlib.addressEq(v236, v294);
        stdlib.assert(v304, {
          at: './index.rsh:81:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        const v305 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:82:11:decimal', stdlib.UInt_max, 4), v300);
        const v306 = stdlib.le(v305, v299);
        stdlib.assert(v306, {
          at: './index.rsh:82:10:application',
          fs: [],
          msg: null,
          who: 'ProjectOwner'
          });
        const v308 = stdlib.le(v305, stdlib.UInt_max);
        stdlib.assert(v308, {
          at: './index.rsh:83:10:application',
          fs: [],
          msg: null,
          who: 'ProjectOwner'
          });
        const v309 = stdlib.simTokenNew(sim_r, v295, v296, v297, v298, v299, undefined);
        const v310 = await txn5.getOutput('tokenNew', 'v309', ctc10, v309);
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc11, ctc11, ctc6, ctc7, ctc8, ctc6, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v295, v296, v297, v298, v299, v300], secs: v302, time: v301, didSend: v114, from: v294 } = txn5;
    ;
    const v304 = stdlib.addressEq(v236, v294);
    stdlib.assert(v304, {
      at: './index.rsh:81:6:dot',
      fs: [],
      msg: 'sender correct',
      who: 'ProjectOwner'
      });
    const v305 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:82:11:decimal', stdlib.UInt_max, 4), v300);
    const v306 = stdlib.le(v305, v299);
    stdlib.assert(v306, {
      at: './index.rsh:82:10:application',
      fs: [],
      msg: null,
      who: 'ProjectOwner'
      });
    const v308 = stdlib.le(v305, stdlib.UInt_max);
    stdlib.assert(v308, {
      at: './index.rsh:83:10:application',
      fs: [],
      msg: null,
      who: 'ProjectOwner'
      });
    const v309 = undefined;
    const v310 = await txn5.getOutput('tokenNew', 'v309', ctc10, v309);
    const v312 = {
      metadata: v298,
      name: v295,
      supply: v299,
      symbol: v296,
      url: v297
      };
    stdlib.protect(ctc3, await interact.reportTokenMinted(v310, v312), {
      at: './index.rsh:1:39:application',
      fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:88:32:application call to "liftedInteract" (defined at: ./index.rsh:88:32:application)'],
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
    const {data: [], secs: v315, time: v314, didSend: v131, from: v313 } = txn6;
    ;
    const v317 = stdlib.addressEq(v245, v313);
    stdlib.assert(v317, {
      at: './index.rsh:91:5:dot',
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
    const {data: [], secs: v322, time: v321, didSend: v142, from: v320 } = txn7;
    ;
    const v324 = stdlib.addressEq(v245, v320);
    stdlib.assert(v324, {
      at: './index.rsh:105:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'ProjectOwner'
      });
    const v325 = stdlib.addressEq(v245, v236);
    if (v325) {
      const v326 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:97:14:decimal', stdlib.UInt_max, 2), v300);
      ;
      const txn8 = await (ctc.sendrecv({
        args: [v236, v245, v299, v310, v326],
        evt_cnt: 0,
        funcNum: 7,
        lct: v321,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v335, time: v334, didSend: v168, from: v333 } = txn8;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v337 = stdlib.addressEq(v236, v333);
          stdlib.assert(v337, {
            at: './index.rsh:108:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          const v338 = stdlib.addressEq(v236, v236);
          if (v338) {
            sim_r.txns.push({
              amt: v326,
              kind: 'from',
              to: v236,
              tok: v310
              });
            
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v326,
              kind: 'from',
              to: v236,
              tok: v310
              });
            
            sim_r.isHalt = false;
            }
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc11, ctc11, ctc0, ctc10, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v335, time: v334, didSend: v168, from: v333 } = txn8;
      ;
      const v337 = stdlib.addressEq(v236, v333);
      stdlib.assert(v337, {
        at: './index.rsh:108:6:dot',
        fs: [],
        msg: 'sender correct',
        who: 'ProjectOwner'
        });
      const v338 = stdlib.addressEq(v236, v236);
      if (v338) {
        ;
        stdlib.protect(ctc3, await interact.didTransfer(true, v300), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:98:29:application call to "liftedInteract" (defined at: ./index.rsh:98:29:application)', 'at ./index.rsh:109:14:application call to "doTransfer1" (defined at: ./index.rsh:95:33:function exp)'],
          msg: 'didTransfer',
          who: 'ProjectOwner'
          });
        
        const txn9 = await (ctc.sendrecv({
          args: [v236, v245, v299, v310, v326],
          evt_cnt: 0,
          funcNum: 8,
          lct: v334,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:111:6:dot', stdlib.UInt_max, 0), [[v326, v310]]],
          sim_p: (async (txn9) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v349, time: v348, didSend: v198, from: v347 } = txn9;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:111:6:dot', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: v326,
              kind: 'to',
              tok: v310
              });
            const v354 = stdlib.addressEq(v236, v347);
            stdlib.assert(v354, {
              at: './index.rsh:111:6:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc11, ctc11, ctc0, ctc10, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v349, time: v348, didSend: v198, from: v347 } = txn9;
        ;
        ;
        const v354 = stdlib.addressEq(v236, v347);
        stdlib.assert(v354, {
          at: './index.rsh:111:6:dot',
          fs: [],
          msg: 'sender correct',
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
        const {data: [], secs: v358, time: v357, didSend: v208, from: v356 } = txn10;
        ;
        ;
        const v363 = stdlib.addressEq(v245, v356);
        stdlib.assert(v363, {
          at: './index.rsh:113:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        undefined;
        undefined;
        stdlib.protect(ctc3, await interact.reportExit(), {
          at: './index.rsh:119:42:application',
          fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:20:function exp)'],
          msg: 'reportExit',
          who: 'ProjectOwner'
          });
        
        return;
        
        
        
        
        }
      else {
        ;
        stdlib.protect(ctc3, await interact.didTransfer(true, v300), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:101:27:application call to "liftedInteract" (defined at: ./index.rsh:101:27:application)', 'at ./index.rsh:109:14:application call to "doTransfer1" (defined at: ./index.rsh:95:33:function exp)'],
          msg: 'didTransfer',
          who: 'ProjectOwner'
          });
        
        const txn9 = await (ctc.sendrecv({
          args: [v236, v245, v299, v310, v326],
          evt_cnt: 0,
          funcNum: 10,
          lct: v334,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:111:6:dot', stdlib.UInt_max, 0), [[v326, v310]]],
          sim_p: (async (txn9) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v392, time: v391, didSend: v198, from: v390 } = txn9;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:111:6:dot', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: v326,
              kind: 'to',
              tok: v310
              });
            const v397 = stdlib.addressEq(v236, v390);
            stdlib.assert(v397, {
              at: './index.rsh:111:6:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc11, ctc11, ctc0, ctc10, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v392, time: v391, didSend: v198, from: v390 } = txn9;
        ;
        ;
        const v397 = stdlib.addressEq(v236, v390);
        stdlib.assert(v397, {
          at: './index.rsh:111:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        const txn10 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 11,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v401, time: v400, didSend: v208, from: v399 } = txn10;
        ;
        ;
        const v406 = stdlib.addressEq(v245, v399);
        stdlib.assert(v406, {
          at: './index.rsh:113:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        undefined;
        undefined;
        stdlib.protect(ctc3, await interact.reportExit(), {
          at: './index.rsh:119:42:application',
          fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:20:function exp)'],
          msg: 'reportExit',
          who: 'ProjectOwner'
          });
        
        return;
        
        
        
        
        }
      
      }
    else {
      const v425 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:100:12:decimal', stdlib.UInt_max, 2), v300);
      ;
      const txn8 = await (ctc.sendrecv({
        args: [v236, v245, v299, v310, v425],
        evt_cnt: 0,
        funcNum: 12,
        lct: v321,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v434, time: v433, didSend: v168, from: v432 } = txn8;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v436 = stdlib.addressEq(v236, v432);
          stdlib.assert(v436, {
            at: './index.rsh:108:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          const v437 = stdlib.addressEq(v236, v236);
          if (v437) {
            sim_r.txns.push({
              amt: v425,
              kind: 'from',
              to: v236,
              tok: v310
              });
            
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v425,
              kind: 'from',
              to: v236,
              tok: v310
              });
            
            sim_r.isHalt = false;
            }
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc11, ctc11, ctc0, ctc10, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v434, time: v433, didSend: v168, from: v432 } = txn8;
      ;
      const v436 = stdlib.addressEq(v236, v432);
      stdlib.assert(v436, {
        at: './index.rsh:108:6:dot',
        fs: [],
        msg: 'sender correct',
        who: 'ProjectOwner'
        });
      const v437 = stdlib.addressEq(v236, v236);
      if (v437) {
        ;
        stdlib.protect(ctc3, await interact.didTransfer(true, v300), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:98:29:application call to "liftedInteract" (defined at: ./index.rsh:98:29:application)', 'at ./index.rsh:109:14:application call to "doTransfer1" (defined at: ./index.rsh:95:33:function exp)'],
          msg: 'didTransfer',
          who: 'ProjectOwner'
          });
        
        const txn9 = await (ctc.sendrecv({
          args: [v236, v245, v299, v310, v425],
          evt_cnt: 0,
          funcNum: 13,
          lct: v433,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:111:6:dot', stdlib.UInt_max, 0), [[v425, v310]]],
          sim_p: (async (txn9) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v448, time: v447, didSend: v198, from: v446 } = txn9;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:111:6:dot', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: v425,
              kind: 'to',
              tok: v310
              });
            const v453 = stdlib.addressEq(v236, v446);
            stdlib.assert(v453, {
              at: './index.rsh:111:6:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc11, ctc11, ctc0, ctc10, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v448, time: v447, didSend: v198, from: v446 } = txn9;
        ;
        ;
        const v453 = stdlib.addressEq(v236, v446);
        stdlib.assert(v453, {
          at: './index.rsh:111:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        const txn10 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 14,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v457, time: v456, didSend: v208, from: v455 } = txn10;
        ;
        ;
        const v462 = stdlib.addressEq(v245, v455);
        stdlib.assert(v462, {
          at: './index.rsh:113:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        undefined;
        undefined;
        stdlib.protect(ctc3, await interact.reportExit(), {
          at: './index.rsh:119:42:application',
          fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:20:function exp)'],
          msg: 'reportExit',
          who: 'ProjectOwner'
          });
        
        return;
        
        
        
        
        }
      else {
        ;
        stdlib.protect(ctc3, await interact.didTransfer(true, v300), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:101:27:application call to "liftedInteract" (defined at: ./index.rsh:101:27:application)', 'at ./index.rsh:109:14:application call to "doTransfer1" (defined at: ./index.rsh:95:33:function exp)'],
          msg: 'didTransfer',
          who: 'ProjectOwner'
          });
        
        const txn9 = await (ctc.sendrecv({
          args: [v236, v245, v299, v310, v425],
          evt_cnt: 0,
          funcNum: 15,
          lct: v433,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:111:6:dot', stdlib.UInt_max, 0), [[v425, v310]]],
          sim_p: (async (txn9) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v491, time: v490, didSend: v198, from: v489 } = txn9;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:111:6:dot', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: v425,
              kind: 'to',
              tok: v310
              });
            const v496 = stdlib.addressEq(v236, v489);
            stdlib.assert(v496, {
              at: './index.rsh:111:6:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc11, ctc11, ctc0, ctc10, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v491, time: v490, didSend: v198, from: v489 } = txn9;
        ;
        ;
        const v496 = stdlib.addressEq(v236, v489);
        stdlib.assert(v496, {
          at: './index.rsh:111:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        const txn10 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 16,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v500, time: v499, didSend: v208, from: v498 } = txn10;
        ;
        ;
        const v505 = stdlib.addressEq(v245, v498);
        stdlib.assert(v505, {
          at: './index.rsh:113:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        undefined;
        undefined;
        stdlib.protect(ctc3, await interact.reportExit(), {
          at: './index.rsh:119:42:application',
          fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:20:function exp)'],
          msg: 'reportExit',
          who: 'ProjectOwner'
          });
        
        return;
        
        
        
        
        }
      
      }
    
    
    
    
    
    
    
    
    
    }
  else {
    stdlib.protect(ctc3, await interact.reportCancellation(), {
      at: './index.rsh:53:52:application',
      fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:22:function exp)'],
      msg: 'reportCancellation',
      who: 'ProjectOwner'
      });
    
    stdlib.protect(ctc3, await interact.reportExit(), {
      at: './index.rsh:54:44:application',
      fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:22:function exp)'],
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
  const {data: [v237], secs: v239, time: v238, didSend: v24, from: v236 } = txn1;
  ;
  const v244 = stdlib.protect(ctc4, await interact.sponsor(v237), {
    at: './index.rsh:49:61:application',
    fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:13:function exp)'],
    msg: 'sponsor',
    who: 'Sponsor'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v236, v244],
    evt_cnt: 1,
    funcNum: 1,
    lct: v238,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v246], secs: v248, time: v247, didSend: v38, from: v245 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v250 = v246.contribute;
      if (v250) {
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
  const {data: [v246], secs: v248, time: v247, didSend: v38, from: v245 } = txn2;
  ;
  const v250 = v246.contribute;
  if (v250) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc0],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v262], secs: v264, time: v263, didSend: v65, from: v261 } = txn3;
    ;
    const v266 = stdlib.addressEq(v236, v261);
    stdlib.assert(v266, {
      at: './index.rsh:63:6:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    const txn4 = await (ctc.sendrecv({
      args: [v236, v245, v262],
      evt_cnt: 0,
      funcNum: 3,
      lct: v263,
      onlyIf: true,
      out_tys: [],
      pay: [v262, []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v269, time: v268, didSend: v72, from: v267 } = txn4;
        
        sim_r.txns.push({
          amt: v262,
          kind: 'to',
          tok: undefined
          });
        const v272 = stdlib.addressEq(v245, v267);
        stdlib.assert(v272, {
          at: './index.rsh:69:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        
        sim_r.txns.push({
          amt: v262,
          kind: 'from',
          to: v236,
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
    const {data: [], secs: v269, time: v268, didSend: v72, from: v267 } = txn4;
    ;
    const v272 = stdlib.addressEq(v245, v267);
    stdlib.assert(v272, {
      at: './index.rsh:69:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    stdlib.protect(ctc5, await interact.reportPayment(v262), {
      at: './index.rsh:71:45:application',
      fs: ['at ./index.rsh:71:7:application call to [unknown function] (defined at: ./index.rsh:71:20:function exp)'],
      msg: 'reportPayment',
      who: 'Sponsor'
      });
    
    ;
    stdlib.protect(ctc5, await interact.reportTransfer(v262), {
      at: './index.rsh:73:46:application',
      fs: ['at ./index.rsh:73:7:application call to [unknown function] (defined at: ./index.rsh:73:20:function exp)'],
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
    const {data: [v295, v296, v297, v298, v299, v300], secs: v302, time: v301, didSend: v114, from: v294 } = txn5;
    ;
    const v304 = stdlib.addressEq(v236, v294);
    stdlib.assert(v304, {
      at: './index.rsh:81:6:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    const v305 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:82:11:decimal', stdlib.UInt_max, 4), v300);
    const v306 = stdlib.le(v305, v299);
    stdlib.assert(v306, {
      at: './index.rsh:82:10:application',
      fs: [],
      msg: null,
      who: 'Sponsor'
      });
    const v308 = stdlib.le(v305, stdlib.UInt_max);
    stdlib.assert(v308, {
      at: './index.rsh:83:10:application',
      fs: [],
      msg: null,
      who: 'Sponsor'
      });
    const v309 = undefined;
    const v310 = await txn5.getOutput('tokenNew', 'v309', ctc9, v309);
    const txn6 = await (ctc.sendrecv({
      args: [v236, v245, v299, v300, v310],
      evt_cnt: 0,
      funcNum: 5,
      lct: v301,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v315, time: v314, didSend: v131, from: v313 } = txn6;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v317 = stdlib.addressEq(v245, v313);
        stdlib.assert(v317, {
          at: './index.rsh:91:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc10, ctc10, ctc0, ctc0, ctc9],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v315, time: v314, didSend: v131, from: v313 } = txn6;
    ;
    const v317 = stdlib.addressEq(v245, v313);
    stdlib.assert(v317, {
      at: './index.rsh:91:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    const v319 = {
      metadata: v298,
      name: v295,
      supply: v299,
      symbol: v296,
      url: v297
      };
    stdlib.protect(ctc5, await interact.reportTokenMinted(v310, v319), {
      at: './index.rsh:1:39:application',
      fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:92:31:application call to "liftedInteract" (defined at: ./index.rsh:92:31:application)'],
      msg: 'reportTokenMinted',
      who: 'Sponsor'
      });
    
    const txn7 = await (ctc.sendrecv({
      args: [v236, v245, v299, v300, v310],
      evt_cnt: 0,
      funcNum: 6,
      lct: v314,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v322, time: v321, didSend: v142, from: v320 } = txn7;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v324 = stdlib.addressEq(v245, v320);
        stdlib.assert(v324, {
          at: './index.rsh:105:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        const v325 = stdlib.addressEq(v245, v236);
        if (v325) {
          const v326 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:97:14:decimal', stdlib.UInt_max, 2), v300);
          sim_r.txns.push({
            amt: v326,
            kind: 'from',
            to: v245,
            tok: v310
            });
          
          sim_r.isHalt = false;
          }
        else {
          const v425 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:100:12:decimal', stdlib.UInt_max, 2), v300);
          sim_r.txns.push({
            amt: v425,
            kind: 'from',
            to: v245,
            tok: v310
            });
          
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc10, ctc10, ctc0, ctc0, ctc9],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v322, time: v321, didSend: v142, from: v320 } = txn7;
    ;
    const v324 = stdlib.addressEq(v245, v320);
    stdlib.assert(v324, {
      at: './index.rsh:105:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    const v325 = stdlib.addressEq(v245, v236);
    if (v325) {
      const v326 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:97:14:decimal', stdlib.UInt_max, 2), v300);
      ;
      stdlib.protect(ctc5, await interact.didTransfer(true, v300), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:98:29:application call to "liftedInteract" (defined at: ./index.rsh:98:29:application)', 'at ./index.rsh:106:14:application call to "doTransfer1" (defined at: ./index.rsh:95:33:function exp)'],
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
      const {data: [], secs: v335, time: v334, didSend: v168, from: v333 } = txn8;
      ;
      const v337 = stdlib.addressEq(v236, v333);
      stdlib.assert(v337, {
        at: './index.rsh:108:6:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sponsor'
        });
      const v338 = stdlib.addressEq(v236, v236);
      if (v338) {
        ;
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 8,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v349, time: v348, didSend: v198, from: v347 } = txn9;
        ;
        ;
        const v354 = stdlib.addressEq(v236, v347);
        stdlib.assert(v354, {
          at: './index.rsh:111:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        const txn10 = await (ctc.sendrecv({
          args: [v245, v299, v310, v326],
          evt_cnt: 0,
          funcNum: 9,
          lct: v348,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:113:5:dot', stdlib.UInt_max, 0), [[v326, v310]]],
          sim_p: (async (txn10) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v358, time: v357, didSend: v208, from: v356 } = txn10;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:113:5:dot', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: v326,
              kind: 'to',
              tok: v310
              });
            const v363 = stdlib.addressEq(v245, v356);
            stdlib.assert(v363, {
              at: './index.rsh:113:5:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            stdlib.simTokenBurn(sim_r, v310, v299);
            stdlib.simTokenDestroy(sim_r, v310);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc10, ctc0, ctc9, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v358, time: v357, didSend: v208, from: v356 } = txn10;
        ;
        ;
        const v363 = stdlib.addressEq(v245, v356);
        stdlib.assert(v363, {
          at: './index.rsh:113:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        undefined;
        undefined;
        stdlib.protect(ctc5, await interact.reportExit(), {
          at: './index.rsh:119:42:application',
          fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:20:function exp)'],
          msg: 'reportExit',
          who: 'Sponsor'
          });
        
        return;
        
        
        
        
        }
      else {
        ;
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 10,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v392, time: v391, didSend: v198, from: v390 } = txn9;
        ;
        ;
        const v397 = stdlib.addressEq(v236, v390);
        stdlib.assert(v397, {
          at: './index.rsh:111:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        const txn10 = await (ctc.sendrecv({
          args: [v245, v299, v310, v326],
          evt_cnt: 0,
          funcNum: 11,
          lct: v391,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:113:5:dot', stdlib.UInt_max, 0), [[v326, v310]]],
          sim_p: (async (txn10) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v401, time: v400, didSend: v208, from: v399 } = txn10;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:113:5:dot', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: v326,
              kind: 'to',
              tok: v310
              });
            const v406 = stdlib.addressEq(v245, v399);
            stdlib.assert(v406, {
              at: './index.rsh:113:5:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            stdlib.simTokenBurn(sim_r, v310, v299);
            stdlib.simTokenDestroy(sim_r, v310);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc10, ctc0, ctc9, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v401, time: v400, didSend: v208, from: v399 } = txn10;
        ;
        ;
        const v406 = stdlib.addressEq(v245, v399);
        stdlib.assert(v406, {
          at: './index.rsh:113:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        undefined;
        undefined;
        stdlib.protect(ctc5, await interact.reportExit(), {
          at: './index.rsh:119:42:application',
          fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:20:function exp)'],
          msg: 'reportExit',
          who: 'Sponsor'
          });
        
        return;
        
        
        
        
        }
      
      }
    else {
      const v425 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:100:12:decimal', stdlib.UInt_max, 2), v300);
      ;
      stdlib.protect(ctc5, await interact.didTransfer(true, v300), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:101:27:application call to "liftedInteract" (defined at: ./index.rsh:101:27:application)', 'at ./index.rsh:106:14:application call to "doTransfer1" (defined at: ./index.rsh:95:33:function exp)'],
        msg: 'didTransfer',
        who: 'Sponsor'
        });
      
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 12,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v434, time: v433, didSend: v168, from: v432 } = txn8;
      ;
      const v436 = stdlib.addressEq(v236, v432);
      stdlib.assert(v436, {
        at: './index.rsh:108:6:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sponsor'
        });
      const v437 = stdlib.addressEq(v236, v236);
      if (v437) {
        ;
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 13,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v448, time: v447, didSend: v198, from: v446 } = txn9;
        ;
        ;
        const v453 = stdlib.addressEq(v236, v446);
        stdlib.assert(v453, {
          at: './index.rsh:111:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        const txn10 = await (ctc.sendrecv({
          args: [v245, v299, v310, v425],
          evt_cnt: 0,
          funcNum: 14,
          lct: v447,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:113:5:dot', stdlib.UInt_max, 0), [[v425, v310]]],
          sim_p: (async (txn10) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v457, time: v456, didSend: v208, from: v455 } = txn10;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:113:5:dot', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: v425,
              kind: 'to',
              tok: v310
              });
            const v462 = stdlib.addressEq(v245, v455);
            stdlib.assert(v462, {
              at: './index.rsh:113:5:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            stdlib.simTokenBurn(sim_r, v310, v299);
            stdlib.simTokenDestroy(sim_r, v310);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc10, ctc0, ctc9, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v457, time: v456, didSend: v208, from: v455 } = txn10;
        ;
        ;
        const v462 = stdlib.addressEq(v245, v455);
        stdlib.assert(v462, {
          at: './index.rsh:113:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        undefined;
        undefined;
        stdlib.protect(ctc5, await interact.reportExit(), {
          at: './index.rsh:119:42:application',
          fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:20:function exp)'],
          msg: 'reportExit',
          who: 'Sponsor'
          });
        
        return;
        
        
        
        
        }
      else {
        ;
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 15,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v491, time: v490, didSend: v198, from: v489 } = txn9;
        ;
        ;
        const v496 = stdlib.addressEq(v236, v489);
        stdlib.assert(v496, {
          at: './index.rsh:111:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        const txn10 = await (ctc.sendrecv({
          args: [v245, v299, v310, v425],
          evt_cnt: 0,
          funcNum: 16,
          lct: v490,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:113:5:dot', stdlib.UInt_max, 0), [[v425, v310]]],
          sim_p: (async (txn10) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v500, time: v499, didSend: v208, from: v498 } = txn10;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:113:5:dot', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: v425,
              kind: 'to',
              tok: v310
              });
            const v505 = stdlib.addressEq(v245, v498);
            stdlib.assert(v505, {
              at: './index.rsh:113:5:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sponsor'
              });
            stdlib.simTokenBurn(sim_r, v310, v299);
            stdlib.simTokenDestroy(sim_r, v310);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc10, ctc0, ctc9, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v500, time: v499, didSend: v208, from: v498 } = txn10;
        ;
        ;
        const v505 = stdlib.addressEq(v245, v498);
        stdlib.assert(v505, {
          at: './index.rsh:113:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        undefined;
        undefined;
        stdlib.protect(ctc5, await interact.reportExit(), {
          at: './index.rsh:119:42:application',
          fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:20:function exp)'],
          msg: 'reportExit',
          who: 'Sponsor'
          });
        
        return;
        
        
        
        
        }
      
      }
    
    
    
    
    
    
    
    
    
    }
  else {
    stdlib.protect(ctc5, await interact.reportCancellation(), {
      at: './index.rsh:53:52:application',
      fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:22:function exp)'],
      msg: 'reportCancellation',
      who: 'Sponsor'
      });
    
    stdlib.protect(ctc5, await interact.reportExit(), {
      at: './index.rsh:54:44:application',
      fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:22:function exp)'],
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
// "./index.rsh:42:6:dot"
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
// "./index.rsh:42:6:dot"
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
// "./index.rsh:50:5:dot"
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
// "./index.rsh:63:6:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:63:6:dot"
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
// "./index.rsh:69:5:dot"
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
// "./index.rsh:69:5:dot"
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
// "./index.rsh:81:6:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:81:6:dot"
// "[]"
load 255
txn Sender
==
assert
int 4
load 248
*
store 247
// Nothing
// "./index.rsh:82:10:application"
// "[]"
load 247
load 249
<=
assert
// Nothing
// "./index.rsh:83:10:application"
// "[]"
load 247
int 18446744073709551615
<=
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
store 246
byte base64(AAAAAAAAATU=)
load 246
itob
concat
log // 16
load 246
store 245
load 255
load 254
concat
load 249
itob
concat
load 248
itob
concat
load 245
itob
concat
int 1
bzero
dig 1
extract 0 88
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
// "./index.rsh:91:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:91:5:dot"
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
load 251
itob
concat
int 1
bzero
dig 1
extract 0 88
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
// "./index.rsh:105:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:105:5:dot"
// "[]"
load 254
txn Sender
==
assert
load 254
load 255
==
bz l13_ifF
int 2
load 252
*
dup
store 250
dup
bz l14_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 254
itxn_field AssetReceiver
load 251
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
load 251
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
int 2
load 252
*
dup
store 250
dup
bz l15_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 254
itxn_field AssetReceiver
load 251
itxn_field XferAsset
itxn_submit
int 0
l15_makeTxnK:
pop
load 255
load 254
concat
load 253
itob
concat
load 251
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
int 14
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
bz l16_afterHandler7
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
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:108:6:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:108:6:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
dup
==
bz l17_ifF
load 251
dup
bz l18_makeTxnK
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
l18_makeTxnK:
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
l17_ifF:
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
load 251
itob
concat
int 1
bzero
dig 1
extract 0 88
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
l16_afterHandler7:
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
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:111:6:dot"
// "[]"
// "CheckPay"
// "./index.rsh:111:6:dot"
// "[]"
load 251
dup
bz l21_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 252
dig 1
gtxns XferAsset
==
assert
int axfer
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
gtxns AssetReceiver
==
assert
l21_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:111:6:dot"
// "[]"
load 255
txn Sender
==
assert
load 254
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
extract 0 56
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
l20_afterHandler8:
// Handler 9
dup
int 9
==
bz l22_afterHandler9
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
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
dup
int 48
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
// "./index.rsh:113:5:dot"
// "[]"
// "CheckPay"
// "./index.rsh:113:5:dot"
// "[]"
load 252
dup
bz l23_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 253
dig 1
gtxns XferAsset
==
assert
int axfer
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
gtxns AssetReceiver
==
assert
l23_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:113:5:dot"
// "[]"
load 255
txn Sender
==
assert
itxn_begin
int acfg
itxn_field TypeEnum
load 253
itxn_field ConfigAsset
itxn_submit
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
l24_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l22_afterHandler9:
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
// "./index.rsh:111:6:dot"
// "[]"
// "CheckPay"
// "./index.rsh:111:6:dot"
// "[]"
load 251
dup
bz l26_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 252
dig 1
gtxns XferAsset
==
assert
int axfer
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
gtxns AssetReceiver
==
assert
l26_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:111:6:dot"
// "[]"
load 255
txn Sender
==
assert
load 254
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
extract 0 56
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
l25_afterHandler10:
// Handler 11
dup
int 11
==
bz l27_afterHandler11
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
dup
int 48
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
// "./index.rsh:113:5:dot"
// "[]"
// "CheckPay"
// "./index.rsh:113:5:dot"
// "[]"
load 252
dup
bz l28_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 253
dig 1
gtxns XferAsset
==
assert
int axfer
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
gtxns AssetReceiver
==
assert
l28_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:113:5:dot"
// "[]"
load 255
txn Sender
==
assert
itxn_begin
int acfg
itxn_field TypeEnum
load 253
itxn_field ConfigAsset
itxn_submit
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
l29_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l27_afterHandler11:
// Handler 12
dup
int 12
==
bz l30_afterHandler12
pop
// check step
int 14
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
// "./index.rsh:108:6:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:108:6:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
dup
==
bz l31_ifF
load 251
dup
bz l32_makeTxnK
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
l32_makeTxnK:
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
int 1
bzero
dig 1
extract 0 88
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
l31_ifF:
load 251
dup
bz l33_makeTxnK
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
l33_makeTxnK:
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
int 1
bzero
dig 1
extract 0 88
app_global_put
pop
int 18
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l30_afterHandler12:
// Handler 13
dup
int 13
==
bz l34_afterHandler13
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
// "./index.rsh:111:6:dot"
// "[]"
// "CheckPay"
// "./index.rsh:111:6:dot"
// "[]"
load 251
dup
bz l35_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 252
dig 1
gtxns XferAsset
==
assert
int axfer
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
gtxns AssetReceiver
==
assert
l35_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:111:6:dot"
// "[]"
load 255
txn Sender
==
assert
load 254
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
extract 0 56
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
l34_afterHandler13:
// Handler 14
dup
int 14
==
bz l36_afterHandler14
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
dup
int 48
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
// "./index.rsh:113:5:dot"
// "[]"
// "CheckPay"
// "./index.rsh:113:5:dot"
// "[]"
load 252
dup
bz l37_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 253
dig 1
gtxns XferAsset
==
assert
int axfer
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
gtxns AssetReceiver
==
assert
l37_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:113:5:dot"
// "[]"
load 255
txn Sender
==
assert
itxn_begin
int acfg
itxn_field TypeEnum
load 253
itxn_field ConfigAsset
itxn_submit
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
l38_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l36_afterHandler14:
// Handler 15
dup
int 15
==
bz l39_afterHandler15
pop
// check step
int 18
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
// "./index.rsh:111:6:dot"
// "[]"
// "CheckPay"
// "./index.rsh:111:6:dot"
// "[]"
load 251
dup
bz l40_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 252
dig 1
gtxns XferAsset
==
assert
int axfer
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
gtxns AssetReceiver
==
assert
l40_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:111:6:dot"
// "[]"
load 255
txn Sender
==
assert
load 254
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
extract 0 56
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
l39_afterHandler15:
// Handler 16
dup
int 16
==
bz l41_afterHandler16
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
dup
int 48
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
// "./index.rsh:113:5:dot"
// "[]"
// "CheckPay"
// "./index.rsh:113:5:dot"
// "[]"
load 252
dup
bz l42_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 253
dig 1
gtxns XferAsset
==
assert
int axfer
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
gtxns AssetReceiver
==
assert
l42_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:113:5:dot"
// "[]"
load 255
txn Sender
==
assert
itxn_begin
int acfg
itxn_field TypeEnum
load 253
itxn_field ConfigAsset
itxn_submit
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
l43_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l41_afterHandler16:
int 0
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
  stateSize: 88,
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
                "name": "v237",
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
                "name": "v237",
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
                "name": "v246",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v262",
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
                "name": "v295",
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
                "name": "v296",
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
                "name": "v297",
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
                "name": "v298",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v300",
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
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v309",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v309",
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
                "name": "v246",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v262",
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
                "name": "v295",
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
                "name": "v296",
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
                "name": "v297",
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
                "name": "v298",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v300",
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
  Bytecode: `0x60806040526040516200408a3803806200408a83398101604081905262000026916200028d565b6000805543600355604080518251815260208084015151805182840152908101515163ffffffff1990811683850152908301515116606082015290517f8302b0f24a2ffe1d985578653bc53343adcf2fb4aec8ed088c306c86a40df3fc9181900360800190a16200009a34156007620000eb565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000e292919062000115565b5050506200037f565b81620001115760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001239062000342565b90600052602060002090601f01602090048101928262000147576000855562000192565b82601f106200016257805160ff191683800117855562000192565b8280016001018555821562000192579182015b828111156200019257825182559160200191906001019062000175565b50620001a0929150620001a4565b5090565b5b80821115620001a05760008155600101620001a5565b604051602081016001600160401b0381118282101715620001ec57634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b0381118282101715620001ec57634e487b7160e01b600052604160045260246000fd5b6000602082840312156200023657600080fd5b604051602081016001600160401b03811182821017156200026757634e487b7160e01b600052604160045260246000fd5b6040528251909150819063ffffffff19811681146200028557600080fd5b905292915050565b60008183036080811215620002a157600080fd5b604080519081016001600160401b0381118282101715620002d257634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ec57600080fd5b620002f6620001bb565b915062000302620001f2565b6020850151815262000318866040870162000223565b60208201526200032c866060870162000223565b6040820152825260208101919091529392505050565b600181811c908216806200035757607f821691505b602082108114156200037957634e487b7160e01b600052602260045260246000fd5b50919050565b613cfb806200038f6000396000f3fe608060405260043610620001235760003560e01c80638b9fadc811620000a7578063c79800371162000069578063c7980037146200028e578063de73699814620002a5578063e00acef114620002bc578063e533a29d14620002d3578063f19b435214620002ea57005b80638b9fadc8146200020a5780638e3147691462000221578063a035b2e01462000238578063ab53f2c6146200024f578063bf2c5b24146200027757005b806345f7039611620000f157806345f7039614620001975780635471c5a814620001ae57806373b4522c14620001c55780638323075714620001dc5780638a46175314620001f357005b806311faee8c146200012d5780631e93b0f114620001445780633711704a14620001695780633a31ddbd146200018057005b366200012b57005b005b6200012b6200013e3660046200263f565b62000301565b3480156200015157600080fd5b506003545b6040519081526020015b60405180910390f35b6200012b6200017a3660046200265e565b620004eb565b6200012b620001913660046200263f565b62000693565b6200012b620001a83660046200263f565b6200084b565b6200012b620001bf3660046200263f565b620009f8565b6200012b620001d63660046200263f565b62000bb0565b348015620001e957600080fd5b5060015462000156565b6200012b6200020436600462002671565b62000d8d565b6200012b6200021b3660046200263f565b620010f8565b6200012b620002323660046200263f565b6200127b565b6200012b620002493660046200263f565b62001432565b3480156200025c57600080fd5b506200026762001592565b60405162000160929190620026e2565b6200012b620002883660046200263f565b62001637565b6200012b6200029f3660046200263f565b620017f1565b6200012b620002b63660046200263f565b62001a91565b6200012b620002cd3660046200263f565b62001bf1565b6200012b620002e43660046200263f565b62001da9565b6200012b620002fb3660046200263f565b62001f61565b62000313600e60005414603b620020bc565b62000330813515806200032857506001548235145b603c620020bc565b6000808055600280546200034490620026fd565b80601f01602080910402602001604051908101604052809291908181526020018280546200037290620026fd565b8015620003c35780601f106200039757610100808354040283529160200191620003c3565b820191906000526020600020905b815481529060010190602001808311620003a557829003601f168201915b5050505050806020019051810190620003dd9190620027ea565b90507f1c3c1eb1a49b49281bc33392d8e3bef6fbe90ccd8bc1d2451934aa1b13794fbf8260405162000410919062002839565b60405180910390a16200042634156039620020bc565b805162000440906001600160a01b03163314603a620020bc565b62000459816060015182600001518360800151620020e3565b62000463620024cb565b81516001600160a01b039081168252602080840151821681840152604080850151818501526060808601519093169284019290925260808085015190840152600f600055436001559051620004bb918391016200284f565b60405160208183030381529060405260029080519060200190620004e1929190620024f9565b50505050565b5050565b620004fd6001600054146009620020bc565b6200051a813515806200051257506001548235145b600a620020bc565b6000808055600280546200052e90620026fd565b80601f01602080910402602001604051908101604052809291908181526020018280546200055c90620026fd565b8015620005ad5780601f106200058157610100808354040283529160200191620005ad565b820191906000526020600020905b8154815290600101906020018083116200058f57829003601f168201915b5050505050806020019051810190620005c7919062002895565b90507f9ea6e8c055e86924b5db5f9635a4bdc97514ead0c112e90b6cc9dedc308452d482604051620005fa9190620028f1565b60405180910390a16200061034156008620020bc565b6200062260608301604084016200290b565b156200067b57604080518082019091526000808252602082015281516001600160a01b039081168083523360208085019182526002600055436001556040805191820193909352905190921690820152606001620004bb565b60008080556001819055620004e79060029062002588565b620006a5601260005414604a620020bc565b620006c281351580620006ba57506001548235145b604b620020bc565b600080805560028054620006d690620026fd565b80601f01602080910402602001604051908101604052809291908181526020018280546200070490620026fd565b8015620007555780601f10620007295761010080835404028352916020019162000755565b820191906000526020600020905b8154815290600101906020018083116200073757829003601f168201915b50505050508060200190518101906200076f9190620027ea565b90507f96969340a6658e1e09f3b3af80819f55bac87c191bbf60c7b83615ec9e37fc0682604051620007a2919062002839565b60405180910390a1620007b834156047620020bc565b620007d9620007d13383606001518460800151620020fa565b6048620020bc565b8051620007f3906001600160a01b031633146049620020bc565b620007fd620025c7565b6020808301516001600160a01b039081168352604080850151848401526060808601519092168185015260808501519184019190915260136000554360015551620004bb918391016200292b565b6200085d600260005414600d620020bc565b6200087a813515806200087257506001548235145b600e620020bc565b6000808055600280546200088e90620026fd565b80601f0160208091040260200160405190810160405280929190818152602001828054620008bc90620026fd565b80156200090d5780601f10620008e1576101008083540402835291602001916200090d565b820191906000526020600020905b815481529060010190602001808311620008ef57829003601f168201915b505050505080602001905181019062000927919062002965565b6040805184358152602080860135908201529192507fa8de7fa57e96b1b344028051973cc20a5275cd64ccacf1c4ebc1e38bc2945cb6910160405180910390a1620009753415600b620020bc565b80516200098f906001600160a01b03163314600c620020bc565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528a8501358352600390955543600155875193840194909452905190921694810194909452519083015290608001620004bb565b62000a0a600f600054146040620020bc565b62000a278135158062000a1f57506001548235145b6041620020bc565b60008080556002805462000a3b90620026fd565b80601f016020809104026020016040519081016040528092919081815260200182805462000a6990620026fd565b801562000aba5780601f1062000a8e5761010080835404028352916020019162000aba565b820191906000526020600020905b81548152906001019060200180831162000a9c57829003601f168201915b505050505080602001905181019062000ad49190620027ea565b90507f07e6cc8e2fc82a9375e0bae2c8fb95cb33ae4f7121cc887b7bcd23b343d8ec058260405162000b07919062002839565b60405180910390a162000b1d3415603d620020bc565b62000b3e62000b363383606001518460800151620020fa565b603e620020bc565b805162000b58906001600160a01b03163314603f620020bc565b62000b62620025c7565b6020808301516001600160a01b039081168352604080850151848401526060808601519092168185015260808501519184019190915260106000554360015551620004bb918391016200292b565b62000bc26003600054146011620020bc565b62000bdf8135158062000bd757506001548235145b6012620020bc565b60008080556002805462000bf390620026fd565b80601f016020809104026020016040519081016040528092919081815260200182805462000c2190620026fd565b801562000c725780601f1062000c465761010080835404028352916020019162000c72565b820191906000526020600020905b81548152906001019060200180831162000c5457829003601f168201915b505050505080602001905181019062000c8c9190620029d4565b90507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c098260405162000cbf919062002839565b60405180910390a162000cda81604001513414600f620020bc565b602081015162000cf7906001600160a01b031633146010620020bc565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562000d35573d6000803e3d6000fd5b50604080518082019091526000808252602082015281516001600160a01b03908116808352602080850151831681850190815260046000554360015560408051928301939093525190921690820152606001620004bb565b62000d9f6004600054146017620020bc565b62000dbc8135158062000db457506001548235145b6018620020bc565b60008080556002805462000dd090620026fd565b80601f016020809104026020016040519081016040528092919081815260200182805462000dfe90620026fd565b801562000e4f5780601f1062000e235761010080835404028352916020019162000e4f565b820191906000526020600020905b81548152906001019060200180831162000e3157829003601f168201915b505050505080602001905181019062000e69919062002965565b60408051606081018252600080825260208201819052818301529051919250907f982860f8d27e8cc7c0ebb9e4cd916f47e6690c6b4a3744b1369dcf0abfce34f49062000eb890859062002a69565b60405180910390a162000ece34156013620020bc565b815162000ee8906001600160a01b031633146014620020bc565b62000efa610100840135600462002add565b80825262000f119060e085013510156015620020bc565b62000f1f60016016620020bc565b60408051602085810135908201520160408051601f1981840301815291815262000f50906060860190860162002b0b565b6040516001600160c01b0319909116602082015260280160408051808303601f1901815282825260608781013560208501526080808901359385019390935260a088013590840152910160408051808303601f1901815282825260c0880135602084015291016040516020818303038152906040528660200160c00135601260405162000fdd9062002601565b62000fee9695949392919062002b29565b604051809103906000f0801580156200100b573d6000803e3d6000fd5b506001600160a01b031660208281018290526040808401839052519182527f45797cac5ddd042111e99a6785ee6ea2b3f7e8274283330b68d519546398d6be910160405180910390a16040805160a08101825260008082526020808301828152838501838152606085018481526080860185815289516001600160a01b0390811688528a860151811690945260e08b01359092526101008a0135905286860151909116905260059091554360015591519091620010cb9183910162002b94565b60405160208183030381529060405260029080519060200190620010f1929190620024f9565b5050505050565b6200110a600c600054146037620020bc565b62001127813515806200111f57506001548235145b6038620020bc565b6000808055600280546200113b90620026fd565b80601f01602080910402602001604051908101604052809291908181526020018280546200116990620026fd565b8015620011ba5780601f106200118e57610100808354040283529160200191620011ba565b820191906000526020600020905b8154815290600101906020018083116200119c57829003601f168201915b5050505050806020019051810190620011d4919062002c5d565b90507f5fe72957f5855f25860ec325face1305075da64ba42ea3b56918fbe46e26b4048260405162001207919062002839565b60405180910390a16200121d34156034620020bc565b6200123e620012363383604001518460600151620020fa565b6035620020bc565b805162001258906001600160a01b031633146036620020bc565b6200126c8160400151826020015162002114565b6200067b81604001516200212a565b6200128d600560005414601b620020bc565b620012aa81351580620012a257506001548235145b601c620020bc565b600080805560028054620012be90620026fd565b80601f0160208091040260200160405190810160405280929190818152602001828054620012ec90620026fd565b80156200133d5780601f1062001311576101008083540402835291602001916200133d565b820191906000526020600020905b8154815290600101906020018083116200131f57829003601f168201915b505050505080602001905181019062001357919062002c7c565b90507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8826040516200138a919062002839565b60405180910390a1620013a034156019620020bc565b6020810151620013bd906001600160a01b03163314601a620020bc565b6040805160a08101825260008082526020808301828152838501838152606080860185815260808088018781528a516001600160a01b039081168a528b88015181169096528a8a0151909452918901519052870151909116905260069091554360015591519091620004bb9183910162002b94565b620014446010600054146045620020bc565b62001461813515806200145957506001548235145b6046620020bc565b6000808055600280546200147590620026fd565b80601f0160208091040260200160405190810160405280929190818152602001828054620014a390620026fd565b8015620014f45780601f10620014c857610100808354040283529160200191620014f4565b820191906000526020600020905b815481529060010190602001808311620014d657829003601f168201915b50505050508060200190518101906200150e919062002c5d565b90507fe0a2e1387b485a156cf7c3e3303f6334b1f0a305dca44d49ca15f2f74d8b4bda8260405162001541919062002839565b60405180910390a16200155734156042620020bc565b62001578620015703383604001518460600151620020fa565b6043620020bc565b805162001258906001600160a01b031633146044620020bc565b600060606000546002808054620015a990620026fd565b80601f0160208091040260200160405190810160405280929190818152602001828054620015d790620026fd565b8015620016285780601f10620015fc5761010080835404028352916020019162001628565b820191906000526020600020905b8154815290600101906020018083116200160a57829003601f168201915b50505050509050915091509091565b620016496007600054146023620020bc565b62001666813515806200165e57506001548235145b6024620020bc565b6000808055600280546200167a90620026fd565b80601f0160208091040260200160405190810160405280929190818152602001828054620016a890620026fd565b8015620016f95780601f10620016cd57610100808354040283529160200191620016f9565b820191906000526020600020905b815481529060010190602001808311620016db57829003601f168201915b5050505050806020019051810190620017139190620027ea565b90507fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e08260405162001746919062002839565b60405180910390a16200175c34156021620020bc565b805162001776906001600160a01b031633146022620020bc565b6200178f816060015182600001518360800151620020e3565b62001799620024cb565b81516001600160a01b0390811682526020808401518216818401526040808501518185015260608086015190931692840192909252608080850151908401526008600055436001559051620004bb918391016200284f565b62001803600660005414601f620020bc565b62001820813515806200181857506001548235145b6020620020bc565b6000808055600280546200183490620026fd565b80601f01602080910402602001604051908101604052809291908181526020018280546200186290620026fd565b8015620018b35780601f106200188757610100808354040283529160200191620018b3565b820191906000526020600020905b8154815290600101906020018083116200189557829003601f168201915b5050505050806020019051810190620018cd919062002c7c565b9050620018ed604051806040016040528060008152602001600081525090565b7f4df267dd1a05b613b05cdeee7d7e028d3842cff6f4e5a9d9dde2cdaf41562759836040516200191e919062002839565b60405180910390a1620019343415601d620020bc565b602082015162001951906001600160a01b03163314601e620020bc565b81600001516001600160a01b031682602001516001600160a01b03161415620019fd5760608201516200198690600262002add565b808252608083015160208401516200199e92620020e3565b620019a8620024cb565b82516001600160a01b0390811682526020808501518216818401526040808601518185015260808087015190931660608501528451928401929092526007600055436001559051620010cb918391016200284f565b606082015162001a0f90600262002add565b602080830182905260808401519084015162001a2b92620020e3565b62001a35620024cb565b82516001600160a01b0390811682526020808501518216818401526040808601518185015260808087015190931660608501528482015192840192909252600e600055436001559051620010cb918391016200284f565b505050565b62001aa3600960005414602d620020bc565b62001ac08135158062001ab857506001548235145b602e620020bc565b60008080556002805462001ad490620026fd565b80601f016020809104026020016040519081016040528092919081815260200182805462001b0290620026fd565b801562001b535780601f1062001b275761010080835404028352916020019162001b53565b820191906000526020600020905b81548152906001019060200180831162001b3557829003601f168201915b505050505080602001905181019062001b6d919062002c5d565b90507fb764c356a899e639c4043e82fb6274894baac6d84c74f3b3ae78d8f4b22b00038260405162001ba0919062002839565b60405180910390a162001bb63415602a620020bc565b62001bd762001bcf3383604001518460600151620020fa565b602b620020bc565b805162001258906001600160a01b03163314602c620020bc565b62001c03600b600054146032620020bc565b62001c208135158062001c1857506001548235145b6033620020bc565b60008080556002805462001c3490620026fd565b80601f016020809104026020016040519081016040528092919081815260200182805462001c6290620026fd565b801562001cb35780601f1062001c875761010080835404028352916020019162001cb3565b820191906000526020600020905b81548152906001019060200180831162001c9557829003601f168201915b505050505080602001905181019062001ccd9190620027ea565b90507f4c8b89b6d291e7da782b3a03ba8192a22dc69ae73b79029441f7242310b1a5a48260405162001d00919062002839565b60405180910390a162001d163415602f620020bc565b62001d3762001d2f3383606001518460800151620020fa565b6030620020bc565b805162001d51906001600160a01b031633146031620020bc565b62001d5b620025c7565b6020808301516001600160a01b0390811683526040808501518484015260608086015190921681850152608085015191840191909152600c6000554360015551620004bb918391016200292b565b62001dbb6008600054146028620020bc565b62001dd88135158062001dd057506001548235145b6029620020bc565b60008080556002805462001dec90620026fd565b80601f016020809104026020016040519081016040528092919081815260200182805462001e1a90620026fd565b801562001e6b5780601f1062001e3f5761010080835404028352916020019162001e6b565b820191906000526020600020905b81548152906001019060200180831162001e4d57829003601f168201915b505050505080602001905181019062001e859190620027ea565b90507fb9845e39b4c5715a32bc04872bfe1723e638b66042817fdde0a44e5b0466b6dc8260405162001eb8919062002839565b60405180910390a162001ece34156025620020bc565b62001eef62001ee73383606001518460800151620020fa565b6026620020bc565b805162001f09906001600160a01b031633146027620020bc565b62001f13620025c7565b6020808301516001600160a01b039081168352604080850151848401526060808601519092168185015260808501519184019190915260096000554360015551620004bb918391016200292b565b62001f73601360005414604f620020bc565b62001f908135158062001f8857506001548235145b6050620020bc565b60008080556002805462001fa490620026fd565b80601f016020809104026020016040519081016040528092919081815260200182805462001fd290620026fd565b8015620020235780601f1062001ff75761010080835404028352916020019162002023565b820191906000526020600020905b8154815290600101906020018083116200200557829003601f168201915b50505050508060200190518101906200203d919062002c5d565b90507f359a55deeb4d5872fc8fd0567a7ed5063e7b4dc07b55df97304b61bb4b680e128260405162002070919062002839565b60405180910390a1620020863415604c620020bc565b620020a76200209f3383604001518460600151620020fa565b604d620020bc565b805162001258906001600160a01b03163314604e5b81620004e75760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b620020f083838362002142565b62001a8c57600080fd5b60006200210a838530856200221b565b90505b9392505050565b620021208282620022fd565b620004e757600080fd5b6200213581620023e1565b6200213f57600080fd5b50565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391620021a39162002d12565b60006040518083038185875af1925050503d8060008114620021e2576040519150601f19603f3d011682016040523d82523d6000602084013e620021e7565b606091505b5091509150620021fa828260026200248c565b508080602001905181019062002211919062002d30565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391620022849162002d12565b60006040518083038185875af1925050503d8060008114620022c3576040519150601f19603f3d011682016040523d82523d6000602084013e620022c8565b606091505b5091509150620022db828260016200248c565b5080806020019051810190620022f2919062002d30565b979650505050505050565b6000806000846001600160a01b031660006342966c6860e01b866040516024016200232a91815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516200236a919062002d12565b60006040518083038185875af1925050503d8060008114620023a9576040519150601f19603f3d011682016040523d82523d6000602084013e620023ae565b606091505b5091509150620023c1828260036200248c565b5080806020019051810190620023d8919062002d30565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b0386169183916200242a9162002d12565b60006040518083038185875af1925050503d806000811462002469576040519150601f19603f3d011682016040523d82523d6000602084013e6200246e565b606091505b509150915062002481828260046200248c565b506001949350505050565b606083156200249d5750816200210d565b825115620024ae5782518084602001fd5b60405163100960cb60e01b815260048101839052602401620020da565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b8280546200250790620026fd565b90600052602060002090601f0160209004810192826200252b576000855562002576565b82601f106200254657805160ff191683800117855562002576565b8280016001018555821562002576579182015b828111156200257657825182559160200191906001019062002559565b50620025849291506200260f565b5090565b5080546200259690620026fd565b6000825580601f10620025a7575050565b601f0160209004906000526020600020908101906200213f91906200260f565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b610f758062002d5183390190565b5b8082111562002584576000815560010162002610565b6000604082840312156200263957600080fd5b50919050565b6000604082840312156200265257600080fd5b6200210d838362002626565b6000606082840312156200263957600080fd5b600061012082840312156200263957600080fd5b60005b83811015620026a257818101518382015260200162002688565b83811115620004e15750506000910152565b60008151808452620026ce81602086016020860162002685565b601f01601f19169290920160200192915050565b8281526040602082015260006200210a6040830184620026b4565b600181811c908216806200271257607f821691505b602082108114156200263957634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146200274c57600080fd5b919050565b600060a082840312156200276457600080fd5b60405160a0810181811067ffffffffffffffff821117156200279657634e487b7160e01b600052604160045260246000fd5b604052905080620027a78362002734565b8152620027b76020840162002734565b602082015260408301516040820152620027d46060840162002734565b6060820152608083015160808201525092915050565b600060a08284031215620027fd57600080fd5b6200210d838362002751565b80151581146200213f57600080fd5b8035825260208101356200282c8162002809565b8015156020840152505050565b6040810162002849828462002818565b92915050565b81516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151909116908201526080808301519082015260a0810162002849565b600060208284031215620028a857600080fd5b6040516020810181811067ffffffffffffffff82111715620028da57634e487b7160e01b600052604160045260246000fd5b604052620028e88362002734565b81529392505050565b813581526060810162002849602080840190850162002818565b6000602082840312156200291e57600080fd5b81356200210d8162002809565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080810162002849565b6000604082840312156200297857600080fd5b6040516040810181811067ffffffffffffffff82111715620029aa57634e487b7160e01b600052604160045260246000fd5b604052620029b88362002734565b8152620029c86020840162002734565b60208201529392505050565b600060608284031215620029e757600080fd5b6040516060810181811067ffffffffffffffff8211171562002a1957634e487b7160e01b600052604160045260246000fd5b60405262002a278362002734565b815262002a376020840162002734565b6020820152604083015160408201528091505092915050565b80356001600160c01b0319811681146200274c57600080fd5b813581526020808301359082015261012081016001600160c01b031962002a936040850162002a50565b166040830152606083013560608301526080830135608083015260a083013560a083015260c083013560c083015260e083013560e083015261010080840135818401525092915050565b600081600019048311821515161562002b0657634e487b7160e01b600052601160045260246000fd5b500290565b60006020828403121562002b1e57600080fd5b6200210d8262002a50565b60c08152600062002b3e60c0830189620026b4565b828103602084015262002b528189620026b4565b9050828103604084015262002b688188620026b4565b9050828103606084015262002b7e8187620026b4565b6080840195909552505060a00152949350505050565b81516001600160a01b0390811682526020808401518216908301526040808401519083015260608084015190830152608092830151169181019190915260a00190565b60006080828403121562002bea57600080fd5b6040516080810181811067ffffffffffffffff8211171562002c1c57634e487b7160e01b600052604160045260246000fd5b60405290508062002c2d8362002734565b81526020830151602082015262002c476040840162002734565b6040820152606083015160608201525092915050565b60006080828403121562002c7057600080fd5b6200210d838362002bd7565b600060a0828403121562002c8f57600080fd5b60405160a0810181811067ffffffffffffffff8211171562002cc157634e487b7160e01b600052604160045260246000fd5b60405262002ccf8362002734565b815262002cdf6020840162002734565b6020820152604083015160408201526060830151606082015262002d066080840162002734565b60808201529392505050565b6000825162002d2681846020870162002685565b9190910192915050565b60006020828403121562002d4357600080fd5b81516200210d816200280956fe60806040523480156200001157600080fd5b5060405162000f7538038062000f75833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610af580620004806000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806383197ef01161006657806383197ef01461019b57806395d89b41146101a5578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b806342966c68146101575780635600f04f1461016a57806370a082311461017257600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063392f37e91461014f575b600080fd5b6100dc6101f9565b6040516100e991906108fa565b60405180910390f35b61010561010036600461096b565b61028b565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610995565b6102a1565b60085460405160ff90911681526020016100e9565b6100dc610357565b6101056101653660046109d1565b610366565b6100dc6103dc565b6101196101803660046109ea565b6001600160a01b031660009081526020819052604090205490565b6101a36103eb565b005b6100dc610492565b6101056101bb36600461096b565b6104a1565b6101196101ce366004610a0c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020890610a3f565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a3f565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b60006102983384846104ae565b50600192915050565b60006102ae8484846105d3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103385760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034c85336103478685610a90565b6104ae565b506001949350505050565b60606007805461020890610a3f565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b6005546103d4906001600160a01b0316836107ab565b506001919050565b60606006805461020890610a3f565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b604482015260640161032f565b6005546001600160a01b0316ff5b60606004805461020890610a3f565b60006102983384846105d3565b6001600160a01b0383166105105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032f565b6001600160a01b0382166105715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032f565b6001600160a01b0382166106995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032f565b6001600160a01b038316600090815260208190526040902054818110156107115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032f565b61071b8282610a90565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610751908490610aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079d91815260200190565b60405180910390a350505050565b6001600160a01b03821661080b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032f565b6001600160a01b0382166000908152602081905260409020548181101561087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032f565b6108898282610a90565b6001600160a01b038416600090815260208190526040812091909155600280548492906108b7908490610a90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105c6565b600060208083528351808285015260005b818110156109275785810183015185820160400152820161090b565b81811115610939576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461096657600080fd5b919050565b6000806040838503121561097e57600080fd5b6109878361094f565b946020939093013593505050565b6000806000606084860312156109aa57600080fd5b6109b38461094f565b92506109c16020850161094f565b9150604084013590509250925092565b6000602082840312156109e357600080fd5b5035919050565b6000602082840312156109fc57600080fd5b610a058261094f565b9392505050565b60008060408385031215610a1f57600080fd5b610a288361094f565b9150610a366020840161094f565b90509250929050565b600181811c90821680610a5357607f821691505b60208210811415610a7457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610aa257610aa2610a7a565b500390565b60008219821115610aba57610aba610a7a565b50019056fea26469706673582212205902be546b804113f98cfb268cc3a2c5e42cbd440647fa9479535c4577c97f2664736f6c63430008090033a2646970667358221220023119cbcccadb9c9b83da94ef21c8187a7f9c3bcc90adca2bd4072ad8683d3d64736f6c63430008090033`,
  BytecodeLen: 16522,
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
