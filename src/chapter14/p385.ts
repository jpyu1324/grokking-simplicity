import { Cart } from "@src/chapter14/type";
import { nestedUpdate } from "@src/chapter14/util";

export default {};

function incrementSizeByName(cart: Cart, name: string) {
  return nestedUpdate(cart, [name, "options", "size"], function (size) {
    return size + 1;
  });
}
