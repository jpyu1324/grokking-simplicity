function makeAdder(n: number) {
  return function (x: number) {
    return n + x;
  };
}

const add2 = makeAdder(2);

export default {};
