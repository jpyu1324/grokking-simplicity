import { Item } from "@src/chapter14/type";
import { update } from "@src/chapter14/util";
import { lowerCase } from "lodash";

export default {};

type Email = `${string}@${string}.${string}`;
interface User {
  firstName: string;
  lastName: string;
  email: Email;
  score?: number;
  logins?: number;
}

const user: User = {
  firstName: "Joe",
  lastName: "Nash",
  email: "JOE@EXAMPLE.COM"
};

update(user, "email", lowercase);

function lowercase(email: Email) {
  return lowerCase(email) as Email;
}

const item: Item = {
  name: "shoes",
  price: 7,
  quantity: 2,
  tax: 0,
  shipping: false,
  size: 1
};

function tenXQuantity(item: Item) {
  return update(item, "quantity", function (quantity: number) {
    return quantity * 10;
  });
}
