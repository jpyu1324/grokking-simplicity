// before
function before() {
  const a = [1, 2, 3, 4];
  const b = a.shift();
  console.log(b); // 1
  console.log(a); // [2, 3, 4]
}

function firstElement<T>(array: T[]): T {
  return array[0];
}

function dropFirst_before<T>(array: T[]): void {
  array.shift();
}

/*========================================== */
// solution 1

function dropFirst_solution1<T>(array: T[]): T[] {
  const arrayCopy = array.slice();
  arrayCopy.shift();
  return arrayCopy;
}

// solution 2
function shift<T>(array: T[]) {
  const arrayCopy = array.slice();
  const first = arrayCopy.shift();
  return {
    first,
    array: arrayCopy
  };
}

// solution 3
function shift2<T>(array: T[]) {
  return {
    first: firstElement(array),
    array: dropFirst_solution1(array)
  };
}

export default {};
