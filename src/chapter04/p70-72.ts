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
  shoppingCartTotal = calcTotal(shoppingCart); // 함수로 추출
  setCartTotalDom();
  updatesShippingIcons();
  updateTaxDom();
}

// 전역 변수 암묵적 입출력 제거
function calcTotal(cart: Item[]): number {
  return cart.reduce((acc, curr) => acc + curr.price, 0);
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
