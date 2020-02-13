import { shuffle } from './Util';

/**
 * @typedef Option
 * @type {{special: boolean, minAlpha: number, alpha: boolean, numbers: boolean, minNumbers: number, minSpecial: number}}
 */

const defaultOptions = {
  alpha: true,
  numbers: true,
  special: true,
  minAlpha: 0,
  minNumbers: 0,
  minSpecial: 0
};

/**
 * Factory method for the random string generator.
 * @param generator
 * @return {function(*=, *=): string}
 */
export default (generator) =>
  /**
   * Random string generator.
   *
   * @param {number} [length] Length of the string to generate.
   * @param {Option} [options] Options object to specify character types and minimums.
   * @return {string} Generated random string.
   */
  (length = 32, options = {}) => {
    options = Object.assign({}, defaultOptions, options);

    if (options.minNumbers + options.minAlpha + options.minSpecial > length) {
      throw new Error(
        'You have specified a lower length than possible with the minimum count of specific character types:\n' +
        `\tLength ${length}.\n` +
        `\tMin Alpha: ${options.minAlpha}\n` +
        `\tMin Numeric: ${options.minNumbers}\n` +
        `\tMin Special: ${options.minSpecial}`
      );
    }

    const lists = {
      alpha: Array.from(options.alpha ? generator.alpha(length) : []),
      special: Array.from(options.special ? generator.special(length) : []),
      numbers: Array.from(options.numbers ? generator.numbers(length) : []),
      combined: []
    };

    const result = [];
    result.push(...(options.alpha ? lists.alpha.splice(0, options.minAlpha) : []));
    result.push(...(options.numbers ? lists.numbers.splice(0, options.minNumbers) : []));
    result.push(...(options.special ? lists.special.splice(0, options.minSpecial) : []));

    lists.combined.push(
      ...lists.alpha,
      ...lists.numbers,
      ...lists.special
    );

    lists.combined = shuffle(lists.combined);

    // Concat rest.
    result.push(...lists.combined.splice(0, length - (
      (options.special ? options.minSpecial : 0) +
      (options.alpha ? options.minAlpha : 0) +
      (options.numbers ? options.minNumbers : 0)
    )));

    return String.fromCharCode(...shuffle(result));
  };
