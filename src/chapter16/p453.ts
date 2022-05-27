export default {};

declare function costAjax(cart, callback);
declare function shippingAjax(cart, callback);
declare function updateTotalDom(total);
declare function addItem(cart, item);

let cart = [];
function calcCartTotal(cart, callback) {
  let total = 0;
  costAjax(cart, function (cost) {
    total += cost;
    shippingAjax(cart, function (shipping) {
      total += shipping;
      callback(total);
    });
  });
}

// closure version
function Queue() {
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
    calcCartTotal(cart, function (total) {
      updateTotalDom(total);
      working = false;
      runNext();
    });
  }

  return function (cart) {
    queueItems.push(cart);
    setTimeout(runNext, 0);
  };
}

const updateTotalQueue = Queue();

function addItemToCart(item) {
  cart = addItem(cart, item);
  updateTotalQueue(cart);
}

// class version

class QueueClass {
  private queueItems: any[];
  private working: boolean;

  public constructor() {
    this.queueItems = [];
    this.working = false;
  }

  public runNext() {
    if (this.working) {
      return;
    }
    if (this.queueItems.length === 0) {
      return;
    }
    this.working = true;
    const cart = this.queueItems.shift();
    calcCartTotal(cart, (total) => {
      updateTotalDom(total);
      this.working = false;
      this.runNext();
    });
  }

  public pushCart(cart) {
    this.queueItems.push(cart);
    setTimeout(this.runNext, 0);
  }
}

const queue = new QueueClass();
