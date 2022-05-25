import { forEach } from "@src/chapter12/util";

export default {};

function filter<T>(array: T[], f: (args: T) => boolean): T[] {
  const newArray: T[] = [];
  forEach(array, (element) => {
    if (f(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}
