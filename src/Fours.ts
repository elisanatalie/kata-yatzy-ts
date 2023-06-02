export function fours(...p: number[]): number {
  var sum;
  sum = 0;
  for (let at = 0; at != 5; at++) {
    if (p[at] == 4) {
      sum += 4;
    }
  }
  return sum;
}
