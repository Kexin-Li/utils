/**
 * 找出数组中前n小的值
 *
 * @param {array} arr
 * @param {number} n
 * @returns {array}
 * @example
 *
 * minN([1,3,2,4,1])
 * // => [1]
 *
 * minN([1,3,2,4,1], 2)
 * // => [1,2]
 */
function minN(arr, n = 1) {
  return [...arr].sort((a, b) => a - b).slice(0, n);
}

export default minN;
