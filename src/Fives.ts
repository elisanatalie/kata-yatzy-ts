export function fives(...dice: number[]): number {
  let s = 0;
  var i;
  for (i = 0; i < dice.length; i++) if (dice[i] == 5) s = s + 5;
  return s;
}
