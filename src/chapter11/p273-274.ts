// before

import { withArrayCopy } from "@src/chapter11/util";

function push<T>(array: T[], elem: T) {
  return withArrayCopy(array, function (copy) {
    copy.push(elem);
  });
}

function dropLast<T>(array: T[], elem: T) {
  return withArrayCopy(array, function (copy) {
    copy.pop();
  });
}

function dropFirst<T>(array: T[], elem: T) {
  return withArrayCopy(array, function (copy) {
    copy.shift();
  });
}
