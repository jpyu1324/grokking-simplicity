import { filter, map, maxKey } from "@src/chapter13/util";

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
    return maxKey<Item>(customer.purchases, { total: 0 }, function (purchase) {
      return purchase.total;
    });
  });

  return biggestPurchases;
}

// after
function biggestPurchasesCustomers_after(customers: Customer[]) {
  const bestCustomers = filter(customers, isGoodCustomer);

  const biggestPurchases = map<Customer, Item>(bestCustomers, getBiggestPurchase);

  return biggestPurchases;
}

function isGoodCustomer(customer: Customer) {
  return customer.purchases.length >= 3;
}

function getBiggestPurchase(customer: Customer) {
  return maxKey(customer.purchases, { total: 0 }, getPurchaseTotal);
}

function getPurchaseTotal(purchase: Item) {
  return purchase.total;
}
