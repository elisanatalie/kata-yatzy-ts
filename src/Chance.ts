export function chance(...dice: number[]): number {
  return dice.reduce((acc, curr) => acc + curr, 0);
}
