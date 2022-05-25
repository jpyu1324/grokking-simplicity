import { reduce } from "@src/chapter12/util";
export default {};

function sum(numbers: number[]) {
  return reduce(numbers, 0, function (total, number) {
    return total + number;
  });
}

function product(numbers: number[]) {
  return reduce(numbers, 1, function (total, number) {
    return total * number;
  });
}
