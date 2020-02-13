import { shuffle } from './Util'

export default (generator) => (length, options = {
  alpha: true,
  numbers: true,
  special: true,
  minAlpha: 1,
  minNumbers: 1,
  minSpecial: 1,
}) => {

  const lists = {
    alpha:   (options.alpha   ? generator.alpha(length)   : []),
    special: (options.special ? generator.special(length) : []),
    numbers: (options.numbers ? generator.numbers(length) : []),
    combined: []
  };

  const result = [];
  result.push(...lists.alpha.splice(0, options.minAlpha));
  result.push(...lists.special.splice(0, options.minSpecial));
  result.push(...lists.numbers.splice(0, options.numbers));

  lists.combined = shuffle([].concat(
    ...lists.alpha,
    ...lists.special,
    ...lists.numbers)
  );

  // Concat rest.
  result.push(lists.combined.splice(0, length - (
    (options.special ? options.minSpecial : 0)
    +
    (options.alpha ? options.minAlpha : 0)
    +
    (options.numbers ? options.minNumbers : 0)
  )));

  return shuffle(result);
}

