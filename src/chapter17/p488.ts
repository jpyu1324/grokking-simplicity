export default {};
export function Cut(num, callback) {
  let numFinished = 0;
  return function () {
    numFinished += 1;
    if (numFinished === num) {
      callback();
    }
  };
}
