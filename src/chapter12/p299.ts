import { map } from "@src/chapter12/util";

interface Email {
  firstName: string;
  lastName: string;
  address: string;
}

interface Customer {
  firstName: string;
  lastName: string;
  address: string;
}

function customerToEmail(customers: Customer[]): Email[] {
  return map(customers, function (customer) {
    return {
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: customer.address
    };
  });
}

export default {};
