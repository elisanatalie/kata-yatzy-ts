import { tallyDice } from './common';

export function largeStraight(...dice: number[]): number {
  const tallies = tallyDice(dice).slice(1, dice.length + 1);
  if (tallies.every(tally => tally == 1)) {
    return 20;
  }
  return 0;
}
