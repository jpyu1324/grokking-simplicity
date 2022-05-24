function when(test: boolean, then: () => void) {
  if (test) {
    then();
  }
}

function IF(test, then, ELSE) {
  return test ? then() : ELSE();
}

export default {};
