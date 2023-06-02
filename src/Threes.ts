import { appearancesOfNumber } from './common';

export function threes(...dice: number[]): number {
  return appearancesOfNumber(dice, 3);
}
