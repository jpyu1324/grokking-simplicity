export default {};

declare function sendTextAjax(number, text);
function sendAddToCartText(number) {
  sendTextAjax(number, "Thanks for adding something to your cart. " + "Reply if you have any questions!");
}

export function JustOnce(action) {
  let alreadyCalled = false;
  return function (a, b, c) {
    if (alreadyCalled) return;
    alreadyCalled = true;
    return action(a, b, c);
  };
}
