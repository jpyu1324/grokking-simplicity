export default {};

declare function costAjax(cart, callback);
declare function shippingAjax(cart, callback);
declare function updateTotalDom(total);

let total = 0;
let cart = [];
// before
function calcCartTotal() {
  total = 0;
  costAjax(cart, function (cost) {
    total += cost;
    shippingAjax(cart, function (shipping) {
      total += shipping;
      updateTotalDom(total);
    });
  });
}

// 전역변수를 지역변수로.
function calcCartTotal_after(cart) {
  let total = 0;
  costAjax(cart, function (cost) {
    total += cost;
    shippingAjax(cart, function (shipping) {
      total += shipping;
      updateTotalDom(total);
    });
  });
}
