import { tallyDice } from './common';

export function onePair(...dice: number[]): number {
  const tallies = tallyDice(dice);

  for (let i = 0; i < tallies.length; i++) {
    if (tallies[tallies.length - i - 1] >= 2) {
      return (tallies.length - i) * 2;
    }
  }
  return 0;
}
