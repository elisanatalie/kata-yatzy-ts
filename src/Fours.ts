import { appearancesOfNumber } from './common';

export function fours(...dice: number[]): number {
  return appearancesOfNumber(dice, 4);
}
