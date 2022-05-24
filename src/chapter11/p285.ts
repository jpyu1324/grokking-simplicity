// TODO: incomplete parameters
function wrapIgnoreErrors<T extends (a1: any, a2: any, a3: any) => any>(
  f: T
): (...args: Parameters<T>) => ReturnType<T> {
  return function (a1, a2, a3) {
    try {
      return f(a1, a2, a3);
    } catch (error) {
      return null;
    }
  };
}

function add(a: number, b: number, c: number) {
  return a + b + c;
}

function hi(a: number) {}
const addWithIgnoreErrors = wrapIgnoreErrors(add);
const hiWithIgnoreErrors = wrapIgnoreErrors(hi);

export default {};
