/* eslint-disable no-nested-ternary */
const sortByKey = (array, key, type) => {
  return array.sort(function sort(a, b) {
    const x = a[key];
    const y = b[key];
    if (type === 'ascending') {
      return x < y ? -1 : x > y ? 1 : 0;
    }
    return x > y ? -1 : x < y ? 1 : 0;
  });
};
export default sortByKey;
