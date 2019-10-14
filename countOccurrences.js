/**
 * 计算一个值在数组中出现的次数(不支持嵌套数组)
 *
 * @param {array} arr
 * @param {number} val target value
 * @returns {number}
 * @example
 *
 * countOccurrences([1, 1, 2, 1, 2, 3], 1)
 * // => 3
 *
 * countOccurrences(['a', 'a', 'b'], 'a')
 * // => 2
 */
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

export default countOccurrences;
