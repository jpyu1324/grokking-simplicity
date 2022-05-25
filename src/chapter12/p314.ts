import { reduce } from "@src/chapter12/util";
export default {};

function map<T, U>(array: T[], f: (args: T) => U): U[] {
  return reduce(array, new Array<U>(), function (acc, elem) {
    acc.push(f(elem));
    return acc;
  });
}

function filter<T>(array: T[], f: (args: T) => boolean): T[] {
  return reduce(array, new Array<T>(), function (acc, elem) {
    if (f(elem)) {
      acc.push(elem);
    }
    return acc;
  });
}
