import { forEach } from "@src/chapter18/util";

export default {};

type Watcher<T> = (arg: T) => any;
interface ValueCell<T> {
  val: () => T;
  update: (f: any) => void;
  addWatcher: (f: Watcher<T>) => void;
}

// Redux의 Store와 Recoil의 Atom과 매우 유사.
function ValueCell<T>(initialValue: T): ValueCell<T> {
  let currentValue = initialValue;
  const watchers: Watcher<T>[] = [];
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
    addWatcher: function (f: Watcher<T>) {
      watchers.push(f);
    }
  };
}

function FormulaCell<T, U>(upstreamCell: ValueCell<T>, f: (arg: T) => U): Omit<ValueCell<U>, "update"> {
  const myCell = ValueCell(f(upstreamCell.val()));
  upstreamCell.addWatcher(function (newUpstreamValue) {
    myCell.update(function (currentValue) {
      return f(newUpstreamValue);
    });
  });
  return {
    val: myCell.val,
    addWatcher: myCell.addWatcher
  };
}

declare function makeCartItem(name, price);
declare function addItem(shoppingCart, item);
declare function calcTotal(shoppingCart): number;
declare function setCartTotalDom(total);
declare function updateShippingIcons(shoppingCart);
declare function updateTaxDom(total);

let shoppingCart = ValueCell({});
let cartTotal = FormulaCell(shoppingCart, calcTotal);
function addItemToCart_after(name, price) {
  const item = makeCartItem(name, price);
  shoppingCart.update(function (cart) {
    return addItem(cart, item);
  });
}

shoppingCart.addWatcher(updateShippingIcons);
cartTotal.addWatcher(setCartTotalDom);
cartTotal.addWatcher(updateTaxDom);
