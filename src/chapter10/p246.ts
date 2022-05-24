import { objectSet } from "@src/chapter10/util";
import { Cart } from "@src/chapter10/type";

const fields = ["size", "quantity"];

function incrementFieldByName(cart: Cart, name: keyof Cart, field: any) {
  const item = cart[name];
  if (!fields.includes(field)) {
    throw `This item field cannot be incremented: '${field}'.`;
  }
  const size = item[field];
  const newSize = size + 1;
  const newItem = objectSet(item, field, newSize);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}
