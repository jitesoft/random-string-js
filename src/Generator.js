/* istanbul ignore next */
export default class Generator {
  /**
   * @internal
   * @abstract
   * @param {number} len Length of list.
   * @return {Uint8Array} List of random values.
   */
  getRandom (len) {}

  /**
   * Fetch a list of random char codes for alpha characters.
   *
   * @param {number} len Amount of alpha characters to fetch.
   * @return {Uint8Array} An array with char-codes (ascii) for the random alpha characters.
   */
  alpha (len) {
    return this.getRandom(len).map(i => (Math.round(i % 25) + (i > 128 ? 65 : 97)));
  }

  /**
   * Fetch a list of random char codes of numeric characters.
   *
   * @param {number} len Amount of number characters to fetch.
   * @return {Uint8Array} An array with char-codes (ascii) for the random numeric characters.
   */
  numbers (len) {
    return this.getRandom(len).map(i => (Math.round(i % 10) + 48));
  }

  /**
   * Fetch a list of random char codes of special characters.
   *
   * @param {number} len Amount of special characters to fetch.
   * @return {Uint8Array} An array with char-codes (ascii) for the random special characters.
   */
  special (len) {
    return this.getRandom(len).map(i => {
      return i < 32
        ? Math.round(i % 15) + 33
        : i < 65
          ? Math.round(i % 7) + 58
          : i < 128
            ? Math.round(i % 4) + 91
            : Math.round(i % 4) + 123;
    });
  }
}
