import { Item } from "@src/chapter12/type";

function forEach<T>(array: T[], f: (args: T) => void): void {
  array.forEach(f);
}

function map<T, U>(array: T[], f: (args: T) => U): U[] {
  const newArray: U[] = [];
  forEach(array, function (element) {
    newArray.push(f(element));
  });
  return newArray;
}

interface Customer {}
declare function emailForCustomer(
  customer: Customer,
  goods: Item[],
  bests: Item[]
): boolean;
function emailsForCustomers(
  customers: Customer[],
  goods: Item[],
  bests: Item[]
) {
  return map(customers, function (customer) {
    return emailForCustomer(customer, goods, bests);
  });
}

export default {};
