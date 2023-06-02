export function twoPairs(d1: number, d2: number, d3: number, d4: number, d5: number): number {
  var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  counts[d1 - 1]++;
  counts[d2 - 1]++;
  counts[d3 - 1]++;
  counts[d4 - 1]++;
  counts[d5 - 1]++;
  var n = 0;
  var score = 0;
  for (let i = 0; i < 6; i += 1)
    if (counts[6 - i - 1] >= 2) {
      n++;
      score += 6 - i;
    }
  if (n == 2) return score * 2;
  else return 0;
}
