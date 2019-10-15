/**
 * 获取数组中满足条件的最后一个值
 *
 * @param {array} arr
 * @param {function} fn
 * @returns {any} 元素值的类型
 * @example
 *
 * findLast([1,2,3], v => v <= 1)
 * // 2
 */
const findLastBy = (arr, fn) => arr.filter(fn).pop();

export default findLastBy;
