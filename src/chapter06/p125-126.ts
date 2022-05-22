function before() {
  const a = [1, 2, 3, 4];
  const b = a.pop();
  console.log(b);
  console.log(a);
}

// 1. Read & Write
function lastElement<T>(array: T[]) {
  return array[array.length - 1];
}

function dropLast<T>(array: T[]) {
  const arrayCopy = array.slice();
  arrayCopy.pop();
  return arrayCopy;
}

// 2. Return Two Values
function pop<T>(array: T[]) {
  const arrayCopy = array.slice();
  const first = arrayCopy.pop();
  return {
    first: first,
    array: arrayCopy
  };
}
