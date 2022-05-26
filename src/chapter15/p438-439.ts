export default {};

declare function washAjax(dishes, callback);
declare function updateDishesDom(total);

const plates = [];
const forks = [];
const cups = [];
let total = 0;
// before
function doDishes() {
  total = 0;
  washAjax(plates, function () {
    total += plates.length;
    washAjax(forks, function () {
      total += forks.length;
      washAjax(cups, function () {
        total += cups.length;
        updateDishesDom(total);
      });
    });
  });
}

// after
function doDishes_after(plates, forks, cups) {
  let total = 0;
  washAjax(plates, function () {
    total += plates.length;
    washAjax(forks, function () {
      total += forks.length;
      washAjax(cups, function () {
        total += cups.length;
        updateDishesDom(total);
      });
    });
  });
}
