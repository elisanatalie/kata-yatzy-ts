export function smallStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
  var tallies;
  tallies = [0, 0, 0, 0, 0, 0, 0];
  tallies[d1 - 1] += 1;
  tallies[d2 - 1] += 1;
  tallies[d3 - 1] += 1;
  tallies[d4 - 1] += 1;
  tallies[d5 - 1] += 1;
  if (tallies[0] == 1 && tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1)
    return 15;
  return 0;
}
