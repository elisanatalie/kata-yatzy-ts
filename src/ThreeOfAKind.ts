export function threeOfAKind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
  var t;
  t = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  t[d1 - 1]++;
  t[d2 - 1]++;
  t[d3 - 1]++;
  t[d4 - 1]++;
  t[d5 - 1]++;
  for (let i = 0; i < 6; i++) if (t[i] >= 3) return (i + 1) * 3;
  return 0;
}
