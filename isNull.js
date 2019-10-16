/**
 * 检测目标值是否为null
 *
 * @param {any} val
 * @returns {boolean}
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(undefined)
 * // => false
 *
 * isNull(3)
 * // => false
 */
const isNull = val => val === null;

export default isNull;
