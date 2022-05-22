function push<T>(array: T[], elem: T): T[] {
  const copy = array.slice();
  copy.push(elem);
  return copy;
}

function addContact(mailingList: String[], email: String) {
  return push(mailingList, email);
}

function arraySet<T>(array: T[], idx: number, value: T): T[] {
  const copy = array.slice();
  copy[idx] = value;
  return copy;
}
