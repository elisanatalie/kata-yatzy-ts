export function sixes(...dice: number[]): number {
  let sum = 0;
  for (var at = 0; at < dice.length; at++) if (dice[at] == 6) sum = sum + 6;
  return sum;
}
