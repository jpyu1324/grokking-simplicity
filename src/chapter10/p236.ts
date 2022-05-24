import { Cart } from "@src/chapter10/type";
import { objectSet } from "@src/chapter10/util";

export default {};

function setPriceByName(cart: Cart, name: string, price: number) {
  const item = cart[name];
  const newItem = objectSet(item, "price", price);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setQuantityByName(cart: Cart, name: string, quantity: number) {
  const item = cart[name];
  const newItem = objectSet(item, "quantity", quantity);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setShippingByName(cart: Cart, name: string, shipping: boolean) {
  const item = cart[name];
  const newItem = objectSet(item, "shipping", shipping);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setTaxByName(cart: Cart, name: string, tax: number) {
  const item = cart[name];
  const newItem = objectSet(item, "tax", tax);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}
