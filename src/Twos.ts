import { appearancesOfNumber } from './common';

export function twos(...dice: number[]): number {
  return appearancesOfNumber(dice, 2);
}
