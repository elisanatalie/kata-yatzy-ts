export function yatzy(...dice: number[]): number {
  for (let i = 0; i < dice.length - 1; i++) {
    if (dice[i] != dice[i + 1]) {
      return 0;
    }
  }

  return 50;
}
