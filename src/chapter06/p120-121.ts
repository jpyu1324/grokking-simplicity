type Email = string;
let mailingList: Email[] = [];

// before
function addContract_before(email: Email) {
  mailingList.push(email);
}

function submitFormHandler_before(event: Event) {
  const form = event.target as HTMLFormElement;
  const email = form.elements["email"].value;
  addContract_before(email);
}

/*========================================== */
// after
function addContract_after(mailingList: Email[], email: Email) {
  const listCopy = mailingList.slice();
  listCopy.push(email);
  return listCopy;
}

function submitFormHandler_after(event: Event) {
  const form = event.target as HTMLFormElement;
  const email = form.elements["email"].value;
  mailingList = addContract_after(mailingList, email);
}
