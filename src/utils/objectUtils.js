/**
 *
 * Check if an object has a specific key.
 *
 * @param {object} obj - object
 * @param {string} key - key to check for inside the object
 * @returns {boolean} boolean value
 */
export function hasKey(obj, key) {
  return Object.keys(obj).some((item) => item === key);
}

/**
 *
 * A function to keep only the given keys of an object.
 *
 * @param {object} data - object
 * @param {string[]} keyArr - array
 * @returns {object}
 */
export function keepObjectKeys(data, keyArr) {
  return Object.keys(data).reduce((obj, key) => (keyArr.includes(key) ? { ...obj, [key]: data[key] } : { ...obj }), {});
}

/**
 *
 * A function to remove specific keys of an object.
 *
 * @param {object} data - object
 * @param {string[]} keyArr - array
 * @returns {object}
 */
export function removeObjectKeys(data, keyArr) {
  return Object.keys(data).reduce((obj, key) => (keyArr.includes(key) ? { ...obj } : { ...obj, [key]: data[key] }), {});
}
