function withObjectCopy<T extends Object>(
  object: T,
  modify: (copy: T) => void
) {
  const copy = Object.assign({}, object);
  modify(copy);
  return copy;
}

function objectSet<T extends Object>(object: T, key: keyof T, value) {
  return withObjectCopy(object, function (copy) {
    copy[key] = value;
  });
}

function objectDelete<T extends Object>(object: T, key: keyof T) {
  return withObjectCopy(object, function (copy) {
    delete copy[key];
  });
}

export default {};
