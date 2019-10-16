/**
 * 检测目标值是否为null或undefined
 *
 * @param {any} val
 * @returns {boolean}
 * @example
 *
 * isNil(null)
 * // => true
 *
 * isNil(2)
 * // => false
 */
const isNil = val => val === undefined || val === null;

export default isNil;
