interface User {}
declare function saveUserData(user: User);
declare function logToSnapErrors(error: Error);

function foo(user: User) {
  try {
    saveUserData(user);
  } catch (error) {
    if (error instanceof Error) {
      logToSnapErrors(error);
    }
  }
}

//////////////////////////
function withLogging(f: Function, ...args: any[]) {
  try {
    f(...args);
  } catch (error) {
    error instanceof Error && logToSnapErrors(error);
  }
}

withLogging(function (user: User) {
  saveUserData(user);
}, {});

export default {};
