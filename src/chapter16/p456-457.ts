export default {};

declare function updateTotalDom(total);
declare function calcCartTotal(cart, callback);

function Queue(worker) {
  const queueItems: any[] = [];
  let working = false;

  function runNext() {
    if (working) {
      return;
    }
    if (queueItems.length === 0) {
      return;
    }
    working = true;
    const cart = queueItems.shift();

    worker(cart, function () {
      working = false;
      runNext();
    });
  }

  return function (cart) {
    queueItems.push(cart);
    setTimeout(runNext, 0);
  };
}

function calcCartWorker(cart, done) {
  calcCartTotal(cart, function (total) {
    updateTotalDom(total);
    done(total);
  });
}

const updateTotalQueue = Queue(calcCartWorker);
