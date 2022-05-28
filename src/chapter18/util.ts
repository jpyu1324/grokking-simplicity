import _ from "lodash";

export function addElementLast<T>(array: T[], elem: T) {
  const newArray = array.slice();
  newArray.push(elem);
  return newArray;
}

export function removeItems<T>(array: T[], idx: number, count: number) {
  const copy = array.slice();
  copy.splice(idx, count);
  return copy;
}

export function deepCopy<T extends Object>(object: T) {
  return _.cloneDeep(object);
}

export function arraySet<T>(array: T[], idx: number, value: T): T[] {
  return withArrayCopy(array, function (copy) {
    copy[idx] = value;
  });
}

export function withArrayCopy<T>(array: T[], modify: (copy: T[]) => void) {
  const copy = array.slice();
  modify(copy);
  return copy;
}

export function push<T>(array: T[], elem: T) {
  return withArrayCopy(array, function (copy) {
    copy.push(elem);
  });
}

export function dropLast<T>(array: T[]) {
  return withArrayCopy(array, function (copy) {
    copy.pop();
  });
}

export function dropFirst<T>(array: T[]) {
  return withArrayCopy(array, function (copy) {
    copy.shift();
  });
}

export function withObjectCopy<T extends Object>(object: T, modify: (copy: T) => void) {
  const copy = Object.assign({} as T, object);
  modify(copy);
  return copy;
}

export function objectSet<T extends Object>(object: T, key: any, value) {
  return withObjectCopy(object, function (copy) {
    copy[key] = value;
  });
}

export function objectDelete<T extends Object>(object: T, key: keyof T) {
  return withObjectCopy(object, function (copy) {
    delete copy[key];
  });
}

export function forEach<T>(array: T[], f: (args: T) => void): void {
  array.forEach(f);
}

export function map<T, U>(array: T[], f: (args: T) => U): U[] {
  const newArray: U[] = [];
  forEach(array, function (element) {
    newArray.push(f(element));
  });
  return newArray;
}

export function filter<T>(array: T[], f: (args: T) => boolean): T[] {
  const newArray: T[] = [];
  forEach(array, (element) => {
    if (f(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}

export function reduce<T, U>(array: T[], init: U, f: (acc: U, elem: T) => U): U {
  let result = init;
  forEach(array, function (element) {
    result = f(result, element);
  });
  return result;
}

export function maxKey<T>(array: T[], init: T, f: (args: T) => any): T {
  return reduce(array, init, function (biggestSoFar, element) {
    if (f(biggestSoFar) > f(element)) {
      return biggestSoFar;
    } else {
      return element;
    }
  });
}

export function max<T, U extends T>(array: T[], init: U) {
  return maxKey(array, init, function (x) {
    return x;
  });
}

export function update<T extends Object, R extends keyof T>(object: T, key: R, modify: (arg: any) => T[R]) {
  const value = object[key];
  const newValue = modify(value);
  const newObject = objectSet(object, key, newValue);
  return newObject;
}

export function update2<T extends Object>(object: T, key1: keyof T, key2: any, modify: (arg: any) => any) {
  return update(object, key1, function (value1: T[keyof T]) {
    return update(value1, key2, modify);
  });
}

export function nestedUpdate<T extends Object>(object: T, keys: any[], modify): T {
  if (keys.length === 0) {
    return modify(object);
  }

  const key1 = keys[0];
  const restOfKeys = dropFirst(keys);
  return update(object, key1, function (value1) {
    return nestedUpdate(value1, restOfKeys, modify);
  });
}
