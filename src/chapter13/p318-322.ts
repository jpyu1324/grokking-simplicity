import { filter, map, reduce } from "@src/chapter13/util";

export default {};
interface Item {
  total: number;
}
interface Customer {
  purchases: Item[];
}

// before
function biggestPurchasesCustomers(customers: Customer[]) {
  const bestCustomers = filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });

  const biggestPurchases = map(bestCustomers, function (customer) {
    return reduce<Item, Item>(customer.purchases, { total: 0 }, function (biggestSoFar, purchase) {
      if (biggestSoFar.total > purchase.total) {
        return biggestSoFar;
      } else {
        return purchase;
      }
    });
  });

  return biggestPurchases;
}

// after
function maxKey<T>(array: T[], init: T, f: (args: T) => any): T {
  return reduce(array, init, function (biggestSoFar, element) {
    if (f(biggestSoFar) > f(element)) {
      return biggestSoFar;
    } else {
      return element;
    }
  });
}

function biggestPurchasesCustomers_after(customers: Customer[]) {
  const bestCustomers = filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });

  const biggestPurchases = map(bestCustomers, function (customer) {
    return maxKey<Item>(customer.purchases, { total: 0 }, function (purchase) {
      return purchase.total;
    });
  });

  return biggestPurchases;
}
