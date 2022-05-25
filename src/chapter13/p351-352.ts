import { map, objectSet, reduce } from "@src/chapter13/util";

interface Recommendation {
  name: string;
  position: string;
}

interface Evaluation {
  name: string;
  position: string;
  score: number;
}

type Roaster = Record<Evaluation["position"], string>;

declare function scorePlayer(name: string, position: string);

const employeeNames: string[] = [];

declare function recommendPosition(name: string);
const recommendtations = map(employeeNames, function (name) {
  return {
    name,
    position: recommendPosition(name)
  };
});
const recommendations: Recommendation[] = [];

// TODO: objectSet의 타이핑이 잘못되었다.
const evaluations = map<Recommendation, Evaluation>(recommendations, function (rec) {
  return objectSet(rec as Evaluation, "score", scorePlayer(rec.name, rec.position));
});

declare function sortBy<T>(array: T[], f: (elem: T) => any);
declare function reverse<T>(array: T[]);
const evaluationsAscending = sortBy(evaluations, function (evaluation) {
  return evaluation.score;
});

const evaluationsDescending = reverse(evaluationsAscending);

const roaster = reduce(evaluations, {} as Roaster, function (roaster, evaluation) {
  const position = evaluation.position;
  if (roaster[position]) return roaster;
  return objectSet(roaster, position, eval.name);
});
