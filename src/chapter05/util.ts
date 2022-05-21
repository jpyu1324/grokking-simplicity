export function addElementLast<T>(array: T[], elem: T) {
  const newArray = array.slice();
  newArray.push(elem);
  return newArray;
}
