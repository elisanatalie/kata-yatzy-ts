import { appearancesOfNumber } from './common';

export function ones(...dice: number[]): number {
  return appearancesOfNumber(dice, 1);
}
