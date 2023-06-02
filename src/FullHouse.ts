import { tallyDice } from './common';

export function fullHouse(...dice: number[]): number {
  let hasTwoCount = false;
  let twoDie = 0;
  let hasThreeCount = false;
  let threeDie = 0;

  const tallies = tallyDice(dice);

  for (let i = 0; i < tallies.length; i++) {
    if (tallies[i] == 2) {
      hasTwoCount = true;
      twoDie = i + 1;
    }
  }

  for (let i = 0; i < tallies.length; i++) {
    if (tallies[i] == 3) {
      hasThreeCount = true;
      threeDie = i + 1;
    }
  }

  if (hasTwoCount && hasThreeCount) {
    return twoDie * 2 + threeDie * 3;
  }

  return 0;
}
