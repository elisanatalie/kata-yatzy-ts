import { numberOfAKind } from './common';

export function threeOfAKind(...dice: number[]): number {
  return numberOfAKind(dice, 3);
}
