import WebGenerator from '../src/WebGenerator';

const generator = new WebGenerator();

describe('Tests for web generator.', () => {
  test('Return value is correct type.', () => {
    const result = generator.getRandom(10);
    expect(result).toBeInstanceOf(Uint8Array);
  });

  test('List contains values between -255 and +255', () => {
    const result = generator.getRandom(128);
    let min = 0;
    let max = 0;

    result.forEach((obj) => {
      if (obj < min) {
        min = obj;
      }
      if (obj > max) {
        max = obj;
      }
    });

    expect(max).toBeLessThan(256);
    expect(min).toBeGreaterThan(-256);
  });

  test('Two calls generates different values.', () => {
    const one = generator.getRandom(20);
    const two = generator.getRandom(20);

    expect(JSON.stringify(one)).not.toStrictEqual(JSON.stringify(two));
  });

  test('Uses crypt of it exists.', () => {
    Object.defineProperty(global, 'crypto', {
      value: {
        getRandomValues: (a) => a.fill(1).values()
      }
    });

    const result = generator.getRandom(10);
    expect(result).toEqual(Uint8Array.from([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
  });
});
