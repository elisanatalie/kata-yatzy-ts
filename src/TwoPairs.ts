import { tallyDice } from './common';

export function twoPairs(...dice: number[]): number {
  const tallies = tallyDice(dice);
  let score = 0;
  let numberOfPairs = 0;

  for (let i = 0; i < tallies.length; i++) {
    if (tallies[i] >= 2) {
      numberOfPairs++;
      score = score + (i + 1) * 2;
    }
  }
  return numberOfPairs == 2 ? score : 0;
}
