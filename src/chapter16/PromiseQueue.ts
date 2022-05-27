interface QueueItem {
  data: any;
  callback: Function;
}

type Worker = (data: any) => Promise<any>;
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

    // prettier-ignore
    worker(item.data)
    .then(function (val) {
      working = false;
      setTimeout(item.callback, 0, val);
      runNext();
    }).catch(console.log);
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

declare function calcCartTotal(cart, callback);
declare function updateTotalDom(total);

function calcCartTotalPromise(cart) {
  return new Promise<number>(function (resolve, reject) {
    calcCartTotal(cart, function (total: number) {
      resolve(total);
    });
  });
}

function calcCartWorker(cart) {
  // prettier-ignore
  return calcCartTotalPromise(cart)
  .then(function (total) {
    updateTotalDom(total);
    return total;
  }).catch(console.log);
}

const updateTotalQueue = DroppingQueue(1, calcCartWorker);

export default DroppingQueue;
