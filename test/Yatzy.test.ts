import assert from 'assert';

import YatzyReference from './YatzyReference';
import { ones } from '../src/Ones';
import { twos } from '../src/Twos';
import { threes } from '../src/Threes';
import { fours } from '../src/Fours';
import { fives } from '../src/Fives';
import { sixes } from '../src/Sixes';
import { chance } from '../src/Chance';
import { onePair } from '../src/OnePair';
import { twoPairs } from '../src/TwoPairs';
import { threeOfAKind } from '../src/ThreeOfAKind';
import { fourOfAKind } from '../src/FourOfAKind';
import { smallStraight } from '../src/SmallStraight';
import { largeStraight } from '../src/LargeStraight';
import { fullHouse } from '../src/FullHouse';
import { yatzy } from '../src/Yatzy';

describe('Chance', () => {
  it('scores sum of all dice', () => {
    assert.strictEqual(15, chance(2, 3, 4, 5, 1));
    assert.strictEqual(16, chance(3, 3, 4, 5, 1));
  });
});

describe('Yatzy', () => {
  it('scores 50', () => {
    assert.strictEqual(50, yatzy(4, 4, 4, 4, 4));
    assert.strictEqual(50, yatzy(6, 6, 6, 6, 6));
    assert.strictEqual(0, yatzy(6, 6, 6, 6, 3));
  });
});

describe('Ones', () => {
  it('score the sum of 1s', () => {
    assert.strictEqual(1, ones(1, 2, 3, 4, 5));
    assert.strictEqual(2, ones(1, 2, 1, 4, 5));
    assert.strictEqual(0, ones(6, 2, 2, 4, 5));
    assert.strictEqual(4, ones(1, 2, 1, 1, 1));
  });
});

describe('Twos', () => {
  it('score the sum of 2s', () => {
    assert.strictEqual(4, twos(1, 2, 3, 2, 6));
    assert.strictEqual(10, twos(2, 2, 2, 2, 2));
  });
});

describe('Threes', () => {
  it('score the sum of 3s', () => {
    assert.strictEqual(6, threes(1, 2, 3, 2, 3));
    assert.strictEqual(12, threes(2, 3, 3, 3, 3));
  });
});

describe('Fours', () => {
  it('score the sum of 4s', () => {
    assert.strictEqual(12, fours(4, 4, 4, 5, 5));
    assert.strictEqual(8, fours(4, 4, 5, 5, 5));
    assert.strictEqual(4, fours(4, 5, 5, 5, 5));
  });
});

describe('Fives', () => {
  it('score the sum of fives', () => {
    assert.strictEqual(10, fives(4, 4, 4, 5, 5));
    assert.strictEqual(15, fives(4, 4, 5, 5, 5));
    assert.strictEqual(20, fives(4, 5, 5, 5, 5));
  });
});

describe('Sixes', () => {
  it('score the sum of sixes', () => {
    assert.strictEqual(0, sixes(4, 4, 4, 5, 5));
    assert.strictEqual(6, sixes(4, 4, 6, 5, 5));
    assert.strictEqual(18, sixes(6, 5, 6, 6, 5));
  });
});

describe('One pair', () => {
  it('scores the sum of the highest pair', () => {
    assert.strictEqual(6, onePair(3, 4, 3, 5, 6));
    assert.strictEqual(10, onePair(5, 3, 3, 3, 5));
    assert.strictEqual(12, onePair(5, 3, 6, 6, 5));
  });
});

describe('Two pair', () => {
  it('scores the sum of the two pairs', () => {
    assert.strictEqual(16, twoPairs(3, 3, 5, 4, 5));
    assert.strictEqual(16, twoPairs(3, 3, 5, 5, 5));
  });
});

describe('Three of a kind', () => {
  it('scores the sum of the three of the kind', () => {
    assert.strictEqual(9, threeOfAKind(3, 3, 3, 4, 5));
    assert.strictEqual(15, threeOfAKind(5, 3, 5, 4, 5));
    assert.strictEqual(9, threeOfAKind(3, 3, 3, 3, 5));
  });
});

describe('Four of a kind', () => {
  it('scores the sum of the four of the kind', () => {
    assert.strictEqual(12, fourOfAKind(3, 3, 3, 3, 5));
    assert.strictEqual(20, fourOfAKind(5, 5, 5, 4, 5));
    assert.strictEqual(9, threeOfAKind(3, 3, 3, 3, 3));
  });
});

describe('Small straight', () => {
  it('scores 15', () => {
    assert.strictEqual(15, smallStraight(1, 2, 3, 4, 5));
    assert.strictEqual(15, smallStraight(2, 3, 4, 5, 1));
    assert.strictEqual(0, smallStraight(1, 2, 2, 4, 5));
  });
});

describe('Large straight', () => {
  it('scores 20', () => {
    assert.strictEqual(20, largeStraight(6, 2, 3, 4, 5));
    assert.strictEqual(20, largeStraight(2, 3, 4, 5, 6));
    assert.strictEqual(0, largeStraight(1, 2, 2, 4, 5));
  });
});

describe('Full house', () => {
  it('scores the sum of the full house', () => {
    assert.strictEqual(18, fullHouse(6, 2, 2, 2, 6));
    assert.strictEqual(0, fullHouse(2, 3, 4, 5, 6));
  });
});

describe('Gold Master: many random inputs compared with a reference correct implementation', () => {
  function randomDie() {
    return 1 + Math.floor(Math.random() * 6);
  }
  function randomHand() {
    return [randomDie(), randomDie(), randomDie(), randomDie(), randomDie()];
  }
  const functions: Function[] = [
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    chance,
    onePair,
    twoPairs,
    threeOfAKind,
    fourOfAKind,
    smallStraight,
    largeStraight,
    fullHouse,
    yatzy,
  ];

  for (let i = 0; i < 1000; i++) {
    let hand = randomHand();
    for (const functionUnderTest of functions) {
      // @ts-ignore
      const expected = YatzyReference[functionUnderTest.name](
        hand[0],
        hand[1],
        hand[2],
        hand[3],
        hand[4],
      );
      it(`for ${hand} ${functionUnderTest.name} = ${expected}`, () => {
        // @ts-ignore
        const actual = functionUnderTest(hand[0], hand[1], hand[2], hand[3], hand[4]);
        assert.strictEqual(expected, actual);
      });
    }
  }
});
