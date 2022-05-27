export default {};

declare function updateTotalDom(total);
declare function calcCartTotal(cart, callback);

interface QueueItem {
  data: any;
  callback: Function;
}
type Worker = (data: any, callback: Function) => void;
export function DroppingQueue(max: number, worker: Worker) {
  const queueItems: QueueItem[] = [];
  let working = false;

  function runNext() {
    if (working) {
      return;
    }
    if (queueItems.length === 0) {
      return;
    }
    working = true;
    const item = queueItems.shift()!;

    worker(item.data, function (val) {
      working = false;
      setTimeout(item.callback, 0, val);
      runNext();
    });
  }

  return function (data: any, callback?: Function) {
    queueItems.push({
      data: data,
      callback: callback || function () {}
    });
    while (queueItems.length > max) {
      queueItems.shift();
    }
    setTimeout(runNext, 0);
  };
}

function calcCartWorker(cart, done: Function) {
  calcCartTotal(cart, function (total) {
    updateTotalDom(total);
    done(total);
  });
}

const updateTotalQueue = DroppingQueue(1, calcCartWorker);
