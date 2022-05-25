import { reduce } from "@src/chapter13/util";

export default {};

function maxKey<T>(array: T[], init: T, f: (args: T) => any): T {
  return reduce(array, init, function (biggestSoFar, element) {
    if (f(biggestSoFar) > f(element)) {
      return biggestSoFar;
    } else {
      return element;
    }
  });
}

function max<T, U extends T>(array: T[], init: U) {
  return maxKey(array, init, function (x) {
    return x;
  });
}
