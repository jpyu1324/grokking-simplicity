export default {};

function ValueCell(initialValue) {
  let currentValue = initialValue;
  return {
    val: function () {
      return currentValue;
    },
    update: function (f) {
      const oldValue = currentValue;
      const newValue = f(oldValue);
      currentValue = newValue;
    }
  };
}

declare function makeCartItem(name, price);
declare function addItem(shoppingCart, item);
declare function calcTotal(shoppingCart);
declare function setCartTotalDom(total);
declare function updateShippingIcons(shoppingCart);
declare function updateTaxDom(total);

// before

let shoppingCart = {};
function addItemToCart(name, price) {
  const item = makeCartItem(name, price);
  shoppingCart = addItem(shoppingCart, item);

  const total = calcTotal(shoppingCart);
  setCartTotalDom(total);
  updateShippingIcons(shoppingCart);
  updateTaxDom(total);
}

// after
let shoppingCart_after = ValueCell({});
function addItemToCart_after(name, price) {
  const item = makeCartItem(name, price);
  shoppingCart_after.update(function (cart) {
    return addItem(cart, item);
  });

  const total = calcTotal(shoppingCart_after.val());
  setCartTotalDom(total);
  updateShippingIcons(shoppingCart_after.val());
  updateTaxDom(total);
}
