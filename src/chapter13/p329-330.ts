import { map, reduce } from "@src/chapter13/util";
export default {};

interface Item {
  total: number;
}
interface Customer {
  purchases: Item[];
}

function average(numbers: number[]) {
  return reduce(numbers, 0, plus) / numbers.length;
}

function plus(a: number, b: number) {
  return a + b;
}

function averagePurchaseTotals(customers: Customer[]) {
  return map(customers, function (customer) {
    const purchaseTotals = map(customer.purchases, function (purchase) {
      return purchase.total;
    });
    return average(purchaseTotals);
  });
}
