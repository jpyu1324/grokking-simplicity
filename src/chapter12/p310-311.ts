import { reduce } from "@src/chapter12/util";
export default {};

function min(numbers: number[]) {
  return reduce(numbers, Number.MAX_VALUE, function (mmin, number) {
    return mmin < number ? mmin : number;
  });
}

function max(numbers: number[]) {
  return reduce(numbers, Number.MIN_VALUE, function (mmax, number) {
    return mmax > number ? mmax : number;
  });
}
