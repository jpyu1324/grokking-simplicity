import { Item } from "@src/chapter12/type";
import { forEach } from "@src/chapter12/util";

export default {};

function reduce<T, U>(array: T[], init: U, f: (acc: U, elem: T) => U): U {
  let result = init;
  forEach(array, function (element) {
    result = f(result, element);
  });
  return result;
}

interface Customer {
  purchase: Item[];
}

function countAllPurchases(customers: Customer[]) {
  return reduce(customers, 0, function (total, customer) {
    return total + customer.purchase.length;
  });
}

function concatString(strings: string[]) {
  return reduce(strings, "", function (accum, string) {
    return accum + string;
  });
}
