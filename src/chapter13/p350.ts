import { map, objectSet } from "@src/chapter13/util";

export default {};
interface Recommendation {
  name: string;
  position: string;
  score?: number;
}

declare function scorePlayer(name: string, position: string);
const recommendations: Recommendation[] = [];

const evaluations = map(recommendations, function (rec) {
  return objectSet(rec, "score", scorePlayer(rec.name, rec.position));
});
