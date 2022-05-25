import { map, reduce } from "@src/chapter13/util";

// 절차형 코드
let answer: number[] = [];
const window_ = 5;

function foo(array: number[]) {
  for (let i = 0; i < array.length; ++i) {
    let sum = 0;
    let count = 0;
    for (let j = 0; j < window_; ++j) {
      const idx = i + j;
      if (idx < array.length) {
        sum += array[idx];
        count += 1;
      }
    }
    answer.push(sum / count);
  }
}

// 함수형 코드
function bar(array: number[]) {
  const indices = range(0, array.length);
  const windows = map(indices, function (i) {
    return array.slice(i, i + window_);
  });
  answer = map(windows, average);
}

function range(start: number, end: number) {
  const ret: number[] = [];
  for (let i = start; i < end; ++i) {
    ret.push(i);
  }
  return ret;
}

function average(numbers: number[]) {
  return reduce(numbers, 0, plus) / numbers.length;
}

function plus(a: number, b: number) {
  return a + b;
}
