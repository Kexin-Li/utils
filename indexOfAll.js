/**
 * 获取元素在数组中的所有index，不存在数组中则返回空数组
 *
 * @param {array} arr
 * @param {any} val
 * @returns {array}
 * @example
 *
 * indexOfAll([1,2,1,3,4], 1)
 * // => [0,2]
 *
 * indexOfAll([1,2,3,4], 5)
 * // => []
 */
const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

export default indexOfAll;
