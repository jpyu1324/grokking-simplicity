import { Button, Item } from "@src/chapter04/type";

let shoppingCart: Item[] = [];
let shoppingCartTotal: number = 0;

function addItemToCart(name: string, price: number) {
  shoppingCart = addItem(shoppingCart, name, price);
  calcCartTotal(shoppingCart);
}

function addItem(cart: Item[], name: string, price: number) {
  const newCart = cart.slice();
  newCart.push({
    name,
    price
  });
  return newCart;
}

function calcCartTotal(cart: Item[]) {
  const total = calcTotal(cart);
  setCartTotalDom(cart, total);
  // param으로 넘김
  updatesShippingIcons(cart);
  updateTaxDom(total);
  shoppingCartTotal = total;
}

function calcTotal(cart: Item[]): number {
  return cart.reduce((acc, curr) => acc + curr.price, 0);
}

// 전역변수 제거 후 param으로 받음
function updatesShippingIcons(cart: Item[]) {
  const buyButtons = getBuyButtonsDom(cart);
  buyButtons.forEach((button) => {
    const item = button.item;
    const newCart = addItem(cart, item.name, item.price);
    if (getsFreeShipping(newCart)) {
      button.showFreeShippingIcon();
    } else {
      button.hideFreeShippingIcon();
    }
  });
}

function getsFreeShipping(cart: Item[]) {
  return calcTotal(cart) >= 20;
}

function updateTaxDom(total: number) {
  setTaxDom(calcTax(total));
}

function calcTax(amount: number): number {
  return amount * 0.1;
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
