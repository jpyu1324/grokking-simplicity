import {
  addItem,
  calcTotal,
  removeItemByName
} from "@src/chapter08/result/basic/cart";
import { makeCartItem } from "@src/chapter08/result/basic/general";
import { getsFreeShippingWithItem } from "@src/chapter08/result/business/cart";
import { calcTax } from "@src/chapter08/result/business/general";
import { deepCopy } from "@src/chapter08/result/infra/copyOnWrite";
import { Button, Item } from "@src/chapter08/type";

let shoppingCart: Item[] = [];

// action
export function addItemToCart(name: string, price: number, quantity: number) {
  shoppingCart = addItem(shoppingCart, makeCartItem(name, price, quantity));
  const total = calcTotal(shoppingCart);
  setCartTotalDom(shoppingCart, total);
  updatesShippingIcons(shoppingCart);
  updateTaxDom(total);
  shoppingCart = blackFridayPromotionSafe(shoppingCart);
}

export function deleteHandler(name: string) {
  shoppingCart = removeItemByName(shoppingCart, name);
  const total = calcTotal(shoppingCart);
  setCartTotalDom(shoppingCart, total);
  updatesShippingIcons(shoppingCart);
  updateTaxDom(total);
}

function updatesShippingIcons(cart: Item[]) {
  // 구매하기 버튼 관련 동작
  const buyButtons = getBuyButtonsDom(cart);
  buyButtons.forEach((button) => {
    const item = button.item;
    // cart와 item 관련된 동작
    const hasFreeShopping = getsFreeShippingWithItem(cart, item);
    // DOM 관련 동작
    setFreeShippingIcon(button, hasFreeShopping);
  });
}

function blackFridayPromotion(cart: Item[]): void {
  console.log("blah blah ", cart);
}

function blackFridayPromotionSafe(cart: Item[]) {
  const cartCopy = deepCopy(cart);
  blackFridayPromotion(cartCopy);
  return deepCopy(cartCopy);
}

function setFreeShippingIcon(button: Button, isShown: boolean) {
  if (isShown) {
    button.showFreeShippingIcon();
  } else {
    button.hideFreeShippingIcon();
  }
}

function updateTaxDom(total: number) {
  setTaxDom(calcTax(total));
}

function getBuyButtonsDom(cart: Item[]) {
  return cart.map((item) => new Button(item));
}

function setTaxDom(tax: number) {
  console.log({ tax });
}

function setCartTotalDom(cart: Item[], total: number) {
  console.log({ cart, total });
}
