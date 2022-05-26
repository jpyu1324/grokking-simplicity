export default {};

declare function costAjax(cart, callback);
declare function shippingAjax(cart, callback);
declare function updateTotalDom(total);

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

function foo() {
  calcCartTotal(cart, updateTotalDom);
}
