export function tallyDice(dice: number[]) {
  const tallies = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < dice.length; i++) {
    tallies[dice[i] - 1] += 1;
  }
  return tallies;
}

export function appearancesOfNumber(dice: number[], numberToFind: number): number {
  return dice.filter(die => die == numberToFind).length * numberToFind;
}

export function numberOfAKind(dice: number[], numberToFind: number): number {
  const tallies = tallyDice(dice);

  for (let i = 0; i < tallies.length; i++) {
    if (tallies[i] >= numberToFind) {
      return (i + 1) * numberToFind;
    }
  }
  return 0;
}
