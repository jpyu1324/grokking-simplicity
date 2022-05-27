export default {};

declare function costAjax(cart, callback);
declare function shippingAjax(cart, callback);
declare function updateTotalDom(total);
declare function addItem(cart, item);

let cart = [];
function calcCartTotal(cart, callback) {
  let total = 0;
  costAjax(cart, function (cost) {
    total += cost;
    shippingAjax(cart, function (shipping) {
      total += shipping;
      callback(total);
    });
  });
}

function addItemToCart(item) {
  cart = addItem(cart, item);
  calcCartTotal(cart, updateTotalDom);
}

// after
const queueItems: any[] = [];
let working = false;
function updateTotalQueue(cart) {
  queueItems.push(cart);
  setTimeout(runNext, 0);
}

function addItemToCart_after(item) {
  cart = addItem(cart, item);
  updateTotalQueue(cart);
}

function runNext() {
  if (working) {
    return;
  }
  if (queueItems.length === 0) {
    return;
  }
  working = true;
  const cart = queueItems.shift();
  calcCartTotal(cart, function (total) {
    updateTotalDom(total);
    working = false;
    runNext();
  });
}
