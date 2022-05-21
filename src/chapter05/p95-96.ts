import { Button, Item } from "@src/chapter04/type";

let shoppingCart: Item[] = [];

// action
function addItemToCart(name: string, price: number) {
  shoppingCart = addItem(shoppingCart, name, price);
  const total = calcTotal(shoppingCart);
  setCartTotalDom(shoppingCart, total);
  updatesShippingIcons(shoppingCart);
  updateTaxDom(total);
}

// calc
function addItem(cart: Item[], name: string, price: number) {
  const newCart = cart.slice();
  newCart.push({
    name,
    price
  });
  return newCart;
}

// calc
function calcTotal(cart: Item[]): number {
  return cart.reduce((acc, curr) => acc + curr.price, 0);
}

// action
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
