import { appearancesOfNumber } from './common';

export function sixes(...dice: number[]): number {
  return appearancesOfNumber(dice, 6);
}
