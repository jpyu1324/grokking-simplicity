import { map } from "@src/chapter13/util";

export default {};

const employeeNames: string[] = [];

declare function recommendPosition(name: string);
const recommendtations = map(employeeNames, function (name) {
  return {
    name,
    position: recommendPosition(name)
  };
});
