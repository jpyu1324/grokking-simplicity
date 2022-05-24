interface User {}
declare function saveUserData(user: User): boolean;
declare function logToSnapErrors(error: Error);

// before
function withLogging(f: Function, ...args: any[]) {
  try {
    f(...args);
  } catch (error) {
    error instanceof Error && logToSnapErrors(error);
  }
}

// after

// type Parameters<T extends (...args: any[]) => any> = T extends (
//   ...args: infer P
// ) => any
//   ? P
//   : never;

// type ReturnType<T extends (...args: any[]) => any> = T extends (
//   ...args: any[]
// ) => infer R
//   ? R
//   : any;

function wrapLogging<T extends (...arg: any[]) => any>(
  f: T
): (...arg: Parameters<T>) => ReturnType<T> {
  return function (...arg: Parameters<T>) {
    try {
      return f(...arg);
    } catch (error) {
      error instanceof Error && logToSnapErrors(error);
    }
  };
}

function add(a: number, b: number, c: number, d: number) {
  return a + b + c + d;
}

const saveUserDataWithLogging = wrapLogging(saveUserData);

const addWithLogging = wrapLogging(add);

export default {};
