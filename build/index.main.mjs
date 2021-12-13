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
      4: [ctc0, ctc0, ctc1],
      5: [ctc0, ctc0],
      6: [ctc0, ctc0, ctc1, ctc1, ctc2],
      7: [ctc0, ctc0, ctc1, ctc1, ctc2],
      8: [ctc0, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc0, ctc1, ctc2, ctc1],
      10: [ctc0, ctc1, ctc2, ctc1],
      12: [ctc0, ctc0, ctc1, ctc2, ctc1],
      13: [ctc0, ctc1, ctc2, ctc1],
      15: [ctc0, ctc0, ctc1, ctc2, ctc1],
      16: [ctc0, ctc0, ctc1, ctc2, ctc1],
      17: [ctc0, ctc1, ctc2, ctc1],
      19: [ctc0, ctc0, ctc1, ctc2, ctc1],
      20: [ctc0, ctc1, ctc2, ctc1]
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
  
  
  const v260 = stdlib.protect(ctc2, interact.projectInfo, 'for ProjectOwner\'s interact field projectInfo');
  
  const txn1 = await (ctc.sendrecv({
    args: [v260],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:6:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v264], secs: v266, time: v265, didSend: v24, from: v263 } = txn1;
      
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
  const {data: [v264], secs: v266, time: v265, didSend: v24, from: v263 } = txn1;
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
  const {data: [v273], secs: v275, time: v274, didSend: v38, from: v272 } = txn2;
  ;
  const v277 = v273.contribute;
  if (v277) {
    const v287 = v264.fundraisingGoal;
    
    const txn3 = await (ctc.sendrecv({
      args: [v263, v272, v287],
      evt_cnt: 1,
      funcNum: 2,
      lct: v274,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v289], secs: v291, time: v290, didSend: v65, from: v288 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v293 = stdlib.addressEq(v263, v288);
        stdlib.assert(v293, {
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
    const {data: [v289], secs: v291, time: v290, didSend: v65, from: v288 } = txn3;
    ;
    const v293 = stdlib.addressEq(v263, v288);
    stdlib.assert(v293, {
      at: './index.rsh:64:6:dot',
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
    const {data: [v298], secs: v300, time: v299, didSend: v76, from: v297 } = txn4;
    ;
    const v302 = stdlib.addressEq(v272, v297);
    stdlib.assert(v302, {
      at: './index.rsh:69:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'ProjectOwner'
      });
    if (v298) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v312, time: v311, didSend: v99, from: v310 } = txn5;
      ;
      const v315 = stdlib.addressEq(v272, v310);
      stdlib.assert(v315, {
        at: './index.rsh:80:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'ProjectOwner'
        });
      stdlib.protect(ctc3, await interact.reportPayment(v289), {
        at: './index.rsh:82:45:application',
        fs: ['at ./index.rsh:82:7:application call to [unknown function] (defined at: ./index.rsh:82:20:function exp)'],
        msg: 'reportPayment',
        who: 'ProjectOwner'
        });
      
      ;
      stdlib.protect(ctc3, await interact.reportTransfer(v289), {
        at: './index.rsh:84:46:application',
        fs: ['at ./index.rsh:84:7:application call to [unknown function] (defined at: ./index.rsh:84:20:function exp)'],
        msg: 'reportTransfer',
        who: 'ProjectOwner'
        });
      
      const v326 = stdlib.protect(ctc9, await interact.getParams(), {
        at: './index.rsh:87:100:application',
        fs: ['at ./index.rsh:87:10:application call to [unknown function] (defined at: ./index.rsh:87:14:function exp)'],
        msg: 'getParams',
        who: 'ProjectOwner'
        });
      const v327 = v326.name;
      const v328 = v326.symbol;
      const v329 = v326.url;
      const v330 = v326.metadata;
      const v331 = v326.supply;
      const v332 = v326.amt;
      const v333 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:88:10:decimal', stdlib.UInt_max, 4), v332);
      const v334 = stdlib.le(v333, v331);
      stdlib.assert(v334, {
        at: './index.rsh:88:9:application',
        fs: ['at ./index.rsh:87:10:application call to [unknown function] (defined at: ./index.rsh:87:14:function exp)'],
        msg: null,
        who: 'ProjectOwner'
        });
      const v336 = stdlib.le(v333, stdlib.UInt_max);
      stdlib.assert(v336, {
        at: './index.rsh:89:9:application',
        fs: ['at ./index.rsh:87:10:application call to [unknown function] (defined at: ./index.rsh:87:14:function exp)'],
        msg: null,
        who: 'ProjectOwner'
        });
      
      const txn6 = await (ctc.sendrecv({
        args: [v263, v272, v327, v328, v329, v330, v331, v332],
        evt_cnt: 6,
        funcNum: 5,
        lct: v311,
        onlyIf: true,
        out_tys: [ctc6, ctc7, ctc8, ctc6, ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v338, v339, v340, v341, v342, v343], secs: v345, time: v344, didSend: v141, from: v337 } = txn6;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v347 = stdlib.addressEq(v263, v337);
          stdlib.assert(v347, {
            at: './index.rsh:92:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          const v348 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:93:11:decimal', stdlib.UInt_max, 4), v343);
          const v349 = stdlib.le(v348, v342);
          stdlib.assert(v349, {
            at: './index.rsh:93:10:application',
            fs: [],
            msg: null,
            who: 'ProjectOwner'
            });
          const v351 = stdlib.le(v348, stdlib.UInt_max);
          stdlib.assert(v351, {
            at: './index.rsh:94:10:application',
            fs: [],
            msg: null,
            who: 'ProjectOwner'
            });
          const v352 = stdlib.simTokenNew(sim_r, v338, v339, v340, v341, v342, undefined);
          const v353 = await txn6.getOutput('tokenNew', 'v352', ctc10, v352);
          
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc11, ctc11, ctc6, ctc7, ctc8, ctc6, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v338, v339, v340, v341, v342, v343], secs: v345, time: v344, didSend: v141, from: v337 } = txn6;
      ;
      const v347 = stdlib.addressEq(v263, v337);
      stdlib.assert(v347, {
        at: './index.rsh:92:6:dot',
        fs: [],
        msg: 'sender correct',
        who: 'ProjectOwner'
        });
      const v348 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:93:11:decimal', stdlib.UInt_max, 4), v343);
      const v349 = stdlib.le(v348, v342);
      stdlib.assert(v349, {
        at: './index.rsh:93:10:application',
        fs: [],
        msg: null,
        who: 'ProjectOwner'
        });
      const v351 = stdlib.le(v348, stdlib.UInt_max);
      stdlib.assert(v351, {
        at: './index.rsh:94:10:application',
        fs: [],
        msg: null,
        who: 'ProjectOwner'
        });
      const v352 = undefined;
      const v353 = await txn6.getOutput('tokenNew', 'v352', ctc10, v352);
      const v355 = {
        metadata: v341,
        name: v338,
        supply: v342,
        symbol: v339,
        url: v340
        };
      stdlib.protect(ctc3, await interact.reportTokenMinted(v353, v355), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:99:32:application call to "liftedInteract" (defined at: ./index.rsh:99:32:application)'],
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
      const {data: [], secs: v358, time: v357, didSend: v158, from: v356 } = txn7;
      ;
      const v360 = stdlib.addressEq(v272, v356);
      stdlib.assert(v360, {
        at: './index.rsh:102:5:dot',
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
      const {data: [], secs: v365, time: v364, didSend: v169, from: v363 } = txn8;
      ;
      const v367 = stdlib.addressEq(v272, v363);
      stdlib.assert(v367, {
        at: './index.rsh:116:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'ProjectOwner'
        });
      const v368 = stdlib.addressEq(v272, v263);
      if (v368) {
        const v369 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:108:14:decimal', stdlib.UInt_max, 2), v343);
        ;
        const txn9 = await (ctc.sendrecv({
          args: [v263, v272, v342, v353, v369],
          evt_cnt: 0,
          funcNum: 8,
          lct: v364,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn9) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v378, time: v377, didSend: v195, from: v376 } = txn9;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v380 = stdlib.addressEq(v263, v376);
            stdlib.assert(v380, {
              at: './index.rsh:119:6:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            const v381 = stdlib.addressEq(v263, v263);
            if (v381) {
              sim_r.txns.push({
                amt: v369,
                kind: 'from',
                to: v263,
                tok: v353
                });
              
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v369,
                kind: 'from',
                to: v263,
                tok: v353
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
        const {data: [], secs: v378, time: v377, didSend: v195, from: v376 } = txn9;
        ;
        const v380 = stdlib.addressEq(v263, v376);
        stdlib.assert(v380, {
          at: './index.rsh:119:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        const v381 = stdlib.addressEq(v263, v263);
        if (v381) {
          ;
          stdlib.protect(ctc3, await interact.didTransfer(true, v343), {
            at: './index.rsh:1:39:application',
            fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:109:29:application call to "liftedInteract" (defined at: ./index.rsh:109:29:application)', 'at ./index.rsh:120:14:application call to "doTransfer1" (defined at: ./index.rsh:106:33:function exp)'],
            msg: 'didTransfer',
            who: 'ProjectOwner'
            });
          
          const txn10 = await (ctc.sendrecv({
            args: [v263, v272, v342, v353, v369],
            evt_cnt: 0,
            funcNum: 9,
            lct: v377,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:122:6:dot', stdlib.UInt_max, 0), [[v369, v353]]],
            sim_p: (async (txn10) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v392, time: v391, didSend: v225, from: v390 } = txn10;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:122:6:dot', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              sim_r.txns.push({
                amt: v369,
                kind: 'to',
                tok: v353
                });
              const v397 = stdlib.addressEq(v263, v390);
              stdlib.assert(v397, {
                at: './index.rsh:122:6:dot',
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
          const {data: [], secs: v392, time: v391, didSend: v225, from: v390 } = txn10;
          ;
          ;
          const v397 = stdlib.addressEq(v263, v390);
          stdlib.assert(v397, {
            at: './index.rsh:122:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          const txn11 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 10,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v401, time: v400, didSend: v235, from: v399 } = txn11;
          ;
          ;
          const v406 = stdlib.addressEq(v272, v399);
          stdlib.assert(v406, {
            at: './index.rsh:124:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          undefined;
          undefined;
          stdlib.protect(ctc3, await interact.reportExit(), {
            at: './index.rsh:130:42:application',
            fs: ['at ./index.rsh:130:7:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
            msg: 'reportExit',
            who: 'ProjectOwner'
            });
          
          return;
          
          
          
          
          }
        else {
          ;
          stdlib.protect(ctc3, await interact.didTransfer(true, v343), {
            at: './index.rsh:1:39:application',
            fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:112:27:application call to "liftedInteract" (defined at: ./index.rsh:112:27:application)', 'at ./index.rsh:120:14:application call to "doTransfer1" (defined at: ./index.rsh:106:33:function exp)'],
            msg: 'didTransfer',
            who: 'ProjectOwner'
            });
          
          const txn10 = await (ctc.sendrecv({
            args: [v263, v272, v342, v353, v369],
            evt_cnt: 0,
            funcNum: 11,
            lct: v377,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:122:6:dot', stdlib.UInt_max, 0), [[v369, v353]]],
            sim_p: (async (txn10) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v435, time: v434, didSend: v225, from: v433 } = txn10;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:122:6:dot', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              sim_r.txns.push({
                amt: v369,
                kind: 'to',
                tok: v353
                });
              const v440 = stdlib.addressEq(v263, v433);
              stdlib.assert(v440, {
                at: './index.rsh:122:6:dot',
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
          const {data: [], secs: v435, time: v434, didSend: v225, from: v433 } = txn10;
          ;
          ;
          const v440 = stdlib.addressEq(v263, v433);
          stdlib.assert(v440, {
            at: './index.rsh:122:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          const txn11 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 12,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v444, time: v443, didSend: v235, from: v442 } = txn11;
          ;
          ;
          const v449 = stdlib.addressEq(v272, v442);
          stdlib.assert(v449, {
            at: './index.rsh:124:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          undefined;
          undefined;
          stdlib.protect(ctc3, await interact.reportExit(), {
            at: './index.rsh:130:42:application',
            fs: ['at ./index.rsh:130:7:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
            msg: 'reportExit',
            who: 'ProjectOwner'
            });
          
          return;
          
          
          
          
          }
        
        }
      else {
        const v468 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:111:12:decimal', stdlib.UInt_max, 2), v343);
        ;
        const txn9 = await (ctc.sendrecv({
          args: [v263, v272, v342, v353, v468],
          evt_cnt: 0,
          funcNum: 13,
          lct: v364,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn9) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v477, time: v476, didSend: v195, from: v475 } = txn9;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v479 = stdlib.addressEq(v263, v475);
            stdlib.assert(v479, {
              at: './index.rsh:119:6:dot',
              fs: [],
              msg: 'sender correct',
              who: 'ProjectOwner'
              });
            const v480 = stdlib.addressEq(v263, v263);
            if (v480) {
              sim_r.txns.push({
                amt: v468,
                kind: 'from',
                to: v263,
                tok: v353
                });
              
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v468,
                kind: 'from',
                to: v263,
                tok: v353
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
        const {data: [], secs: v477, time: v476, didSend: v195, from: v475 } = txn9;
        ;
        const v479 = stdlib.addressEq(v263, v475);
        stdlib.assert(v479, {
          at: './index.rsh:119:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'ProjectOwner'
          });
        const v480 = stdlib.addressEq(v263, v263);
        if (v480) {
          ;
          stdlib.protect(ctc3, await interact.didTransfer(true, v343), {
            at: './index.rsh:1:39:application',
            fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:109:29:application call to "liftedInteract" (defined at: ./index.rsh:109:29:application)', 'at ./index.rsh:120:14:application call to "doTransfer1" (defined at: ./index.rsh:106:33:function exp)'],
            msg: 'didTransfer',
            who: 'ProjectOwner'
            });
          
          const txn10 = await (ctc.sendrecv({
            args: [v263, v272, v342, v353, v468],
            evt_cnt: 0,
            funcNum: 14,
            lct: v476,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:122:6:dot', stdlib.UInt_max, 0), [[v468, v353]]],
            sim_p: (async (txn10) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v491, time: v490, didSend: v225, from: v489 } = txn10;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:122:6:dot', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              sim_r.txns.push({
                amt: v468,
                kind: 'to',
                tok: v353
                });
              const v496 = stdlib.addressEq(v263, v489);
              stdlib.assert(v496, {
                at: './index.rsh:122:6:dot',
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
          const {data: [], secs: v491, time: v490, didSend: v225, from: v489 } = txn10;
          ;
          ;
          const v496 = stdlib.addressEq(v263, v489);
          stdlib.assert(v496, {
            at: './index.rsh:122:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          const txn11 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 15,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v500, time: v499, didSend: v235, from: v498 } = txn11;
          ;
          ;
          const v505 = stdlib.addressEq(v272, v498);
          stdlib.assert(v505, {
            at: './index.rsh:124:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          undefined;
          undefined;
          stdlib.protect(ctc3, await interact.reportExit(), {
            at: './index.rsh:130:42:application',
            fs: ['at ./index.rsh:130:7:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
            msg: 'reportExit',
            who: 'ProjectOwner'
            });
          
          return;
          
          
          
          
          }
        else {
          ;
          stdlib.protect(ctc3, await interact.didTransfer(true, v343), {
            at: './index.rsh:1:39:application',
            fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:112:27:application call to "liftedInteract" (defined at: ./index.rsh:112:27:application)', 'at ./index.rsh:120:14:application call to "doTransfer1" (defined at: ./index.rsh:106:33:function exp)'],
            msg: 'didTransfer',
            who: 'ProjectOwner'
            });
          
          const txn10 = await (ctc.sendrecv({
            args: [v263, v272, v342, v353, v468],
            evt_cnt: 0,
            funcNum: 16,
            lct: v476,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:122:6:dot', stdlib.UInt_max, 0), [[v468, v353]]],
            sim_p: (async (txn10) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v534, time: v533, didSend: v225, from: v532 } = txn10;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:122:6:dot', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              sim_r.txns.push({
                amt: v468,
                kind: 'to',
                tok: v353
                });
              const v539 = stdlib.addressEq(v263, v532);
              stdlib.assert(v539, {
                at: './index.rsh:122:6:dot',
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
          const {data: [], secs: v534, time: v533, didSend: v225, from: v532 } = txn10;
          ;
          ;
          const v539 = stdlib.addressEq(v263, v532);
          stdlib.assert(v539, {
            at: './index.rsh:122:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          const txn11 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 17,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v543, time: v542, didSend: v235, from: v541 } = txn11;
          ;
          ;
          const v548 = stdlib.addressEq(v272, v541);
          stdlib.assert(v548, {
            at: './index.rsh:124:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'ProjectOwner'
            });
          undefined;
          undefined;
          stdlib.protect(ctc3, await interact.reportExit(), {
            at: './index.rsh:130:42:application',
            fs: ['at ./index.rsh:130:7:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
            msg: 'reportExit',
            who: 'ProjectOwner'
            });
          
          return;
          
          
          
          
          }
        
        }
      
      
      
      
      
      
      
      }
    else {
      stdlib.protect(ctc3, await interact.reportCancellation(), {
        at: './index.rsh:72:52:application',
        fs: ['at ./index.rsh:72:9:application call to [unknown function] (defined at: ./index.rsh:72:22:function exp)'],
        msg: 'reportCancellation',
        who: 'ProjectOwner'
        });
      
      stdlib.protect(ctc3, await interact.reportExit(), {
        at: './index.rsh:73:44:application',
        fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:22:function exp)'],
        msg: 'reportExit',
        who: 'ProjectOwner'
        });
      
      return;
      }
    
    
    
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
  const {data: [v264], secs: v266, time: v265, didSend: v24, from: v263 } = txn1;
  ;
  const v271 = stdlib.protect(ctc4, await interact.sponsor(v264), {
    at: './index.rsh:50:61:application',
    fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:13:function exp)'],
    msg: 'sponsor',
    who: 'Sponsor'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v263, v271],
    evt_cnt: 1,
    funcNum: 1,
    lct: v265,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v273], secs: v275, time: v274, didSend: v38, from: v272 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v277 = v273.contribute;
      if (v277) {
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
  const {data: [v273], secs: v275, time: v274, didSend: v38, from: v272 } = txn2;
  ;
  const v277 = v273.contribute;
  if (v277) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc0],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v289], secs: v291, time: v290, didSend: v65, from: v288 } = txn3;
    ;
    const v293 = stdlib.addressEq(v263, v288);
    stdlib.assert(v293, {
      at: './index.rsh:64:6:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    const v296 = stdlib.protect(ctc3, await interact.confirmAgreeToSponsor(v289), {
      at: './index.rsh:68:76:application',
      fs: ['at ./index.rsh:68:9:application call to [unknown function] (defined at: ./index.rsh:68:13:function exp)'],
      msg: 'confirmAgreeToSponsor',
      who: 'Sponsor'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v263, v272, v289, v296],
      evt_cnt: 1,
      funcNum: 3,
      lct: v290,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v298], secs: v300, time: v299, didSend: v76, from: v297 } = txn4;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v302 = stdlib.addressEq(v272, v297);
        stdlib.assert(v302, {
          at: './index.rsh:69:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        if (v298) {
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
    const {data: [v298], secs: v300, time: v299, didSend: v76, from: v297 } = txn4;
    ;
    const v302 = stdlib.addressEq(v272, v297);
    stdlib.assert(v302, {
      at: './index.rsh:69:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    if (v298) {
      const txn5 = await (ctc.sendrecv({
        args: [v263, v272, v289],
        evt_cnt: 0,
        funcNum: 4,
        lct: v299,
        onlyIf: true,
        out_tys: [],
        pay: [v289, []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v312, time: v311, didSend: v99, from: v310 } = txn5;
          
          sim_r.txns.push({
            amt: v289,
            kind: 'to',
            tok: undefined
            });
          const v315 = stdlib.addressEq(v272, v310);
          stdlib.assert(v315, {
            at: './index.rsh:80:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          
          sim_r.txns.push({
            amt: v289,
            kind: 'from',
            to: v263,
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
      const {data: [], secs: v312, time: v311, didSend: v99, from: v310 } = txn5;
      ;
      const v315 = stdlib.addressEq(v272, v310);
      stdlib.assert(v315, {
        at: './index.rsh:80:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sponsor'
        });
      stdlib.protect(ctc5, await interact.reportPayment(v289), {
        at: './index.rsh:82:45:application',
        fs: ['at ./index.rsh:82:7:application call to [unknown function] (defined at: ./index.rsh:82:20:function exp)'],
        msg: 'reportPayment',
        who: 'Sponsor'
        });
      
      ;
      stdlib.protect(ctc5, await interact.reportTransfer(v289), {
        at: './index.rsh:84:46:application',
        fs: ['at ./index.rsh:84:7:application call to [unknown function] (defined at: ./index.rsh:84:20:function exp)'],
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
      const {data: [v338, v339, v340, v341, v342, v343], secs: v345, time: v344, didSend: v141, from: v337 } = txn6;
      ;
      const v347 = stdlib.addressEq(v263, v337);
      stdlib.assert(v347, {
        at: './index.rsh:92:6:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sponsor'
        });
      const v348 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:93:11:decimal', stdlib.UInt_max, 4), v343);
      const v349 = stdlib.le(v348, v342);
      stdlib.assert(v349, {
        at: './index.rsh:93:10:application',
        fs: [],
        msg: null,
        who: 'Sponsor'
        });
      const v351 = stdlib.le(v348, stdlib.UInt_max);
      stdlib.assert(v351, {
        at: './index.rsh:94:10:application',
        fs: [],
        msg: null,
        who: 'Sponsor'
        });
      const v352 = undefined;
      const v353 = await txn6.getOutput('tokenNew', 'v352', ctc9, v352);
      const txn7 = await (ctc.sendrecv({
        args: [v263, v272, v342, v343, v353],
        evt_cnt: 0,
        funcNum: 6,
        lct: v344,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v358, time: v357, didSend: v158, from: v356 } = txn7;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v360 = stdlib.addressEq(v272, v356);
          stdlib.assert(v360, {
            at: './index.rsh:102:5:dot',
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
      const {data: [], secs: v358, time: v357, didSend: v158, from: v356 } = txn7;
      ;
      const v360 = stdlib.addressEq(v272, v356);
      stdlib.assert(v360, {
        at: './index.rsh:102:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sponsor'
        });
      const v362 = {
        metadata: v341,
        name: v338,
        supply: v342,
        symbol: v339,
        url: v340
        };
      stdlib.protect(ctc5, await interact.reportTokenMinted(v353, v362), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:103:31:application call to "liftedInteract" (defined at: ./index.rsh:103:31:application)'],
        msg: 'reportTokenMinted',
        who: 'Sponsor'
        });
      
      const txn8 = await (ctc.sendrecv({
        args: [v263, v272, v342, v343, v353],
        evt_cnt: 0,
        funcNum: 7,
        lct: v357,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v365, time: v364, didSend: v169, from: v363 } = txn8;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v367 = stdlib.addressEq(v272, v363);
          stdlib.assert(v367, {
            at: './index.rsh:116:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          const v368 = stdlib.addressEq(v272, v263);
          if (v368) {
            const v369 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:108:14:decimal', stdlib.UInt_max, 2), v343);
            sim_r.txns.push({
              amt: v369,
              kind: 'from',
              to: v272,
              tok: v353
              });
            
            sim_r.isHalt = false;
            }
          else {
            const v468 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:111:12:decimal', stdlib.UInt_max, 2), v343);
            sim_r.txns.push({
              amt: v468,
              kind: 'from',
              to: v272,
              tok: v353
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
      const {data: [], secs: v365, time: v364, didSend: v169, from: v363 } = txn8;
      ;
      const v367 = stdlib.addressEq(v272, v363);
      stdlib.assert(v367, {
        at: './index.rsh:116:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sponsor'
        });
      const v368 = stdlib.addressEq(v272, v263);
      if (v368) {
        const v369 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:108:14:decimal', stdlib.UInt_max, 2), v343);
        ;
        stdlib.protect(ctc5, await interact.didTransfer(true, v343), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:109:29:application call to "liftedInteract" (defined at: ./index.rsh:109:29:application)', 'at ./index.rsh:117:14:application call to "doTransfer1" (defined at: ./index.rsh:106:33:function exp)'],
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
        const {data: [], secs: v378, time: v377, didSend: v195, from: v376 } = txn9;
        ;
        const v380 = stdlib.addressEq(v263, v376);
        stdlib.assert(v380, {
          at: './index.rsh:119:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        const v381 = stdlib.addressEq(v263, v263);
        if (v381) {
          ;
          const txn10 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v392, time: v391, didSend: v225, from: v390 } = txn10;
          ;
          ;
          const v397 = stdlib.addressEq(v263, v390);
          stdlib.assert(v397, {
            at: './index.rsh:122:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          const txn11 = await (ctc.sendrecv({
            args: [v272, v342, v353, v369],
            evt_cnt: 0,
            funcNum: 10,
            lct: v391,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:124:5:dot', stdlib.UInt_max, 0), [[v369, v353]]],
            sim_p: (async (txn11) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v401, time: v400, didSend: v235, from: v399 } = txn11;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:124:5:dot', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              sim_r.txns.push({
                amt: v369,
                kind: 'to',
                tok: v353
                });
              const v406 = stdlib.addressEq(v272, v399);
              stdlib.assert(v406, {
                at: './index.rsh:124:5:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              stdlib.simTokenBurn(sim_r, v353, v342);
              stdlib.simTokenDestroy(sim_r, v353);
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
          const {data: [], secs: v401, time: v400, didSend: v235, from: v399 } = txn11;
          ;
          ;
          const v406 = stdlib.addressEq(v272, v399);
          stdlib.assert(v406, {
            at: './index.rsh:124:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          undefined;
          undefined;
          stdlib.protect(ctc5, await interact.reportExit(), {
            at: './index.rsh:130:42:application',
            fs: ['at ./index.rsh:130:7:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
            msg: 'reportExit',
            who: 'Sponsor'
            });
          
          return;
          
          
          
          
          }
        else {
          ;
          const txn10 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 11,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v435, time: v434, didSend: v225, from: v433 } = txn10;
          ;
          ;
          const v440 = stdlib.addressEq(v263, v433);
          stdlib.assert(v440, {
            at: './index.rsh:122:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          const txn11 = await (ctc.sendrecv({
            args: [v272, v342, v353, v369],
            evt_cnt: 0,
            funcNum: 12,
            lct: v434,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:124:5:dot', stdlib.UInt_max, 0), [[v369, v353]]],
            sim_p: (async (txn11) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v444, time: v443, didSend: v235, from: v442 } = txn11;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:124:5:dot', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              sim_r.txns.push({
                amt: v369,
                kind: 'to',
                tok: v353
                });
              const v449 = stdlib.addressEq(v272, v442);
              stdlib.assert(v449, {
                at: './index.rsh:124:5:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              stdlib.simTokenBurn(sim_r, v353, v342);
              stdlib.simTokenDestroy(sim_r, v353);
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
          const {data: [], secs: v444, time: v443, didSend: v235, from: v442 } = txn11;
          ;
          ;
          const v449 = stdlib.addressEq(v272, v442);
          stdlib.assert(v449, {
            at: './index.rsh:124:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          undefined;
          undefined;
          stdlib.protect(ctc5, await interact.reportExit(), {
            at: './index.rsh:130:42:application',
            fs: ['at ./index.rsh:130:7:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
            msg: 'reportExit',
            who: 'Sponsor'
            });
          
          return;
          
          
          
          
          }
        
        }
      else {
        const v468 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:111:12:decimal', stdlib.UInt_max, 2), v343);
        ;
        stdlib.protect(ctc5, await interact.didTransfer(true, v343), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:112:27:application call to "liftedInteract" (defined at: ./index.rsh:112:27:application)', 'at ./index.rsh:117:14:application call to "doTransfer1" (defined at: ./index.rsh:106:33:function exp)'],
          msg: 'didTransfer',
          who: 'Sponsor'
          });
        
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 13,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v477, time: v476, didSend: v195, from: v475 } = txn9;
        ;
        const v479 = stdlib.addressEq(v263, v475);
        stdlib.assert(v479, {
          at: './index.rsh:119:6:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        const v480 = stdlib.addressEq(v263, v263);
        if (v480) {
          ;
          const txn10 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 14,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v491, time: v490, didSend: v225, from: v489 } = txn10;
          ;
          ;
          const v496 = stdlib.addressEq(v263, v489);
          stdlib.assert(v496, {
            at: './index.rsh:122:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          const txn11 = await (ctc.sendrecv({
            args: [v272, v342, v353, v468],
            evt_cnt: 0,
            funcNum: 15,
            lct: v490,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:124:5:dot', stdlib.UInt_max, 0), [[v468, v353]]],
            sim_p: (async (txn11) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v500, time: v499, didSend: v235, from: v498 } = txn11;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:124:5:dot', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              sim_r.txns.push({
                amt: v468,
                kind: 'to',
                tok: v353
                });
              const v505 = stdlib.addressEq(v272, v498);
              stdlib.assert(v505, {
                at: './index.rsh:124:5:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              stdlib.simTokenBurn(sim_r, v353, v342);
              stdlib.simTokenDestroy(sim_r, v353);
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
          const {data: [], secs: v500, time: v499, didSend: v235, from: v498 } = txn11;
          ;
          ;
          const v505 = stdlib.addressEq(v272, v498);
          stdlib.assert(v505, {
            at: './index.rsh:124:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          undefined;
          undefined;
          stdlib.protect(ctc5, await interact.reportExit(), {
            at: './index.rsh:130:42:application',
            fs: ['at ./index.rsh:130:7:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
            msg: 'reportExit',
            who: 'Sponsor'
            });
          
          return;
          
          
          
          
          }
        else {
          ;
          const txn10 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 16,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v534, time: v533, didSend: v225, from: v532 } = txn10;
          ;
          ;
          const v539 = stdlib.addressEq(v263, v532);
          stdlib.assert(v539, {
            at: './index.rsh:122:6:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          const txn11 = await (ctc.sendrecv({
            args: [v272, v342, v353, v468],
            evt_cnt: 0,
            funcNum: 17,
            lct: v533,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:124:5:dot', stdlib.UInt_max, 0), [[v468, v353]]],
            sim_p: (async (txn11) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v543, time: v542, didSend: v235, from: v541 } = txn11;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:124:5:dot', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              sim_r.txns.push({
                amt: v468,
                kind: 'to',
                tok: v353
                });
              const v548 = stdlib.addressEq(v272, v541);
              stdlib.assert(v548, {
                at: './index.rsh:124:5:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sponsor'
                });
              stdlib.simTokenBurn(sim_r, v353, v342);
              stdlib.simTokenDestroy(sim_r, v353);
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
          const {data: [], secs: v543, time: v542, didSend: v235, from: v541 } = txn11;
          ;
          ;
          const v548 = stdlib.addressEq(v272, v541);
          stdlib.assert(v548, {
            at: './index.rsh:124:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sponsor'
            });
          undefined;
          undefined;
          stdlib.protect(ctc5, await interact.reportExit(), {
            at: './index.rsh:130:42:application',
            fs: ['at ./index.rsh:130:7:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
            msg: 'reportExit',
            who: 'Sponsor'
            });
          
          return;
          
          
          
          
          }
        
        }
      
      
      
      
      
      
      
      }
    else {
      stdlib.protect(ctc5, await interact.reportCancellation(), {
        at: './index.rsh:72:52:application',
        fs: ['at ./index.rsh:72:9:application call to [unknown function] (defined at: ./index.rsh:72:22:function exp)'],
        msg: 'reportCancellation',
        who: 'Sponsor'
        });
      
      stdlib.protect(ctc5, await interact.reportExit(), {
        at: './index.rsh:73:44:application',
        fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:22:function exp)'],
        msg: 'reportExit',
        who: 'Sponsor'
        });
      
      return;
      }
    
    
    
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
int 1
==
assert
dup
btoi
store 252
pop
// "CheckPay"
// "./index.rsh:69:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:69:5:dot"
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
// "./index.rsh:80:5:dot"
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
// "./index.rsh:80:5:dot"
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
// "./index.rsh:92:6:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:92:6:dot"
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
// "./index.rsh:93:10:application"
// "[]"
load 247
load 249
<=
assert
// Nothing
// "./index.rsh:94:10:application"
// "[]"
load 247
int 18446744073709551615
<=
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
store 246
byte base64(AAAAAAAAAWA=)
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
// "./index.rsh:102:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:102:5:dot"
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
// "./index.rsh:116:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:116:5:dot"
// "[]"
load 254
txn Sender
==
assert
load 254
load 255
==
bz l16_ifF
int 2
load 252
*
dup
store 250
dup
bz l17_makeTxnK
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
l17_makeTxnK:
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
int 2
load 252
*
dup
store 250
dup
bz l18_makeTxnK
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
l18_makeTxnK:
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
int 15
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
bz l19_afterHandler8
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
// "./index.rsh:119:6:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:119:6:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
dup
==
bz l20_ifF
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
load 251
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
l20_ifF:
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
load 251
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
l19_afterHandler8:
// Handler 9
dup
int 9
==
bz l23_afterHandler9
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
// "./index.rsh:122:6:dot"
// "[]"
// "CheckPay"
// "./index.rsh:122:6:dot"
// "[]"
load 251
dup
bz l24_checkTxnK
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
l24_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:122:6:dot"
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
int 10
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l23_afterHandler9:
// Handler 10
dup
int 10
==
bz l25_afterHandler10
pop
// check step
int 10
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
// "./index.rsh:124:5:dot"
// "[]"
// "CheckPay"
// "./index.rsh:124:5:dot"
// "[]"
load 252
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
l26_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:124:5:dot"
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
l27_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l25_afterHandler10:
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
// "./index.rsh:122:6:dot"
// "[]"
// "CheckPay"
// "./index.rsh:122:6:dot"
// "[]"
load 251
dup
bz l29_checkTxnK
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
l29_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:122:6:dot"
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
int 13
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l28_afterHandler11:
// Handler 12
dup
int 12
==
bz l30_afterHandler12
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
// "./index.rsh:124:5:dot"
// "[]"
// "CheckPay"
// "./index.rsh:124:5:dot"
// "[]"
load 252
dup
bz l31_checkTxnK
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
l31_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:124:5:dot"
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
l32_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l30_afterHandler12:
// Handler 13
dup
int 13
==
bz l33_afterHandler13
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
// "./index.rsh:119:6:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:119:6:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
dup
==
bz l34_ifF
load 251
dup
bz l35_makeTxnK
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
l35_makeTxnK:
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
int 16
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l34_ifF:
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
load 251
itob
concat
int 1
bzero
dig 1
extract 0 88
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
l33_afterHandler13:
// Handler 14
dup
int 14
==
bz l37_afterHandler14
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
// "./index.rsh:122:6:dot"
// "[]"
// "CheckPay"
// "./index.rsh:122:6:dot"
// "[]"
load 251
dup
bz l38_checkTxnK
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
l38_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:122:6:dot"
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
int 17
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l37_afterHandler14:
// Handler 15
dup
int 15
==
bz l39_afterHandler15
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
// "./index.rsh:124:5:dot"
// "[]"
// "CheckPay"
// "./index.rsh:124:5:dot"
// "[]"
load 252
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
l40_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:124:5:dot"
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
l41_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l39_afterHandler15:
// Handler 16
dup
int 16
==
bz l42_afterHandler16
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
// "./index.rsh:122:6:dot"
// "[]"
// "CheckPay"
// "./index.rsh:122:6:dot"
// "[]"
load 251
dup
bz l43_checkTxnK
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
l43_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:122:6:dot"
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
int 20
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l42_afterHandler16:
// Handler 17
dup
int 17
==
bz l44_afterHandler17
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
// "./index.rsh:124:5:dot"
// "[]"
// "CheckPay"
// "./index.rsh:124:5:dot"
// "[]"
load 252
dup
bz l45_checkTxnK
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
l45_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:124:5:dot"
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
l46_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l44_afterHandler17:
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
                "name": "v264",
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
                "name": "v264",
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
                "name": "v273",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v289",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v298",
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
                "name": "v338",
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
                "name": "v339",
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
                "name": "v340",
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
                "name": "v341",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v342",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v343",
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
        "name": "v352",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v352",
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
                "name": "v273",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v289",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v298",
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
                "name": "v338",
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
                "name": "v339",
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
                "name": "v340",
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
                "name": "v341",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v342",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v343",
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
  Bytecode: `0x6080604052604051620042973803806200429783398101604081905262000026916200028d565b6000805543600355604080518251815260208084015151805182840152908101515163ffffffff1990811683850152908301515116606082015290517f8302b0f24a2ffe1d985578653bc53343adcf2fb4aec8ed088c306c86a40df3fc9181900360800190a16200009a34156007620000eb565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000e292919062000115565b5050506200037f565b81620001115760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001239062000342565b90600052602060002090601f01602090048101928262000147576000855562000192565b82601f106200016257805160ff191683800117855562000192565b8280016001018555821562000192579182015b828111156200019257825182559160200191906001019062000175565b50620001a0929150620001a4565b5090565b5b80821115620001a05760008155600101620001a5565b604051602081016001600160401b0381118282101715620001ec57634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b0381118282101715620001ec57634e487b7160e01b600052604160045260246000fd5b6000602082840312156200023657600080fd5b604051602081016001600160401b03811182821017156200026757634e487b7160e01b600052604160045260246000fd5b6040528251909150819063ffffffff19811681146200028557600080fd5b905292915050565b60008183036080811215620002a157600080fd5b604080519081016001600160401b0381118282101715620002d257634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ec57600080fd5b620002f6620001bb565b915062000302620001f2565b6020850151815262000318866040870162000223565b60208201526200032c866060870162000223565b6040820152825260208101919091529392505050565b600181811c908216806200035757607f821691505b602082108114156200037957634e487b7160e01b600052602260045260246000fd5b50919050565b613f08806200038f6000396000f3fe6080604052600436106200012f5760003560e01c8063a7661d5411620000a7578063e00acef11162000069578063e00acef114620002b1578063e2186a0814620002c8578063e533a29d14620002df578063eead410d14620002f6578063f19b4352146200030d57005b8063a7661d54146200022d578063ab53f2c61462000244578063bf2c5b24146200026c578063c79800371462000283578063de736998146200029a57005b80635471c5a811620000f15780635471c5a814620001ba5780638323075714620001d15780638b9fadc814620001e85780639f25181014620001ff578063a035b2e0146200021657005b806311faee8c14620001395780631e93b0f114620001505780633711704a14620001755780633a31ddbd146200018c57806345f7039614620001a357005b366200013757005b005b620001376200014a36600462002825565b62000324565b3480156200015d57600080fd5b506003545b6040519081526020015b60405180910390f35b620001376200018636600462002844565b620004c3565b620001376200019d36600462002825565b6200067a565b62000137620001b436600462002825565b620007da565b62000137620001cb36600462002825565b62000987565b348015620001de57600080fd5b5060015462000162565b62000137620001f936600462002825565b62000b41565b620001376200021036600462002825565b62000cf9565b620001376200022736600462002825565b62000e59565b620001376200023e36600462002825565b62001011565b3480156200025157600080fd5b506200025c620011ee565b6040516200016c929190620028b4565b620001376200027d36600462002825565b62001293565b620001376200029436600462002825565b62001560565b62000137620002ab36600462002825565b62001717565b62000137620002c236600462002825565b620018cf565b62000137620002d936600462002825565b62001a2f565b62000137620002f036600462002825565b62001bf2565b6200013762000307366004620028cf565b62001dac565b620001376200031e36600462002825565b620020ea565b62000336600d60005414603b620022a2565b62000353813515806200034b57506001548235145b603c620022a2565b6000808055600280546200036790620028e3565b80601f01602080910402602001604051908101604052809291908181526020018280546200039590620028e3565b8015620003e65780601f10620003ba57610100808354040283529160200191620003e6565b820191906000526020600020905b815481529060010190602001808311620003c857829003601f168201915b5050505050806020019051810190620004009190620029bd565b90507f1c3c1eb1a49b49281bc33392d8e3bef6fbe90ccd8bc1d2451934aa1b13794fbf8260405162000433919062002a0c565b60405180910390a16200044934156038620022a2565b6200046a620004623383604001518460600151620022c9565b6039620022a2565b805162000484906001600160a01b03163314603a620022a2565b6200049881604001518260200151620022e3565b620004a78160400151620022f9565b60008080556001819055620004bf90600290620026b1565b5050565b620004d56001600054146009620022a2565b620004f281351580620004ea57506001548235145b600a620022a2565b6000808055600280546200050690620028e3565b80601f01602080910402602001604051908101604052809291908181526020018280546200053490620028e3565b8015620005855780601f10620005595761010080835404028352916020019162000585565b820191906000526020600020905b8154815290600101906020018083116200056757829003601f168201915b50505050508060200190518101906200059f919062002a22565b90507f9ea6e8c055e86924b5db5f9635a4bdc97514ead0c112e90b6cc9dedc308452d482604051620005d2919062002a7e565b60405180910390a1620005e834156008620022a2565b620005fa606083016040840162002a98565b15620004a757604080518082019091526000808252602082015281516001600160a01b0390811680835233602080850191825260026000554360015560408051918201939093529051909216908201526060015b6040516020818303038152906040526002908051906020019062000674929190620026f0565b50505050565b6200068c6011600054146049620022a2565b620006a981351580620006a157506001548235145b604a620022a2565b600080805560028054620006bd90620028e3565b80601f0160208091040260200160405190810160405280929190818152602001828054620006eb90620028e3565b80156200073c5780601f1062000710576101008083540402835291602001916200073c565b820191906000526020600020905b8154815290600101906020018083116200071e57829003601f168201915b5050505050806020019051810190620007569190620029bd565b90507f96969340a6658e1e09f3b3af80819f55bac87c191bbf60c7b83615ec9e37fc068260405162000789919062002a0c565b60405180910390a16200079f34156046620022a2565b620007c0620007b83383604001518460600151620022c9565b6047620022a2565b805162000484906001600160a01b031633146048620022a2565b620007ec600260005414600d620022a2565b62000809813515806200080157506001548235145b600e620022a2565b6000808055600280546200081d90620028e3565b80601f01602080910402602001604051908101604052809291908181526020018280546200084b90620028e3565b80156200089c5780601f1062000870576101008083540402835291602001916200089c565b820191906000526020600020905b8154815290600101906020018083116200087e57829003601f168201915b5050505050806020019051810190620008b6919062002ab8565b6040805184358152602080860135908201529192507fa8de7fa57e96b1b344028051973cc20a5275cd64ccacf1c4ebc1e38bc2945cb6910160405180910390a1620009043415600b620022a2565b80516200091e906001600160a01b03163314600c620022a2565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528a85013583526003909555436001558751938401949094529051909216948101949094525190830152906080016200064e565b62000999600f60005414603f620022a2565b620009b681351580620009ae57506001548235145b6040620022a2565b600080805560028054620009ca90620028e3565b80601f0160208091040260200160405190810160405280929190818152602001828054620009f890620028e3565b801562000a495780601f1062000a1d5761010080835404028352916020019162000a49565b820191906000526020600020905b81548152906001019060200180831162000a2b57829003601f168201915b505050505080602001905181019062000a63919062002bc0565b90507f07e6cc8e2fc82a9375e0bae2c8fb95cb33ae4f7121cc887b7bcd23b343d8ec058260405162000a96919062002a0c565b60405180910390a162000aac3415603d620022a2565b805162000ac6906001600160a01b03163314603e620022a2565b62000adf81606001518260000151836080015162002311565b62000ae96200277f565b81516001600160a01b03908116825260208084015182168184015260408085015181850152606080860151909316928401929092526080808501519084015260106000554360015590516200064e9183910162002bdf565b62000b53600c600054146036620022a2565b62000b708135158062000b6857506001548235145b6037620022a2565b60008080556002805462000b8490620028e3565b80601f016020809104026020016040519081016040528092919081815260200182805462000bb290620028e3565b801562000c035780601f1062000bd75761010080835404028352916020019162000c03565b820191906000526020600020905b81548152906001019060200180831162000be557829003601f168201915b505050505080602001905181019062000c1d919062002bc0565b90507f5fe72957f5855f25860ec325face1305075da64ba42ea3b56918fbe46e26b4048260405162000c50919062002a0c565b60405180910390a162000c6634156033620022a2565b62000c8762000c7f3383606001518460800151620022c9565b6034620022a2565b805162000ca1906001600160a01b031633146035620022a2565b62000cab620027ad565b6020808301516001600160a01b0390811683526040808501518484015260608086015190921681850152608085015191840191909152600d60005543600155516200064e9183910162002c25565b62000d0b6014600054146053620022a2565b62000d288135158062000d2057506001548235145b6054620022a2565b60008080556002805462000d3c90620028e3565b80601f016020809104026020016040519081016040528092919081815260200182805462000d6a90620028e3565b801562000dbb5780601f1062000d8f5761010080835404028352916020019162000dbb565b820191906000526020600020905b81548152906001019060200180831162000d9d57829003601f168201915b505050505080602001905181019062000dd59190620029bd565b90507fa2bfcfc2bf018598bf89847a2aa2dc48cb8eec269fecfd468afbe606d78101bd8260405162000e08919062002a0c565b60405180910390a162000e1e34156050620022a2565b62000e3f62000e373383604001518460600151620022c9565b6051620022a2565b805162000484906001600160a01b031633146052620022a2565b62000e6b6010600054146044620022a2565b62000e888135158062000e8057506001548235145b6045620022a2565b60008080556002805462000e9c90620028e3565b80601f016020809104026020016040519081016040528092919081815260200182805462000eca90620028e3565b801562000f1b5780601f1062000eef5761010080835404028352916020019162000f1b565b820191906000526020600020905b81548152906001019060200180831162000efd57829003601f168201915b505050505080602001905181019062000f35919062002bc0565b90507fe0a2e1387b485a156cf7c3e3303f6334b1f0a305dca44d49ca15f2f74d8b4bda8260405162000f68919062002a0c565b60405180910390a162000f7e34156041620022a2565b62000f9f62000f973383606001518460800151620022c9565b6042620022a2565b805162000fb9906001600160a01b031633146043620022a2565b62000fc3620027ad565b6020808301516001600160a01b0390811683526040808501518484015260608086015190921681850152608085015191840191909152601160005543600155516200064e9183910162002c25565b620010236004600054146015620022a2565b62001040813515806200103857506001548235145b6016620022a2565b6000808055600280546200105490620028e3565b80601f01602080910402602001604051908101604052809291908181526020018280546200108290620028e3565b8015620010d35780601f10620010a757610100808354040283529160200191620010d3565b820191906000526020600020905b815481529060010190602001808311620010b557829003601f168201915b5050505050806020019051810190620010ed919062002c5f565b90507fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d18260405162001120919062002a0c565b60405180910390a16200113b816040015134146013620022a2565b602081015162001158906001600160a01b031633146014620022a2565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562001196573d6000803e3d6000fd5b50604080518082019091526000808252602082015281516001600160a01b039081168083526020808501518316818501908152600560005543600155604080519283019390935251909216908201526060016200064e565b6000606060005460028080546200120590620028e3565b80601f01602080910402602001604051908101604052809291908181526020018280546200123390620028e3565b8015620012845780601f10620012585761010080835404028352916020019162001284565b820191906000526020600020905b8154815290600101906020018083116200126657829003601f168201915b50505050509050915091509091565b620012a56007600054146023620022a2565b620012c281351580620012ba57506001548235145b6024620022a2565b600080805560028054620012d690620028e3565b80601f01602080910402602001604051908101604052809291908181526020018280546200130490620028e3565b8015620013555780601f10620013295761010080835404028352916020019162001355565b820191906000526020600020905b8154815290600101906020018083116200133757829003601f168201915b50505050508060200190518101906200136f919062002cdb565b90506200138f604051806040016040528060008152602001600081525090565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e083604051620013c0919062002a0c565b60405180910390a1620013d634156021620022a2565b6020820151620013f3906001600160a01b031633146022620022a2565b81600001516001600160a01b031682602001516001600160a01b03161415620014cc5760608201516200142890600262002d71565b80825260808301516020840151620014409262002311565b6200144a6200277f565b82516001600160a01b03908116825260208085015182168184015260408086015181850152608080870151909316606085015284519284019290925260086000554360015590516200149f9183910162002bdf565b60405160208183030381529060405260029080519060200190620014c5929190620026f0565b5050505050565b6060820151620014de90600262002d71565b6020808301829052608084015190840151620014fa9262002311565b620015046200277f565b82516001600160a01b0390811682526020808501518216818401526040808601518185015260808087015190931660608501528482015192840192909252600f6000554360015590516200149f9183910162002bdf565b505050565b62001572600660005414601f620022a2565b6200158f813515806200158757506001548235145b6020620022a2565b600080805560028054620015a390620028e3565b80601f0160208091040260200160405190810160405280929190818152602001828054620015d190620028e3565b8015620016225780601f10620015f65761010080835404028352916020019162001622565b820191906000526020600020905b8154815290600101906020018083116200160457829003601f168201915b50505050508060200190518101906200163c919062002cdb565b90507f4df267dd1a05b613b05cdeee7d7e028d3842cff6f4e5a9d9dde2cdaf41562759826040516200166f919062002a0c565b60405180910390a1620016853415601d620022a2565b6020810151620016a2906001600160a01b03163314601e620022a2565b6040805160a08101825260008082526020808301828152838501838152606080860185815260808088018781528a516001600160a01b039081168a528b88015181169096528a8a01519094529189015190528701519091169052600790915543600155915190916200064e9183910162002d9f565b62001729600960005414602c620022a2565b62001746813515806200173e57506001548235145b602d620022a2565b6000808055600280546200175a90620028e3565b80601f01602080910402602001604051908101604052809291908181526020018280546200178890620028e3565b8015620017d95780601f10620017ad57610100808354040283529160200191620017d9565b820191906000526020600020905b815481529060010190602001808311620017bb57829003601f168201915b5050505050806020019051810190620017f3919062002bc0565b90507fb764c356a899e639c4043e82fb6274894baac6d84c74f3b3ae78d8f4b22b00038260405162001826919062002a0c565b60405180910390a16200183c34156029620022a2565b6200185d620018553383606001518460800151620022c9565b602a620022a2565b805162001877906001600160a01b03163314602b620022a2565b62001881620027ad565b6020808301516001600160a01b0390811683526040808501518484015260608086015190921681850152608085015191840191909152600a60005543600155516200064e9183910162002c25565b620018e1600a600054146031620022a2565b620018fe81351580620018f657506001548235145b6032620022a2565b6000808055600280546200191290620028e3565b80601f01602080910402602001604051908101604052809291908181526020018280546200194090620028e3565b8015620019915780601f10620019655761010080835404028352916020019162001991565b820191906000526020600020905b8154815290600101906020018083116200197357829003601f168201915b5050505050806020019051810190620019ab9190620029bd565b90507f4c8b89b6d291e7da782b3a03ba8192a22dc69ae73b79029441f7242310b1a5a482604051620019de919062002a0c565b60405180910390a1620019f43415602e620022a2565b62001a1562001a0d3383604001518460600151620022c9565b602f620022a2565b805162000484906001600160a01b031633146030620022a2565b62001a416003600054146011620022a2565b62001a5e8135158062001a5657506001548235145b6012620022a2565b60008080556002805462001a7290620028e3565b80601f016020809104026020016040519081016040528092919081815260200182805462001aa090620028e3565b801562001af15780601f1062001ac55761010080835404028352916020019162001af1565b820191906000526020600020905b81548152906001019060200180831162001ad357829003601f168201915b505050505080602001905181019062001b0b919062002c5f565b90507f46fa595f7924075e82e3f58fa001775f50eda2857c56728dafc78ec80de66f498260405162001b3e919062002de2565b60405180910390a162001b543415600f620022a2565b602081015162001b71906001600160a01b031633146010620022a2565b62001b83604083016020840162002a98565b15620004a75760408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526004909555436001558751938401949094529051909216948101949094525190830152906080016200064e565b62001c046008600054146027620022a2565b62001c218135158062001c1957506001548235145b6028620022a2565b60008080556002805462001c3590620028e3565b80601f016020809104026020016040519081016040528092919081815260200182805462001c6390620028e3565b801562001cb45780601f1062001c885761010080835404028352916020019162001cb4565b820191906000526020600020905b81548152906001019060200180831162001c9657829003601f168201915b505050505080602001905181019062001cce919062002bc0565b90507fb9845e39b4c5715a32bc04872bfe1723e638b66042817fdde0a44e5b0466b6dc8260405162001d01919062002a0c565b60405180910390a162001d1734156025620022a2565b805162001d31906001600160a01b031633146026620022a2565b62001d4a81606001518260000151836080015162002311565b62001d546200277f565b81516001600160a01b03908116825260208084015182168184015260408085015181850152606080860151909316928401929092526080808501519084015260096000554360015590516200064e9183910162002bdf565b62001dbe600560005414601b620022a2565b62001ddb8135158062001dd357506001548235145b601c620022a2565b60008080556002805462001def90620028e3565b80601f016020809104026020016040519081016040528092919081815260200182805462001e1d90620028e3565b801562001e6e5780601f1062001e425761010080835404028352916020019162001e6e565b820191906000526020600020905b81548152906001019060200180831162001e5057829003601f168201915b505050505080602001905181019062001e88919062002ab8565b60408051606081018252600080825260208201819052818301529051919250907f4b0e092f37b086713c7354c6dc6283d2c7506c251b5d62ee7fea9ade0c19ff919062001ed790859062002e22565b60405180910390a162001eed34156017620022a2565b815162001f07906001600160a01b031633146018620022a2565b62001f19610100840135600462002d71565b80825262001f309060e085013510156019620022a2565b62001f3e6001601a620022a2565b60408051602085810135908201520160408051601f1981840301815291815262001f6f906060860190860162002e96565b6040516001600160c01b0319909116602082015260280160408051808303601f1901815282825260608781013560208501526080808901359385019390935260a088013590840152910160408051808303601f1901815282825260c0880135602084015291016040516020818303038152906040528660200160c00135601260405162001ffc90620027e7565b6200200d9695949392919062002eb4565b604051809103906000f0801580156200202a573d6000803e3d6000fd5b506001600160a01b031660208281018290526040808401839052519182527f747482b7427dc627d0da88f4b7a7dee18caa0f88a1e84a9722b83c9fd573ded5910160405180910390a16040805160a08101825260008082526020808301828152838501838152606085018481526080860185815289516001600160a01b0390811688528a860151811690945260e08b01359092526101008a01359052868601519091169052600690915543600155915190916200149f9183910162002d9f565b620020fc601360005414604e620022a2565b62002119813515806200211157506001548235145b604f620022a2565b6000808055600280546200212d90620028e3565b80601f01602080910402602001604051908101604052809291908181526020018280546200215b90620028e3565b8015620021ac5780601f106200218057610100808354040283529160200191620021ac565b820191906000526020600020905b8154815290600101906020018083116200218e57829003601f168201915b5050505050806020019051810190620021c6919062002bc0565b90507f359a55deeb4d5872fc8fd0567a7ed5063e7b4dc07b55df97304b61bb4b680e1282604051620021f9919062002a0c565b60405180910390a16200220f3415604b620022a2565b62002230620022283383606001518460800151620022c9565b604c620022a2565b80516200224a906001600160a01b03163314604d620022a2565b62002254620027ad565b6020808301516001600160a01b0390811683526040808501518484015260608086015190921681850152608085015191840191909152601460005543600155516200064e9183910162002c25565b81620004bf5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000620022d98385308562002328565b90505b9392505050565b620022ef82826200240a565b620004bf57600080fd5b6200230481620024ee565b6200230e57600080fd5b50565b6200231e83838362002599565b6200155b57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391620023919162002f1f565b60006040518083038185875af1925050503d8060008114620023d0576040519150601f19603f3d011682016040523d82523d6000602084013e620023d5565b606091505b5091509150620023e88282600162002672565b5080806020019051810190620023ff919062002f3d565b979650505050505050565b6000806000846001600160a01b031660006342966c6860e01b866040516024016200243791815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905162002477919062002f1f565b60006040518083038185875af1925050503d8060008114620024b6576040519150601f19603f3d011682016040523d82523d6000602084013e620024bb565b606091505b5091509150620024ce8282600362002672565b5080806020019051810190620024e5919062002f3d565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b038616918391620025379162002f1f565b60006040518083038185875af1925050503d806000811462002576576040519150601f19603f3d011682016040523d82523d6000602084013e6200257b565b606091505b50915091506200258e8282600462002672565b506001949350505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391620025fa9162002f1f565b60006040518083038185875af1925050503d806000811462002639576040519150601f19603f3d011682016040523d82523d6000602084013e6200263e565b606091505b5091509150620026518282600262002672565b508080602001905181019062002668919062002f3d565b9695505050505050565b6060831562002683575081620022dc565b825115620026945782518084602001fd5b60405163100960cb60e01b815260048101839052602401620022c0565b508054620026bf90620028e3565b6000825580601f10620026d0575050565b601f0160209004906000526020600020908101906200230e9190620027f5565b828054620026fe90620028e3565b90600052602060002090601f0160209004810192826200272257600085556200276d565b82601f106200273d57805160ff19168380011785556200276d565b828001600101855582156200276d579182015b828111156200276d57825182559160200191906001019062002750565b506200277b929150620027f5565b5090565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b610f758062002f5e83390190565b5b808211156200277b5760008155600101620027f6565b6000604082840312156200281f57600080fd5b50919050565b6000604082840312156200283857600080fd5b620022dc83836200280c565b6000606082840312156200281f57600080fd5b60005b83811015620028745781810151838201526020016200285a565b83811115620006745750506000910152565b60008151808452620028a081602086016020860162002857565b601f01601f19169290920160200192915050565b828152604060208201526000620022d9604083018462002886565b600061012082840312156200281f57600080fd5b600181811c90821680620028f857607f821691505b602082108114156200281f57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146200293257600080fd5b919050565b6000608082840312156200294a57600080fd5b6040516080810181811067ffffffffffffffff821117156200297c57634e487b7160e01b600052604160045260246000fd5b6040529050806200298d836200291a565b815260208301516020820152620029a7604084016200291a565b6040820152606083015160608201525092915050565b600060808284031215620029d057600080fd5b620022dc838362002937565b80151581146200230e57600080fd5b803582526020810135620029ff81620029dc565b8015156020840152505050565b6040810162002a1c8284620029eb565b92915050565b60006020828403121562002a3557600080fd5b6040516020810181811067ffffffffffffffff8211171562002a6757634e487b7160e01b600052604160045260246000fd5b60405262002a75836200291a565b81529392505050565b813581526060810162002a1c6020808401908501620029eb565b60006020828403121562002aab57600080fd5b8135620022dc81620029dc565b60006040828403121562002acb57600080fd5b6040516040810181811067ffffffffffffffff8211171562002afd57634e487b7160e01b600052604160045260246000fd5b60405262002b0b836200291a565b815262002b1b602084016200291a565b60208201529392505050565b600060a0828403121562002b3a57600080fd5b60405160a0810181811067ffffffffffffffff8211171562002b6c57634e487b7160e01b600052604160045260246000fd5b60405290508062002b7d836200291a565b815262002b8d602084016200291a565b60208201526040830151604082015262002baa606084016200291a565b6060820152608083015160808201525092915050565b600060a0828403121562002bd357600080fd5b620022dc838362002b27565b81516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151909116908201526080808301519082015260a0810162002a1c565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080810162002a1c565b60006060828403121562002c7257600080fd5b6040516060810181811067ffffffffffffffff8211171562002ca457634e487b7160e01b600052604160045260246000fd5b60405262002cb2836200291a565b815262002cc2602084016200291a565b6020820152604083015160408201528091505092915050565b600060a0828403121562002cee57600080fd5b60405160a0810181811067ffffffffffffffff8211171562002d2057634e487b7160e01b600052604160045260246000fd5b60405262002d2e836200291a565b815262002d3e602084016200291a565b6020820152604083015160408201526060830151606082015262002d65608084016200291a565b60808201529392505050565b600081600019048311821515161562002d9a57634e487b7160e01b600052601160045260246000fd5b500290565b81516001600160a01b0390811682526020808401518216908301526040808401519083015260608084015190830152608092830151169181019190915260a00190565b8135815260408101602083013562002dfa81620029dc565b80151560208401525092915050565b80356001600160c01b0319811681146200293257600080fd5b813581526020808301359082015261012081016001600160c01b031962002e4c6040850162002e09565b166040830152606083013560608301526080830135608083015260a083013560a083015260c083013560c083015260e083013560e083015261010080840135818401525092915050565b60006020828403121562002ea957600080fd5b620022dc8262002e09565b60c08152600062002ec960c083018962002886565b828103602084015262002edd818962002886565b9050828103604084015262002ef3818862002886565b9050828103606084015262002f09818762002886565b6080840195909552505060a00152949350505050565b6000825162002f3381846020870162002857565b9190910192915050565b60006020828403121562002f5057600080fd5b8151620022dc81620029dc56fe60806040523480156200001157600080fd5b5060405162000f7538038062000f75833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610af580620004806000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806383197ef01161006657806383197ef01461019b57806395d89b41146101a5578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b806342966c68146101575780635600f04f1461016a57806370a082311461017257600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063392f37e91461014f575b600080fd5b6100dc6101f9565b6040516100e991906108fa565b60405180910390f35b61010561010036600461096b565b61028b565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610995565b6102a1565b60085460405160ff90911681526020016100e9565b6100dc610357565b6101056101653660046109d1565b610366565b6100dc6103dc565b6101196101803660046109ea565b6001600160a01b031660009081526020819052604090205490565b6101a36103eb565b005b6100dc610492565b6101056101bb36600461096b565b6104a1565b6101196101ce366004610a0c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020890610a3f565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a3f565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b60006102983384846104ae565b50600192915050565b60006102ae8484846105d3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103385760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034c85336103478685610a90565b6104ae565b506001949350505050565b60606007805461020890610a3f565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b6005546103d4906001600160a01b0316836107ab565b506001919050565b60606006805461020890610a3f565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b604482015260640161032f565b6005546001600160a01b0316ff5b60606004805461020890610a3f565b60006102983384846105d3565b6001600160a01b0383166105105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032f565b6001600160a01b0382166105715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032f565b6001600160a01b0382166106995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032f565b6001600160a01b038316600090815260208190526040902054818110156107115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032f565b61071b8282610a90565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610751908490610aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079d91815260200190565b60405180910390a350505050565b6001600160a01b03821661080b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032f565b6001600160a01b0382166000908152602081905260409020548181101561087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032f565b6108898282610a90565b6001600160a01b038416600090815260208190526040812091909155600280548492906108b7908490610a90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105c6565b600060208083528351808285015260005b818110156109275785810183015185820160400152820161090b565b81811115610939576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461096657600080fd5b919050565b6000806040838503121561097e57600080fd5b6109878361094f565b946020939093013593505050565b6000806000606084860312156109aa57600080fd5b6109b38461094f565b92506109c16020850161094f565b9150604084013590509250925092565b6000602082840312156109e357600080fd5b5035919050565b6000602082840312156109fc57600080fd5b610a058261094f565b9392505050565b60008060408385031215610a1f57600080fd5b610a288361094f565b9150610a366020840161094f565b90509250929050565b600181811c90821680610a5357607f821691505b60208210811415610a7457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610aa257610aa2610a7a565b500390565b60008219821115610aba57610aba610a7a565b50019056fea26469706673582212202eebabdd082d362dae9cc38ea45247059b4537ddb4943c87d5cb4f04ddb7cf0d64736f6c63430008090033a2646970667358221220dfa6355969b00cdd183b81a0f19d0682cf1f8f478141991c048f4d7f5e9ca17764736f6c63430008090033`,
  BytecodeLen: 17047,
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
