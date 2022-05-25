import { filter } from "@src/chapter13/util";

export default {};

interface Item {
  total: number;
}
interface Customer {
  purchases: Item[];
}

function bigSpenders(customers: Customer[]) {
  const withBigPurchases = filter(customers, hasBigPurchase);
  const with2OrMorePurchases = filter(withBigPurchases, has2OrMorePurchases);
  return with2OrMorePurchases;
}

function hasBigPurchase(customer: Customer) {
  return filter(customer.purchases, isBigPurchase).length > 0;
}

function isBigPurchase(purchase: Item) {
  return purchase.total >= 100;
}

function has2OrMorePurchases(customer: Customer) {
  return customer.purchases.length >= 2;
}
