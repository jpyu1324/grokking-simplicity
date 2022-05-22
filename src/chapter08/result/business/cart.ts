import { addItem, calcTotal, isInCart } from "@src/chapter08/result/basic/cart";
import { makeCartItem } from "@src/chapter08/result/basic/general";
import { Item } from "@src/chapter08/type";

export function freeTieClip(cart: Item[]) {
  let hasTie = isInCart(cart, "tie");
  let hasTieClip = isInCart(cart, "tie clip");

  if (hasTie && !hasTieClip) {
    const tieClip: Item = makeCartItem("tie clip", 0, 1);
    return addItem(cart, tieClip);
  }
}

export function getsFreeShippingWithItem(cart: Item[], item: Item) {
  const newCart = addItem(cart, item);
  return getsFreeShipping(newCart);
}

export function getsFreeShipping(cart: Item[]) {
  return calcTotal(cart) >= 20;
}
