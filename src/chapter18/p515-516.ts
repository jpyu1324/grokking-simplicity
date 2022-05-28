import { forEach } from "@src/chapter18/util";

export default {};

function ValueCell<T>(initialValue: T) {
  type Watcher = (arg: T) => any;
  let currentValue = initialValue;
  const watchers: Watcher[] = [];
  return {
    val: function () {
      return currentValue;
    },
    update: function (f) {
      const oldValue = currentValue;
      const newValue = f(oldValue);
      if (currentValue !== newValue) {
        currentValue = newValue;
        forEach(watchers, function (watcher) {
          watcher(newValue);
        });
      }
    },
    addWatcher: function (f: Watcher) {
      watchers.push(f);
    }
  };
}

declare function makeCartItem(name, price);
declare function addItem(shoppingCart, item);
declare function calcTotal(shoppingCart);
declare function setCartTotalDom(total);
declare function updateShippingIcons(shoppingCart);
declare function updateTaxDom(total);

let shoppingCart = ValueCell({});
function addItemToCart_after(name, price) {
  const item = makeCartItem(name, price);
  shoppingCart.update(function (cart) {
    return addItem(cart, item);
  });

  const total = calcTotal(shoppingCart.val());
  setCartTotalDom(total);
  updateTaxDom(total);
}

shoppingCart.addWatcher(updateShippingIcons);
