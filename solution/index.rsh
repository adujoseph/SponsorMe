'reach 0.1';

const announcement = Bytes(28);
const product = Object({ name: Bytes(10), unit: Bytes(6), units: Bytes(8), price: UInt })
const products = Array(product, 3);

const commonInteract = {
  reportPayment: Fun([UInt], Null),
  reportTransfer: Fun([UInt], Null),
  reportCancellation: Fun([], Null),
  reportFulfillment: Fun([product, UInt], Null),
  reportExit: Fun([], Null)
};

const sellerInteract = {
  ...commonInteract,
  sellerInfo: Object({ announcement: announcement, products: products }),
  reportReady: Fun([], Null)
};

const buyerInteract = {
  ...commonInteract,
  shop: Fun(
    [Object({ announcement: announcement, products: products })],
    Object({ prodNum: UInt, prodAmt: UInt })
  ),
  confirmPurchase: Fun([UInt], Bool)
};

export const main = Reach.App(() => {
  const S = Participant('Seller', sellerInteract);
  const B = Participant('Buyer', buyerInteract);
  const V = View('Main', { sellerInfo: Object({ announcement: announcement, products: products }) });
  deploy();

  S.only(() => { const sellerInfo = declassify(interact.sellerInfo); });
  S.publish(sellerInfo);
  S.interact.reportReady();
  V.sellerInfo.set(sellerInfo);
  commit();

  B.only(() => { const order = declassify(interact.shop(sellerInfo)); });
  B.publish(order);

  if (order.prodNum == 0 || order.prodNum > sellerInfo.products.length || order.prodAmt == 0) {
    commit();
    each([S, B], () => interact.reportCancellation());
    each([S, B], () => interact.reportExit());
    exit();
  } else {
    commit();
  }

  S.only(() => { const total = sellerInfo.products[order.prodNum - 1].price * order.prodAmt; });
  S.publish(total);
  commit();

  B.only(() => { const willBuy = declassify(interact.confirmPurchase(total)); });
  B.publish(willBuy);

  if (!willBuy) {
    commit();
    each([S, B], () => interact.reportCancellation());
    each([S, B], () => interact.reportExit());
    exit();
  } else {
    commit();
  }

  B.pay(total);
  each([S, B], () => interact.reportPayment(total));
  transfer(total).to(S);
  each([S, B], () => interact.reportTransfer(total));
  each([S, B], () => interact.reportFulfillment(sellerInfo.products[order.prodNum - 1], order.prodAmt));
  commit();

  each([S, B], () => interact.reportExit());
  exit();
});