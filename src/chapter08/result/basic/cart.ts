import { indexOfItem, setPrice } from "@src/chapter08/result/basic/general";
import {
  addElementLast,
  arrayGet,
  objectSet,
  removeItems
} from "@src/chapter08/result/infra/copyOnWrite";
import { Item } from "@src/chapter08/type";

export function addItem(cart: Item[], item: Item) {
  return addElementLast(cart, item);
}

export function setPriceByName(
  cart: Item[],
  name: string,
  price: number
): Item[] {
  const idx = indexOfItem(cart, name);
  if (idx != -1) {
    return arraySet(cart, idx, setPrice(arrayGet(cart, idx), price));
  }
  return cart;
}

export function isInCart(cart: Item[], name: string) {
  return indexOfItem(cart, name) != -1;
}

export function calcTotal(cart: Item[]): number {
  return cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
}

export function removeItemByName(cart: Item[], name: string) {
  const idx = indexOfItem(cart, name);
  if (idx != -1) {
    return removeItems(cart, idx, 1);
  }
  return cart;
}

export function setQuantityByName(
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
