import { DroppingQueue } from "@src/chapter16/p465-466";
import { Cut } from "@src/chapter17/p488";

export default {};

declare function addItem(cart, item): any;
declare function updateTotalDom(total);
declare function costAjax(cart, cb);
declare function shippingAjax(cart, cb);
let cart: any[] = [];

function calcCartWorker(cart, done) {
  calcCartTotal(cart, function (total) {
    updateTotalDom(total);
    done(total);
  });
}

const updateTotalQueue = DroppingQueue(1, calcCartWorker);

function addItemToCart(item) {
  cart = addItem(cart, item);
  updateTotalQueue(cart);
}

function calcCartTotal(cart, callback) {
  let total = 0;
  costAjax(cart, function (cost) {
    total += cost;
  });
  shippingAjax(cart, function (shipping) {
    total += shipping;
    callback(total);
  });
}

function calcCartTotal_after(cart, callback) {
  let total = 0;
  const done = Cut(2, function () {
    callback(total);
  });
  costAjax(cart, function (cost) {
    total += cost;
    done();
  });
  shippingAjax(cart, function (shipping) {
    total += shipping;
    done();
  });
}
