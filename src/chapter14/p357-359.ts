import { objectSet } from "@src/chapter14/util";
import { extend } from "lodash";

export default {};

function update<T extends Object, R extends keyof T>(object: T, key: R, modify: (arg: any) => T[R]) {
  const value = object[key];
  const newValue = modify(value);
  const newObject = objectSet(object, key, newValue);
  return newObject;
}

const employee = {
  name: "Kim",
  salary: 120000
};

function raise10Percent(salary: number) {
  return salary * 1.1;
}

function foo() {
  update(employee, "salary", raise10Percent);
}
