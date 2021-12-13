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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 28));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8));
  const ctc6 = stdlib.T_Object({
    name: ctc2,
    price: ctc3,
    unit: ctc4,
    units: ctc5
    });
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc8 = stdlib.T_Object({
    announcement: ctc1,
    products: ctc7
    });
  
  return {
    infos: {
      Main: {
        sellerInfo: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v161, v162] = svs;
              return (await ((async () => {
                
                
                return v162;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v161, v162, v170] = svs;
              return (await ((async () => {
                
                
                return v162;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v161, v162, v170, v201] = svs;
              return (await ((async () => {
                
                
                return v162;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v161, v162, v170, v201] = svs;
              return (await ((async () => {
                
                
                return v162;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc8
          }
        }
      },
    views: {
      1: [ctc0, ctc8],
      3: [ctc0, ctc8, ctc0],
      4: [ctc0, ctc8, ctc0, ctc3],
      5: [ctc0, ctc8, ctc0, ctc3]
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
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 28));
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8));
  const ctc5 = stdlib.T_Object({
    name: ctc1,
    price: ctc2,
    unit: ctc3,
    units: ctc4
    });
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc7 = stdlib.T_Object({
    announcement: ctc0,
    products: ctc6
    });
  const ctc8 = stdlib.T_Object({
    prodAmt: ctc2,
    prodNum: ctc2
    });
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc7],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v162], secs: v164, time: v163, didSend: v24, from: v161 } = txn1;
  ;
  const v169 = stdlib.protect(ctc8, await interact.shop(v162), {
    at: './index.rsh:42:56:application',
    fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:13:function exp)'],
    msg: 'shop',
    who: 'Buyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v161, v162, v169],
    evt_cnt: 1,
    funcNum: 1,
    lct: v163,
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v171], secs: v173, time: v172, didSend: v38, from: v170 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v175 = v171.prodNum;
      const v176 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:45:24:decimal', stdlib.UInt_max, 0));
      const v178 = v162.products;
      const v179 = stdlib.gt(v175, stdlib.checkedBigNumberify('./index.rsh:45:65:dot', stdlib.UInt_max, 3));
      const v180 = v176 ? true : v179;
      const v181 = v171.prodAmt;
      const v182 = stdlib.eq(v181, stdlib.checkedBigNumberify('./index.rsh:45:92:decimal', stdlib.UInt_max, 0));
      const v183 = v180 ? true : v182;
      if (v183) {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc11, ctc7, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v171], secs: v173, time: v172, didSend: v38, from: v170 } = txn2;
  ;
  const v175 = v171.prodNum;
  const v176 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:45:24:decimal', stdlib.UInt_max, 0));
  const v178 = v162.products;
  const v179 = stdlib.gt(v175, stdlib.checkedBigNumberify('./index.rsh:45:65:dot', stdlib.UInt_max, 3));
  const v180 = v176 ? true : v179;
  const v181 = v171.prodAmt;
  const v182 = stdlib.eq(v181, stdlib.checkedBigNumberify('./index.rsh:45:92:decimal', stdlib.UInt_max, 0));
  const v183 = v180 ? true : v182;
  if (v183) {
    stdlib.protect(ctc9, await interact.reportCancellation(), {
      at: './index.rsh:47:51:application',
      fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)'],
      msg: 'reportCancellation',
      who: 'Buyer'
      });
    
    stdlib.protect(ctc9, await interact.reportExit(), {
      at: './index.rsh:48:43:application',
      fs: ['at ./index.rsh:48:9:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)'],
      msg: 'reportExit',
      who: 'Buyer'
      });
    
    return;
    }
  else {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc2],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v201], secs: v203, time: v202, didSend: v79, from: v200 } = txn3;
    ;
    const v205 = stdlib.addressEq(v161, v200);
    stdlib.assert(v205, {
      at: './index.rsh:55:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    const v208 = stdlib.protect(ctc10, await interact.confirmPurchase(v201), {
      at: './index.rsh:58:69:application',
      fs: ['at ./index.rsh:58:9:application call to [unknown function] (defined at: ./index.rsh:58:13:function exp)'],
      msg: 'confirmPurchase',
      who: 'Buyer'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v161, v162, v170, v201, v208],
      evt_cnt: 1,
      funcNum: 3,
      lct: v202,
      onlyIf: true,
      out_tys: [ctc10],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v210], secs: v212, time: v211, didSend: v90, from: v209 } = txn4;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v214 = stdlib.addressEq(v170, v209);
        stdlib.assert(v214, {
          at: './index.rsh:59:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Buyer'
          });
        if (v210) {
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
      tys: [ctc11, ctc7, ctc11, ctc2, ctc10],
      waitIfNotPresent: false
      }));
    const {data: [v210], secs: v212, time: v211, didSend: v90, from: v209 } = txn4;
    ;
    const v214 = stdlib.addressEq(v170, v209);
    stdlib.assert(v214, {
      at: './index.rsh:59:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    if (v210) {
      const txn5 = await (ctc.sendrecv({
        args: [v161, v162, v170, v201],
        evt_cnt: 0,
        funcNum: 4,
        lct: v211,
        onlyIf: true,
        out_tys: [],
        pay: [v201, []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v224, time: v223, didSend: v113, from: v222 } = txn5;
          
          sim_r.txns.push({
            amt: v201,
            kind: 'to',
            tok: undefined
            });
          const v227 = stdlib.addressEq(v170, v222);
          stdlib.assert(v227, {
            at: './index.rsh:70:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Buyer'
            });
          
          sim_r.txns.push({
            amt: v201,
            kind: 'from',
            to: v161,
            tok: undefined
            });
          
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc11, ctc7, ctc11, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v224, time: v223, didSend: v113, from: v222 } = txn5;
      ;
      const v227 = stdlib.addressEq(v170, v222);
      stdlib.assert(v227, {
        at: './index.rsh:70:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Buyer'
        });
      stdlib.protect(ctc9, await interact.reportPayment(v201), {
        at: './index.rsh:71:44:application',
        fs: ['at ./index.rsh:71:7:application call to [unknown function] (defined at: ./index.rsh:71:19:function exp)'],
        msg: 'reportPayment',
        who: 'Buyer'
        });
      
      ;
      stdlib.protect(ctc9, await interact.reportTransfer(v201), {
        at: './index.rsh:73:45:application',
        fs: ['at ./index.rsh:73:7:application call to [unknown function] (defined at: ./index.rsh:73:19:function exp)'],
        msg: 'reportTransfer',
        who: 'Buyer'
        });
      
      const v246 = stdlib.sub(v175, stdlib.checkedBigNumberify('./index.rsh:74:85:decimal', stdlib.UInt_max, 1));
      const v248 = v178[v246];
      stdlib.protect(ctc9, await interact.reportFulfillment(v248, v181), {
        at: './index.rsh:74:48:application',
        fs: ['at ./index.rsh:74:7:application call to [unknown function] (defined at: ./index.rsh:74:19:function exp)'],
        msg: 'reportFulfillment',
        who: 'Buyer'
        });
      
      stdlib.protect(ctc9, await interact.reportExit(), {
        at: './index.rsh:77:41:application',
        fs: ['at ./index.rsh:77:7:application call to [unknown function] (defined at: ./index.rsh:77:19:function exp)'],
        msg: 'reportExit',
        who: 'Buyer'
        });
      
      return;
      
      
      }
    else {
      stdlib.protect(ctc9, await interact.reportCancellation(), {
        at: './index.rsh:63:51:application',
        fs: ['at ./index.rsh:63:9:application call to [unknown function] (defined at: ./index.rsh:63:21:function exp)'],
        msg: 'reportCancellation',
        who: 'Buyer'
        });
      
      stdlib.protect(ctc9, await interact.reportExit(), {
        at: './index.rsh:64:43:application',
        fs: ['at ./index.rsh:64:9:application call to [unknown function] (defined at: ./index.rsh:64:21:function exp)'],
        msg: 'reportExit',
        who: 'Buyer'
        });
      
      return;
      }
    
    
    
    }
  
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 28));
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8));
  const ctc5 = stdlib.T_Object({
    name: ctc1,
    price: ctc2,
    unit: ctc3,
    units: ctc4
    });
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc7 = stdlib.T_Object({
    announcement: ctc0,
    products: ctc6
    });
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Object({
    prodAmt: ctc2,
    prodNum: ctc2
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Address;
  
  
  const v158 = stdlib.protect(ctc7, interact.sellerInfo, 'for Seller\'s interact field sellerInfo');
  
  const txn1 = await (ctc.sendrecv({
    args: [v158],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v162], secs: v164, time: v163, didSend: v24, from: v161 } = txn1;
      
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
    tys: [ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v162], secs: v164, time: v163, didSend: v24, from: v161 } = txn1;
  ;
  stdlib.protect(ctc8, await interact.reportReady(), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:38:25:application call to "liftedInteract" (defined at: ./index.rsh:38:25:application)'],
    msg: 'reportReady',
    who: 'Seller'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc9],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v171], secs: v173, time: v172, didSend: v38, from: v170 } = txn2;
  ;
  const v175 = v171.prodNum;
  const v176 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:45:24:decimal', stdlib.UInt_max, 0));
  const v178 = v162.products;
  const v179 = stdlib.gt(v175, stdlib.checkedBigNumberify('./index.rsh:45:65:dot', stdlib.UInt_max, 3));
  const v180 = v176 ? true : v179;
  const v181 = v171.prodAmt;
  const v182 = stdlib.eq(v181, stdlib.checkedBigNumberify('./index.rsh:45:92:decimal', stdlib.UInt_max, 0));
  const v183 = v180 ? true : v182;
  if (v183) {
    stdlib.protect(ctc8, await interact.reportCancellation(), {
      at: './index.rsh:47:51:application',
      fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)'],
      msg: 'reportCancellation',
      who: 'Seller'
      });
    
    stdlib.protect(ctc8, await interact.reportExit(), {
      at: './index.rsh:48:43:application',
      fs: ['at ./index.rsh:48:9:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)'],
      msg: 'reportExit',
      who: 'Seller'
      });
    
    return;
    }
  else {
    const v194 = stdlib.sub(v175, stdlib.checkedBigNumberify('./index.rsh:54:68:decimal', stdlib.UInt_max, 1));
    const v196 = v178[v194];
    const v197 = v196.price;
    const v199 = stdlib.mul(v197, v181);
    
    const txn3 = await (ctc.sendrecv({
      args: [v161, v162, v170, v199],
      evt_cnt: 1,
      funcNum: 2,
      lct: v172,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v201], secs: v203, time: v202, didSend: v79, from: v200 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v205 = stdlib.addressEq(v161, v200);
        stdlib.assert(v205, {
          at: './index.rsh:55:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Seller'
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc11, ctc7, ctc11, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v201], secs: v203, time: v202, didSend: v79, from: v200 } = txn3;
    ;
    const v205 = stdlib.addressEq(v161, v200);
    stdlib.assert(v205, {
      at: './index.rsh:55:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Seller'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc10],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v210], secs: v212, time: v211, didSend: v90, from: v209 } = txn4;
    ;
    const v214 = stdlib.addressEq(v170, v209);
    stdlib.assert(v214, {
      at: './index.rsh:59:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Seller'
      });
    if (v210) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v224, time: v223, didSend: v113, from: v222 } = txn5;
      ;
      const v227 = stdlib.addressEq(v170, v222);
      stdlib.assert(v227, {
        at: './index.rsh:70:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Seller'
        });
      stdlib.protect(ctc8, await interact.reportPayment(v201), {
        at: './index.rsh:71:44:application',
        fs: ['at ./index.rsh:71:7:application call to [unknown function] (defined at: ./index.rsh:71:19:function exp)'],
        msg: 'reportPayment',
        who: 'Seller'
        });
      
      ;
      stdlib.protect(ctc8, await interact.reportTransfer(v201), {
        at: './index.rsh:73:45:application',
        fs: ['at ./index.rsh:73:7:application call to [unknown function] (defined at: ./index.rsh:73:19:function exp)'],
        msg: 'reportTransfer',
        who: 'Seller'
        });
      
      stdlib.protect(ctc8, await interact.reportFulfillment(v196, v181), {
        at: './index.rsh:74:48:application',
        fs: ['at ./index.rsh:74:7:application call to [unknown function] (defined at: ./index.rsh:74:19:function exp)'],
        msg: 'reportFulfillment',
        who: 'Seller'
        });
      
      stdlib.protect(ctc8, await interact.reportExit(), {
        at: './index.rsh:77:41:application',
        fs: ['at ./index.rsh:77:7:application call to [unknown function] (defined at: ./index.rsh:77:19:function exp)'],
        msg: 'reportExit',
        who: 'Seller'
        });
      
      return;
      
      
      }
    else {
      stdlib.protect(ctc8, await interact.reportCancellation(), {
        at: './index.rsh:63:51:application',
        fs: ['at ./index.rsh:63:9:application call to [unknown function] (defined at: ./index.rsh:63:21:function exp)'],
        msg: 'reportCancellation',
        who: 'Seller'
        });
      
      stdlib.protect(ctc8, await interact.reportExit(), {
        at: './index.rsh:64:43:application',
        fs: ['at ./index.rsh:64:9:application call to [unknown function] (defined at: ./index.rsh:64:21:function exp)'],
        msg: 'reportExit',
        who: 'Seller'
        });
      
      return;
      }
    
    
    
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
int 124
==
assert
dup
store 255
pop
// "CheckPay"
// "./index.rsh:37:5:dot"
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
// "./index.rsh:37:5:dot"
// "[]"
txn Sender
load 255
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 29
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
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
extract 32 124
store 254
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
store 253
pop
// "CheckPay"
// "./index.rsh:43:5:dot"
// "[]"
load 253
int 8
extract_uint64
dup
store 252
int 0
==
load 252
int 3
>
||
load 253
int 0
extract_uint64
int 0
==
||
bz l3_ifF
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
l3_ifF:
load 255
load 254
concat
txn Sender
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 61
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
l2_afterHandler1:
// Handler 2
dup
int 2
==
bz l5_afterHandler2
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
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
extract 32 124
store 254
dup
extract 156 32
store 253
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 252
pop
// "CheckPay"
// "./index.rsh:55:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:55:5:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
concat
load 253
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 69
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
l5_afterHandler2:
// Handler 3
dup
int 3
==
bz l6_afterHandler3
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
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
extract 32 124
store 254
dup
extract 156 32
store 253
dup
int 188
extract_uint64
store 252
pop
txna ApplicationArgs 2
dup
len
int 1
==
assert
dup
btoi
store 251
pop
// "CheckPay"
// "./index.rsh:59:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:59:5:dot"
// "[]"
load 253
txn Sender
==
assert
load 251
bz l7_ifF
load 255
load 254
concat
load 253
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 69
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
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
extract 32 124
store 254
dup
extract 156 32
store 253
dup
int 188
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
// "./index.rsh:70:5:dot"
// "[]"
load 252
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
// "./index.rsh:70:5:dot"
// "[]"
load 253
txn Sender
==
assert
load 252
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
l12_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l9_afterHandler4:
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
  stateKeys: 2,
  stateSize: 196,
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
                    "components": [
                      {
                        "internalType": "bytes28",
                        "name": "elem0",
                        "type": "bytes28"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_announcement",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes10",
                            "name": "elem0",
                            "type": "bytes10"
                          }
                        ],
                        "internalType": "struct T1",
                        "name": "_name",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "_price",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes6",
                            "name": "elem0",
                            "type": "bytes6"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "_unit",
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
                        "internalType": "struct T3",
                        "name": "_units",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T4[3]",
                    "name": "_products",
                    "type": "tuple[3]"
                  }
                ],
                "internalType": "struct T6",
                "name": "v162",
                "type": "tuple"
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
                    "components": [
                      {
                        "internalType": "bytes28",
                        "name": "elem0",
                        "type": "bytes28"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_announcement",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes10",
                            "name": "elem0",
                            "type": "bytes10"
                          }
                        ],
                        "internalType": "struct T1",
                        "name": "_name",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "_price",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes6",
                            "name": "elem0",
                            "type": "bytes6"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "_unit",
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
                        "internalType": "struct T3",
                        "name": "_units",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T4[3]",
                    "name": "_products",
                    "type": "tuple[3]"
                  }
                ],
                "internalType": "struct T6",
                "name": "v162",
                "type": "tuple"
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
                    "name": "_prodAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_prodNum",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v171",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v201",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
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
                "name": "v210",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
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
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Main_sellerInfo",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes28",
                "name": "elem0",
                "type": "bytes28"
              }
            ],
            "internalType": "struct T0",
            "name": "_announcement",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T1",
                "name": "_name",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes6",
                    "name": "elem0",
                    "type": "bytes6"
                  }
                ],
                "internalType": "struct T2",
                "name": "_unit",
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
                "internalType": "struct T3",
                "name": "_units",
                "type": "tuple"
              }
            ],
            "internalType": "struct T4[3]",
            "name": "_products",
            "type": "tuple[3]"
          }
        ],
        "internalType": "struct T6",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
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
                    "name": "_prodAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_prodNum",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v171",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v201",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
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
                "name": "v210",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
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
        "internalType": "struct T20",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200188e3803806200188e833981016040819052620000269162000369565b60008055436003556040517ff0d05aab9b5de5534e54d0d8d73fb0bca1397db814e545c6c6472f702ba3e57d90620000609083906200058b565b60405180910390a16200007634156008620000d8565b6200008062000102565b338152602080830151518183015260016000819055439055604051620000a991839101620005b4565b60405160208183030381529060405260029080519060200190620000cf9291906200012c565b50505062000618565b81620000fe5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604051806040016040528060006001600160a01b0316815260200162000127620001bb565b905290565b8280546200013a90620005db565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001de565b5090565b6040805160608101825260009181019182529081526020810162000127620001f5565b5b80821115620001b75760008155600101620001df565b60405180606001604052806003905b6040805160a081018252600060808201818152825260208083018290528351808201855282815283850152835190810190935282526060810191909152815260200190600190039081620002045790505090565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171562000293576200029362000258565b60405290565b604051602081016001600160401b038111828210171562000293576200029362000258565b604051606081016001600160401b038111828210171562000293576200029362000258565b604051608081016001600160401b038111828210171562000293576200029362000258565b6000602082840312156200031b57600080fd5b604051602081016001600160401b038111828210171562000340576200034062000258565b604052825190915081906001600160c01b0319811681146200036157600080fd5b905292915050565b60008183036101c0808212156200037f57600080fd5b620003896200026e565b845181526020601f19840193506101a0841215620003a657600080fd5b620003b062000299565b620003ba6200026e565b82861215620003c857600080fd5b620003d262000299565b95508288015163ffffffff1981168114620003ec57600080fd5b8652948552604094605f880189136200040457600080fd5b6200040e620002be565b94880194808a8711156200042157600080fd5b878a015b87811015620004f657808c036080811215620004415760008081fd5b6200044b620002e3565b878212156200045a5760008081fd5b6200046462000299565b83516001600160b01b0319811681146200047e5760008081fd5b815281528288015188820152603f1982018813156200049d5760008081fd5b620004a762000299565b838c01519092506001600160d01b031981168114620004c65760008081fd5b8252808b0191909152606090620004e08e84840162000308565b9181019190915283529185019160800162000425565b50828501525081529082015295945050505050565b80515163ffffffff1916825260208082015181840160005b6003811015620005835782518051516001600160b01b03191683528481015185840152604080820151516001600160d01b03191690840152606090810151516001600160c01b031916908301529183019160809091019060010162000523565b505050505050565b60006101c082019050825182526020830151620005ad6020840182516200050b565b5092915050565b81516001600160a01b031681526020808301516101c0830191620005ad908401826200050b565b600181811c90821680620005f057607f821691505b602082108114156200061257634e487b7160e01b600052602260045260246000fd5b50919050565b61126680620006286000396000f3fe6080604052600436106100795760003560e01c8063a7661d541161004b578063a7661d54146100f0578063ab53f2c614610103578063e2186a0814610126578063e46645081461013957005b80631e93b0f11461008257806345f70396146100a65780634c21449d146100b957806383230757146100db57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610caa565b61014c565b3480156100c557600080fd5b506100ce6102f5565b60405161009d9190610d4b565b3480156100e757600080fd5b50600154610093565b6100806100fe366004610caa565b610531565b34801561010f57600080fd5b506101186106bb565b60405161009d929190610d60565b610080610134366004610caa565b610758565b610080610147366004610dbd565b6108ff565b61015c600360005414600e610aa8565b6101768135158061016f57506001548235145b600f610aa8565b60008080556002805461018890610dcf565b80601f01602080910402602001604051908101604052809291908181526020018280546101b490610dcf565b80156102015780601f106101d657610100808354040283529160200191610201565b820191906000526020600020905b8154815290600101906020018083116101e457829003601f168201915b50505050508060200190518101906102199190611057565b6040805184358152602080860135908201529192507fa8de7fa57e96b1b344028051973cc20a5275cd64ccacf1c4ebc1e38bc2945cb6910160405180910390a16102653415600c610aa8565b805161027d906001600160a01b03163314600d610aa8565b610285610acd565b81516001600160a01b039081168252602080840151818401526040808501519092168284015284810135606084015260046000554360015590516102cb918391016110c6565b604051602081830303815290604052600290805190602001906102ef929190610b04565b50505050565b6102fd610b88565b600160005414156103b25760006002805461031790610dcf565b80601f016020809104026020016040519081016040528092919081815260200182805461034390610dcf565b80156103905780601f1061036557610100808354040283529160200191610390565b820191906000526020600020905b81548152906001019060200180831161037357829003601f168201915b50505050508060200190518101906103a8919061110b565b6020015192915050565b6003600054141561045d576000600280546103cc90610dcf565b80601f01602080910402602001604051908101604052809291908181526020018280546103f890610dcf565b80156104455780601f1061041a57610100808354040283529160200191610445565b820191906000526020600020905b81548152906001019060200180831161042857829003601f168201915b50505050508060200190518101906103a89190611057565b600460005414156105085760006002805461047790610dcf565b80601f01602080910402602001604051908101604052809291908181526020018280546104a390610dcf565b80156104f05780601f106104c5576101008083540402835291602001916104f0565b820191906000526020600020905b8154815290600101906020018083116104d357829003601f168201915b50505050508060200190518101906103a8919061114a565b600560005414156105225760006002805461047790610dcf565b61052e60006007610aa8565b90565b6105416005600054146016610aa8565b61055b8135158061055457506001548235145b6017610aa8565b60008080556002805461056d90610dcf565b80601f016020809104026020016040519081016040528092919081815260200182805461059990610dcf565b80156105e65780601f106105bb576101008083540402835291602001916105e6565b820191906000526020600020905b8154815290600101906020018083116105c957829003601f168201915b50505050508060200190518101906105fe919061114a565b90507fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d18260405161062f91906111b7565b60405180910390a1610648816060015134146014610aa8565b6040810151610663906001600160a01b031633146015610aa8565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106a0573d6000803e3d6000fd5b50600080805560018190556106b790600290610bae565b5050565b6000606060005460028080546106d090610dcf565b80601f01602080910402602001604051908101604052809291908181526020018280546106fc90610dcf565b80156107495780601f1061071e57610100808354040283529160200191610749565b820191906000526020600020905b81548152906001019060200180831161072c57829003601f168201915b50505050509050915091509091565b6107686004600054146012610aa8565b6107828135158061077b57506001548235145b6013610aa8565b60008080556002805461079490610dcf565b80601f01602080910402602001604051908101604052809291908181526020018280546107c090610dcf565b801561080d5780601f106107e25761010080835404028352916020019161080d565b820191906000526020600020905b8154815290600101906020018083116107f057829003601f168201915b5050505050806020019051810190610825919061114a565b90507f46fa595f7924075e82e3f58fa001775f50eda2857c56728dafc78ec80de66f498260405161085691906111b7565b60405180910390a161086a34156010610aa8565b6040810151610885906001600160a01b031633146011610aa8565b61089560408301602084016111d8565b156108e9576108a2610acd565b81516001600160a01b03908116825260208084015181840152604080850151909216828401526060808501519084015260056000554360015590516102cb918391016110c6565b600080805560018190556106b790600290610bae565b61090f600160005414600a610aa8565b6109298135158061092257506001548235145b600b610aa8565b60008080556002805461093b90610dcf565b80601f016020809104026020016040519081016040528092919081815260200182805461096790610dcf565b80156109b45780601f10610989576101008083540402835291602001916109b4565b820191906000526020600020905b81548152906001019060200180831161099757829003601f168201915b50505050508060200190518101906109cc919061110b565b604080518435815260208086013590820152848201358183015290519192507f5a2d595552399a60390a6411276d0d4e690025f1830a1bf2e57a55710fc11c77919081900360600190a1610a2234156009610aa8565b604082013515610a39576003604083013511610a3c565b60015b610a4b57602082013515610a4e565b60015b15610a6957600080805560018190556106b790600290610bae565b610a71610beb565b81516001600160a01b031681526020808301518183015233604080840191909152600360005543600155516102cb918391016111f3565b816106b75760405163100960cb60e01b81526004810182905260240160405180910390fd5b604051806080016040528060006001600160a01b03168152602001610af0610b88565b815260006020820181905260409091015290565b828054610b1090610dcf565b90600052602060002090601f016020900481019282610b325760008555610b78565b82601f10610b4b57805160ff1916838001178555610b78565b82800160010185558215610b78579182015b82811115610b78578251825591602001919060010190610b5d565b50610b84929150610c1b565b5090565b60408051606081018252600091810191825290815260208101610ba9610c30565b905290565b508054610bba90610dcf565b6000825580601f10610bca575050565b601f016020900490600052602060002090810190610be89190610c1b565b50565b604051806060016040528060006001600160a01b03168152602001610c0e610b88565b8152600060209091015290565b5b80821115610b845760008155600101610c1c565b60405180606001604052806003905b6040805160a081018252600060808201818152825260208083018290528351808201855282815283850152835190810190935282526060810191909152815260200190600190039081610c3f5790505090565b600060408284031215610ca457600080fd5b50919050565b600060408284031215610cbc57600080fd5b610cc68383610c92565b9392505050565b80515163ffffffff1916825260208082015181840160005b6003811015610d435782518051516001600160b01b03191683528481015185840152604080820151516001600160d01b03191690840152606090810151516001600160c01b0319169083015291830191608090910190600101610ce5565b505050505050565b6101a08101610d5a8284610ccd565b92915050565b82815260006020604081840152835180604085015260005b81811015610d9457858101830151858201606001528201610d78565b81811115610da6576000606083870101525b50601f01601f191692909201606001949350505050565b600060608284031215610ca457600080fd5b600181811c90821680610de357607f821691505b60208210811415610ca457634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715610e3d57610e3d610e04565b60405290565b6040805190810167ffffffffffffffff81118282101715610e3d57610e3d610e04565b6040516060810167ffffffffffffffff81118282101715610e3d57610e3d610e04565b6040516080810167ffffffffffffffff81118282101715610e3d57610e3d610e04565b80516001600160a01b0381168114610ec357600080fd5b919050565b600060208284031215610eda57600080fd5b610ee2610e1a565b82519091506001600160c01b031981168114610efd57600080fd5b815292915050565b60008183036101a080821215610f1a57600080fd5b610f22610e43565b9250602080831215610f3357600080fd5b610f3b610e1a565b9250845163ffffffff1981168114610f5257600080fd5b8352828452603f85018613610f6657600080fd5b610f6e610e66565b9250908401908286831115610f8257600080fd5b8186015b83811015611049578088036080811215610fa05760008081fd5b610fa8610e89565b84821215610fb65760008081fd5b610fbe610e1a565b83516001600160b01b031981168114610fd75760008081fd5b8152815282850151858201526040603f198301861315610ff75760008081fd5b610fff610e1a565b848201519093506001600160d01b03198116811461101d5760008081fd5b83528101919091526060906110348a848401610ec8565b91810191909152855293820193608001610f86565b509084015250909392505050565b60006101e0828403121561106a57600080fd5b6040516060810181811067ffffffffffffffff8211171561108d5761108d610e04565b60405261109983610eac565b81526110a88460208501610f05565b60208201526110ba6101c08401610eac565b60408201529392505050565b81516001600160a01b039081168252602080840151610200840192916110ee90850182610ccd565b506040840151166101c08301526060909201516101e09091015290565b60006101c0828403121561111e57600080fd5b611126610e43565b61112f83610eac565b815261113e8460208501610f05565b60208201529392505050565b6000610200828403121561115d57600080fd5b611165610e89565b61116e83610eac565b815261117d8460208501610f05565b602082015261118f6101c08401610eac565b60408201526101e09290920151606083015250919050565b80358015158114610ec357600080fd5b81358152604081016111cb602084016111a7565b1515602083015292915050565b6000602082840312156111ea57600080fd5b610cc6826111a7565b81516001600160a01b0390811682526020808401516101e08401929161121b90850182610ccd565b50806040850151166101c0840152509291505056fea26469706673582212206d3951f99ec85cebefc07b0b7b934837ae34062fc7a259757ea47e6c90c39c6764736f6c63430008090033`,
  BytecodeLen: 6286,
  Which: `oD`,
  version: 5,
  views: {
    Main: {
      sellerInfo: `Main_sellerInfo`
      }
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer": Buyer,
  "Seller": Seller
  };
export const _APIs = {
  };
