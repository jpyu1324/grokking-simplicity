import { Button, Item } from "@src/chapter06/type";
import { addElementLast, objectSet, removeItems } from "@src/chapter06/util";

let shoppingCart: Item[] = [];

// action
function addItemToCart(name: string, price: number) {
  shoppingCart = addItem(shoppingCart, makeCartItem(name, price));
  const total = calcTotal(shoppingCart);
  setCartTotalDom(shoppingCart, total);
  updatesShippingIcons(shoppingCart);
  updateTaxDom(total);
}

// calc
function addItem(cart: Item[], item: Item) {
  return addElementLast(cart, item);
}

function makeCartItem(name: string, price: number): Item {
  return {
    name,
    price
  };
}

// calc
function calcTotal(cart: Item[]): number {
  return cart.reduce((acc, curr) => acc + curr.price, 0);
}

// action
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

function getsFreeShippingWithItem(cart: Item[], item: Item) {
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
function getsFreeShipping(cart: Item[]) {
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
function getBuyButtonsDom(cart: Item[]) {
  return cart.map((item) => new Button(item));
}

// action
function setTaxDom(tax: number) {
  console.log({ tax });
}

// action
function setCartTotalDom(cart: Item[], total: number) {
  console.log({ cart, total });
}

// copy-on-write
function removeitemByName(cart: Item[], name: string) {
  const idx = cart.findIndex((item) => item.name === name);
  if (idx != -1) {
    return removeItems(cart, idx, 1);
  }
  return cart;
}

function deleteHandler(name: string) {
  shoppingCart = removeitemByName(shoppingCart, name);
  const total = calcTotal(shoppingCart);
  setCartTotalDom(shoppingCart, total);
  updatesShippingIcons(shoppingCart);
  updateTaxDom(total);
}

function setPriceByName(cart: Item[], name: string, price: number): Item[] {
  const cartCopy = cart.slice();
  const idx = cartCopy.findIndex((item) => item.name === name);
  if (idx != -1) {
    // 이 부분은 불변이라고 할 수 없다.
    cartCopy[idx] = setPrice(cartCopy[idx], price);
  }
  return cartCopy;
}

function setPrice(item: Item, newPrice: number): Item {
  return objectSet(item, "price", newPrice);
}
