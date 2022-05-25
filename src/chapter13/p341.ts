import { forEach, map } from "@src/chapter13/util";

export default {};

// 특정 필드 값 가져오기
function pluck<T extends Object>(array: T[], field: keyof T) {
  return map(array, function (object) {
    return object[field];
  });
}

// 특정 함수 값 call
function invokeMap<T extends Record<string, Function>>(array: T[], method: keyof T) {
  return map(array, function (object) {
    return object[method]();
  });
}

// 배열 안에 배열을 뺀다.
function flat<T extends Array<any>>(arrays: T[]) {
  const ret: T[] = [];
  forEach(arrays, function (array) {
    forEach(array, function (element) {
      ret.push(element);
    });
  });
  return ret;
}

function flatMap<T, U>(array: T[], f: (args: T) => U[]) {
  return flat(map(array, f));
}

function frequenciesBy<T>(array: T[], f: (arg: T) => any): Object {
  const ret = {};
  forEach(array, function (element) {
    const key = f(element);
    if (ret[key]) ret[key] += 1;
    else ret[key] = 1;
  });
  return ret;
}

function groupBy<T>(array: T[], f): Object {
  const ret = {};
  forEach(array, function (element) {
    const key = f(element);
    if (ret[key]) ret[key].push(element);
    else ret[key] = [element];
  });
  return ret;
}

const groups = groupBy([1, 2, 3, 4, 5, 6, 7], (elem) => elem % 2);
