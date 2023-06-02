export function largeStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
  var tallies;
  tallies = [0, 0, 0, 0, 0, 0, 0, 0];
  tallies[d1 - 1] += 1;
  tallies[d2 - 1] += 1;
  tallies[d3 - 1] += 1;
  tallies[d4 - 1] += 1;
  tallies[d5 - 1] += 1;
  if (tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1 && tallies[5] == 1)
    return 20;
  return 0;
}
