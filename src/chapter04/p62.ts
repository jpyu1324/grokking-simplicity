import { Item } from "@src/chapter04/type";

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
}

function setCartTotalDom() {
  console.log({ shoppingCart, shoppingCartTotal });
}
