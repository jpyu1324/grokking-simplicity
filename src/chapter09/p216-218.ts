import { Button, Item } from "@src/chapter09/type";
import {
  deepCopy,
  objectSet,
  removeItems,
  arraySet,
  objectDelete
} from "@src/chapter09/util";

// let shoppingCart: Item[] = [];
type Cart = Object & Record<string, any>;
let shoppingCart: Cart = {};

// action
function addItemToCart(name: string, price: number, quantity: number) {
  const item = makeCartItem(name, price, quantity);
  shoppingCart = addItem(shoppingCart, item);
  const total = calcTotal(shoppingCart);
  setCartTotalDom(shoppingCart, total);
  updatesShippingIcons(shoppingCart);
  updateTaxDom(total);
  shoppingCart = blackFridayPromotionSafe(shoppingCart);
  logAddToCart("userId", item);
}

function addItem(cart: Cart, item: Item) {
  return objectSet(cart, item.name, item);
}

function makeCartItem(name: string, price: number, quantity: number): Item {
  return {
    name,
    price,
    quantity
  };
}

function calcTotal(cart: Cart): number {
  const names = Object.keys(cart);
  return names
    .map((name) => cart[name])
    .reduce((total, item) => total + item.price * item.quantity, 0);
}

function updatesShippingIcons(cart: Cart) {
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

function getsFreeShippingWithItem(cart: Cart, item: Item) {
  const newCart = addItem(cart, item);
  return getsFreeShipping(newCart);
}

function setFreeShippingIcon(button: Button, isShown: boolean) {
  if (isShown) {
    button.showFreeShippingIcon();
  } else {
    button.hideFreeShippingIcon();
  }
}

// calc
function getsFreeShipping(cart: Cart) {
  return calcTotal(cart) >= 20;
}

// action
function updateTaxDom(total: number) {
  setTaxDom(calcTax(total));
}

// calc
function calcTax(amount: number): number {
  return amount * 0.1;
}

// action
function getBuyButtonsDom(cart: Cart) {
  const items = Object.values(cart);
  return items.map((item) => new Button(item));
}

// action
function setTaxDom(tax: number) {
  console.log({ tax });
}

// action
function setCartTotalDom(cart: Cart, total: number) {
  console.log({ cart, total });
}

// copy-on-write
function removeItemByName(cart: Cart, name: string) {
  return objectDelete(cart, name);
}

function indexOfItem(cart: Item[], name: string) {
  return cart.findIndex((item) => item.name === name);
}

function deleteHandler(name: string) {
  shoppingCart = removeItemByName(shoppingCart, name);
  const total = calcTotal(shoppingCart);
  setCartTotalDom(shoppingCart, total);
  updatesShippingIcons(shoppingCart);
  updateTaxDom(total);
}

function setPriceByName(cart: Item[], name: string, price: number): Item[] {
  const idx = indexOfItem(cart, name);
  if (idx != -1) {
    return arraySet(cart, idx, setPrice(arrayGet(cart, idx), price));
  }
  return cart;
}

function setPrice(item: Item, newPrice: number): Item {
  return objectSet(item, "price", newPrice);
}

function setQuantityByName(
  cart: Item[],
  name: string,
  quantity: number
): Item[] {
  const cartCopy = cart.slice();
  const idx = cartCopy.findIndex((item) => item.name === name);
  if (idx != -1) {
    cartCopy[idx] = objectSet(cartCopy[idx], "quantity", quantity);
  }
  return cartCopy;
}

function blackFridayPromotion(cart: Cart): void {
  console.log("blah blah ", cart);
}

function blackFridayPromotionSafe(cart: Cart) {
  const cartCopy = deepCopy(cart);
  blackFridayPromotion(cartCopy);
  return deepCopy(cartCopy);
}

function isInCart(cart: Cart, name: string) {
  return cart.hasOwnProperty(name);
}

function freeTieClip(cart: Cart) {
  let hasTie = isInCart(cart, "tie");
  let hasTieClip = isInCart(cart, "tie clip");

  if (hasTie && !hasTieClip) {
    const tieClip: Item = makeCartItem("tie clip", 0, 1);
    return addItem(cart, tieClip);
  }
}

function arrayGet(array, idx) {
  return array[idx];
}

function getsWatchDiscount(cart: Cart) {
  const total = calcTotal(cart);
  const hasWatch = isInCart(cart, "watch");
  return total > 100 && hasWatch;
}

function logAddToCart(userId: string, item: Item) {
  console.log({ userId, item });
}
