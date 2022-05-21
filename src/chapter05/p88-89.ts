import { Button, Item } from "@src/chapter04/type";

let shoppingCart: Item[] = [];
let shoppingCartTotal: number = 0;

function addItemToCart(name: string, price: number) {
  shoppingCart = addItem(shoppingCart, name, price);
  calcCartTotal();
}

function addItem(cart: Item[], name: string, price: number) {
  const newCart = cart.slice();
  newCart.push({
    name,
    price
  });
  return newCart;
}

function calcCartTotal() {
  shoppingCartTotal = calcTotal(shoppingCart);
  setCartTotalDom();
  updatesShippingIcons();
  updateTaxDom();
}

function calcTotal(cart: Item[]): number {
  return cart.reduce((acc, curr) => acc + curr.price, 0);
}

function updatesShippingIcons() {
  const buyButtons = getBuyButtonsDom();
  buyButtons.forEach((button) => {
    const item = button.item;
    const newCart = addItem(shoppingCart, item.name, item.price);
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

function updateTaxDom() {
  setTaxDom(calcTax(shoppingCartTotal));
}

function calcTax(amount: number): number {
  return amount * 0.1;
}

function getBuyButtonsDom() {
  return shoppingCart.map((item) => new Button(item));
}

function setTaxDom(tax: number) {
  console.log({ tax });
}

function setCartTotalDom() {
  console.log({ shoppingCart, shoppingCartTotal });
}