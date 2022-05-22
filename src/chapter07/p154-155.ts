import { deepCopy } from "@src/chapter07/util";

interface Employee {}
interface PayrollCheck {}

let payrollChecks: PayrollCheck[] = [];

function payrollCalc(employees: Employee[]) {
  return payrollChecks;
}

function payrollCalcSafe(employees: Employee[]) {
  const copy = deepCopy(employees);
  const payrollChecks = payrollCalc(copy);
  return deepCopy(payrollChecks);
}

const userChanges = {
  observers: new Array(),
  subscribe: function (cb) {
    this.observers.push(cb);
  }
};

function processUser(user) {}

userChanges.subscribe((user) => {
  const userCopy = deepCopy(user);
  processUser(userCopy);
});
