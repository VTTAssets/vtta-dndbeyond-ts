/**
 * Normalizes a string:
 * - Removes all non-alphabetic letters
 * - Converts the string to lowercase
 * @param {string} str String to process
 * @returns {string} normalized string
 */
const normalizeString = (str: string): string => {
  return str.toLowerCase().replace(/\W/g, "");
};

/**
 * Normalizes an array of strings:
 * - Removes all non-alphabetic letters
 * - Converts the string to lowercase
 * @param {string[]} str Strings to process
 * @returns {string[]} normalized array of strings
 */
const normalizeStrings = (str: string[]): string[] => {
  return str.map((s) => normalizeString(s));
};

export { normalizeString, normalizeStrings };
