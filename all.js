/**
 * 判断数组中的所有元素是否都满足某种情况
 *
 * @param {array} arr target array
 * @param {function} fn additional function
 * @returns {boolean}
 * @example
 *
 * all([1,2,3], x => x > 1)
 * // => false
 *
 * all([1, 2, 3])
 * // => true
 */
const all = (arr, fn = Boolean) => arr.every(fn);

export default all;
