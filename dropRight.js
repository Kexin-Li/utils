/**
 * 删除数组的后n位
 *
 * @param {array} arr
 * @param {number} n 需要删除的位数，默认一位
 * @returns {array}
 * @example
 *
 * dropRight([1,2,3,4,5], 2)
 * // => [1,2,3]
 */
const dropRight = (arr, n = 1) => arr.slice(0, -n);

export default dropRight;
