export function fullHouse(d1: number, d2: number, d3: number, d4: number, d5: number): number {
  var tallies;
  var _2 = false;
  var i;
  var _2_at = 0;
  var _3 = false;
  var _3_at = 0;

  tallies = [0, 0, 0, 0, 0, 0, 0, 0];
  tallies[d1 - 1] += 1;
  tallies[d2 - 1] += 1;
  tallies[d3 - 1] += 1;
  tallies[d4 - 1] += 1;
  tallies[d5 - 1] += 1;

  for (i = 0; i != 6; i += 1)
    if (tallies[i] == 2) {
      _2 = true;
      _2_at = i + 1;
    }

  for (i = 0; i != 6; i += 1)
    if (tallies[i] == 3) {
      _3 = true;
      _3_at = i + 1;
    }

  if (_2 && _3) return _2_at * 2 + _3_at * 3;
  else return 0;
}
