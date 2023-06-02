import { tallyDice } from './common';

export function smallStraight(...dice: number[]): number {
  const tallies = tallyDice(dice).slice(0, dice.length);
  if (tallies.every(tally => tally == 1)) {
    return 15;
  }
  return 0;
}
