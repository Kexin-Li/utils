/**
 * 检测目标值是否为Boolean类型
 *
 * @param {*} val
 * @returns {boolean}
 * @example
 *
 * isBoolean(true)
 * // => true
 *
 * isBoolean(2)
 * // => false
 */
const isBoolean = val => typeof val === 'boolean';

export default isBoolean;
