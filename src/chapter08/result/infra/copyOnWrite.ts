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

export function objectSet<T extends Object>(
  object: T,
  key: keyof T,
  value: T[keyof T]
) {
  const copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

export function deepCopy<T extends Object>(object: T) {
  return _.cloneDeep(object);
}

export function arrayGet<T>(array: T[], idx: number) {
  return array[idx];
}
