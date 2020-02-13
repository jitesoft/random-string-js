export default class Generator {
  /**
   * Fetch a list of random char codes for alpha characters.
   *
   * @abstract
   * @param {number} len Amount of alpha characters to fetch.
   * @return {Array<number>} An array with char-codes (ascii) for the random alpha characters.
   */
  alpha (len) {}

  /**
   * Fetch a list of random char codes of numeric characters.
   *
   * @abstract
   * @param {number} len Amount of number characters to fetch.
   * @return {Array<number>} An array with char-codes (ascii) for the random numeric characters.
   */
  numbers (len) {}


  /**
   * Fetch a list of random char codes of special characters.
   *
   * @abstract
   * @param {number} len Amount of special characters to fetch.
   * @return {Array<number>} An array with char-codes (ascii) for the random special characters.
   */
  special (len) {}
}
