/**
 * 找出数组中前n大的值
 *
 * @param {array} arr
 * @param {number} n
 * @returns {array}
 * @example
 *
 * maxN([1,2,3])
 * // => [3]
 *
 * maxN([1,2,3], 2)
 * // => [2,3]
 */
function maxN(arr, n = 1) {
  return [...arr].sort((a, b) => b - a).slice(0, n);
}

export default maxN;
