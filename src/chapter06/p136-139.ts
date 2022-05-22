import { Item } from "@src/chapter06/type";

function objectSet<T extends Object>(
  object: T,
  key: keyof T,
  value: T[keyof T]
) {
  const copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function setPrice(item: Item, newPrice: number) {
  return objectSet(item, "price", newPrice);
}

function setQuantity(item: Item, newQuantity: number) {
  return objectSet(item, "quantity", newQuantity);
}

function objectDelete<T extends Object, K extends keyof T>(
  object: T,
  key: K
): Omit<T, K> {
  const copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}
