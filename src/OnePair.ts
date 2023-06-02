export function onePair(d1: number, d2: number, d3: number, d4: number, d5: number): number {
  var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  counts[d1 - 1]++;
  counts[d2 - 1]++;
  counts[d3 - 1]++;
  counts[d4 - 1]++;
  counts[d5 - 1]++;
  var at;
  for (at = 0; at != 6; at++) if (counts[6 - at - 1] >= 2) return (6 - at) * 2;
  return 0;
}
