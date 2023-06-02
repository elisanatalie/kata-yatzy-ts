export function fourOfAKind(_1: number, _2: number, d3: number, d4: number, d5: number): number {
  var tallies;
  tallies = [0, 0, 0, 0, 0, 0, 0, 0];
  tallies[_1 - 1]++;
  tallies[_2 - 1]++;
  tallies[d3 - 1]++;
  tallies[d4 - 1]++;
  tallies[d5 - 1]++;
  for (let i = 0; i < 6; i++) if (tallies[i] >= 4) return (i + 1) * 4;
  return 0;
}
