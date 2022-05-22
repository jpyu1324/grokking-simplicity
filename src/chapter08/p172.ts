import { Item } from "@src/chapter08/type";
declare function addItem(cart: Item[], item: Item);

function freeTieClip(cart: Item[]) {
  let hasTie = false;
  let hasTieClip = false;
  cart.forEach((item) => {
    if (item.name === "tie") {
      hasTie = true;
    }
    if (item.name === "tie clip") {
      hasTieClip = true;
    }
  });
  if (hasTie && !hasTieClip) {
    const tieClip: Item = { name: "tie clip", price: 0, quantity: 1 };
    return addItem(cart, tieClip);
  }
}
