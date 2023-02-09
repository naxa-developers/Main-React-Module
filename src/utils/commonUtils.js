/**
 *
 * Check if an object or an array is empty.
 *
 * @param {object|array} obj  - object or array
 * @returns {boolean} boolean value whether the object or array is empty or not.
 */
export function isEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  return Object.keys(obj).length === 0;
}

/**
 *
 * Convert string to title case.
 *
 * @param {string} word - string
 * @returns titlecase version of the input string.
 */
export function toTitleCase(word) {
  return word.replace(/^./, (match) => match.charAt(0).toUpperCase());
}

/**
 *
 * Convert string to camel case.
 *
 * @param {string} word - string
 * @returns {string} camelcase version of the input string.
 */
export function toCamelCase(word) {
  return word.replace(/[_-]./g, (match) => match.charAt(1).toUpperCase());
}

/**
 *
 * Convert snakecase string to camelcase.
 *
 * @param {string} str - string
 * @returns {string} string with camel case.
 */
export function snakeCaseToCamel(str) {
  return str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
}

/**
 *
 * Convert camelcase string to snakecase.
 *
 * @param {string} str - string
 * @returns {string} string with snake case.
 */
export function camelCaseToSnake(str) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

/**
 *
 * Change keys of an object to camelcase.
 *
 * @param {object} data - object
 * @returns {object}
 */
export const camelizeObjectKey = (data) => {
  return Object.keys(data).reduce(
    (obj, item) => ({
      ...obj,
      [snakeCaseToCamel(item)]: (() => {
        if (data[item] && Array.isArray(data[item])) {
          if (data[item].length) return data[item].map((value) => camelizeObjectKey(value));
          return [];
        }
        if (!!data[item] && typeof data[item] === 'object') return camelizeObjectKey(data[item]);
        return data[item];
      })(),
    }),
    {},
  );
};
