export type Options = {
    /**
     * If to use special characters.
     */
    special: boolean | undefined;
    /**
     * If to use alpha characters.
     */
    alpha: boolean | undefined;
    /**
     * If to use numeric characters.
     */
    numbers: boolean | undefined;
    /**
     * Minimum number of alpha characters.
     */
    minAlpha: number | undefined;
    /**
     * Minimum number of numeric characters.
     */
    minNumbers: number | undefined;
    /**
     * Minimum number of special characters.
     */
    minSpecial: number | undefined;
}

/**
 * Creates a random string of given length and with the constraints set by the options.
 * @param {number} length - Full length of the random string in character count.
 * @param {Options} options - Options to constraint the resulting string with.
 * @return {string} Value generated.
 */
export default function rand(length: number, options: Options): string;
