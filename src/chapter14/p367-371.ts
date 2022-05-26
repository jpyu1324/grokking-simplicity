import { objectSet, update } from "@src/chapter14/util";

export default {};

interface Option {
  color: string;
  size: number;
}

interface Item {
  name: string;
  price: number;
  options: Option;
}

const shirt: Item = {
  name: "shirt",
  price: 13,
  options: {
    color: "blue",
    size: 3
  }
};

// before
function incrementSize(item: Item) {
  const newSize = item.options.size + 1;
  const newOptions = objectSet(item.options, "size", newSize);
  const newItem = objectSet(item, "options", newOptions);
  return newItem;
}

// after
function update2<T extends Object>(object: T, key1: keyof T, key2: any, modify: (arg: any) => any) {
  return update(object, key1, function (value1: T[keyof T]) {
    return update(value1, key2, modify);
  });
}

function incrementSize_after(item: Item) {
  return update2(item, "options", "size", function (size) {
    return size + 1;
  });
}
