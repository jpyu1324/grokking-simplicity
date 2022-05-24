import { Cart } from "@src/chapter10/type";
import { objectSet } from "@src/chapter10/util";

function increamentQuantityByName(cart: Cart, name: string) {
  const item = cart[name];
  const quantity = item["quantity"];
  const newQuantity = quantity + 1;
  const newItem = objectSet(item, "quantity", newQuantity);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

function incrementSizeByName(cart: Cart, name: string) {
  const item = cart[name];
  const size = item["size"];
  const newSize = size + 1;
  const newItem = objectSet(item, "size", newSize);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

function incrementFieldByName(cart: Cart, name: keyof Cart, field: any) {
  const item = cart[name];
  const size = item[field];
  const newSize = size + 1;
  const newItem = objectSet(item, field, newSize);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

export default {};
