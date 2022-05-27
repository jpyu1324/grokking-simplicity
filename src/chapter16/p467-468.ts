import { DroppingQueue } from "@src/chapter16/p465-466";

export default {};

const document = {};

declare function saveAjax(document, callback);

const saveAjaxQueued = DroppingQueue(1, saveAjax);

let saveButton: HTMLButtonElement = new HTMLButtonElement();

saveButton.addEventListener("click", function () {
  saveAjaxQueued(document);
});
