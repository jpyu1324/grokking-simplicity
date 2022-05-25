import { objectSet, reduce } from "@src/chapter13/util";

export default {};

interface Evaluation {
  name: string;
  position: string;
  score: number;
}

type Roaster = Record<Evaluation["position"], string>;

const evaluations: Evaluation[] = [];
const roaster = reduce(evaluations, {} as Roaster, function (roaster, evaluation) {
  const position = evaluation.position;
  if (roaster[position]) return roaster;
  return objectSet(roaster, position, eval.name);
});
