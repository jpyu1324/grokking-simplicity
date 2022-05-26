import { dropFirst } from "@src/chapter14/util";
import { update } from "lodash";

export default {};

function nestedUpdate<T extends Object>(object: T, keys: any[], modify): T {
  if (keys.length === 0) {
    return modify(object);
  }

  const key1 = keys[0];
  const restOfKeys = dropFirst(keys);
  return update(object, key1, function (value1) {
    return nestedUpdate(value1, restOfKeys, modify);
  });
}
