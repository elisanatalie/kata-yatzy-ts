import { numberOfAKind } from './common';

export function fourOfAKind(...dice: number[]): number {
  return numberOfAKind(dice, 4);
}
