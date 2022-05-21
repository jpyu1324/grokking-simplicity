import { Button, Item } from "@src/chapter04/type";

const shoppingCart: Item[] = [];
let shoppingCartTotal: number = 0;

function addItemToCart(name: string, price: number) {
  shoppingCart.push({
    name,
    price
  });
  calcCartTotal();
}

function calcCartTotal() {
  shoppingCartTotal = shoppingCart.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  setCartTotalDom();
  updatesShippingIcons();
  updateTaxDom();
}

function updatesShippingIcons() {
  const buyButtons = getBuyButtonsDom();
  buyButtons.forEach((button) => {
    const item = button.item;
    if (item.price + shoppingCartTotal >= 20) {
      button.showFreeShippingIcon();
    } else {
      button.hideFreeShippingIcon();
    }
  });
}

function updateTaxDom() {
  setTaxDom(shoppingCartTotal * 0.1);
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
