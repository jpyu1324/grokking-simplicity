import { filter } from "@src/chapter12/util";

export default {};
interface Customer {
  id: number;
}

const customers: Customer[] = [];

const testGroup = filter(customers, function (customer) {
  return customer.id % 3 === 0;
});

const nonTestGroup = filter(customers, function (customer) {
  return customer.id % 3 !== 0;
});
