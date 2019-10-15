/**
 * 删除数组的前n位
 *
 * @param {array} arr target array
 * @param {number} n 需要删除的位数，默认一位
 * @returns {array}
 * @example
 *
 * drop([1,2,3,4,5])
 * // => [2,3,4,5]
 */
const drop = (arr, n = 1) => arr.slice(n);

export default drop;
