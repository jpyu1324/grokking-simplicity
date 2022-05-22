import { objectSet } from "@src/chapter08/result/infra/copyOnWrite";
import { Item } from "@src/chapter08/type";

export function makeCartItem(
  name: string,
  price: number,
  quantity: number
): Item {
  return {
    name,
    price,
    quantity
  };
}

export function setPrice(item: Item, newPrice: number): Item {
  return objectSet(item, "price", newPrice);
}

export function indexOfItem(cart: Item[], name: string) {
  return cart.findIndex((item) => item.name === name);
}
