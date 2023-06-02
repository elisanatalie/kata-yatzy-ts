import { appearancesOfNumber } from './common';

export function fives(...dice: number[]): number {
  return appearancesOfNumber(dice, 5);
}
