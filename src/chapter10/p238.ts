import { Cart, Item } from "@src/chapter10/type";
import { objectSet } from "@src/chapter10/util";

export default {};

function setPriceByName(cart: Cart, name: string, price: number) {
  return setFieldByName(cart, name, "price", price);
}

function setQuantityByName(cart: Cart, name: string, quantity: number) {
  return setFieldByName(cart, name, "quantity", quantity);
}

function setShippingByName(cart: Cart, name: string, shipping: boolean) {
  return setFieldByName(cart, name, "shipping", shipping);
}

function setTaxByName(cart: Cart, name: string, tax: number) {
  return setFieldByName(cart, name, "tax", tax);
}

// TODO: incomplete typing.
function setFieldByName<T>(
  cart: T,
  name: keyof T,
  field: keyof T[keyof T],
  value: T[keyof T][keyof T[keyof T]]
): T {
  const item = cart[name];
  const newItem = objectSet(item, field, value);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}
