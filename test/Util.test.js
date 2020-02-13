import { shuffle } from '../src/Util';

describe('Tests for the shuffle util function.', () => {

  test('Shuffle randomizes order in array.', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const shuffled = shuffle(array);
    expect(shuffled).toEqual(expect.arrayContaining(array));
    expect(JSON.stringify(shuffled)).not.toStrictEqual(JSON.stringify(array));
  });
});
