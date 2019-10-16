/**
 * 检测目标值是否为Number类型
 *
 * @param {*} val
 * @returns {boolean}
 * @example
 *
 * isNumber(2)
 * // => true
 *
 * isNumber('2')
 * // => false
 */
const isNumber = val => !isNaN(parseFloat(n)) && isFinite(n);

export default isNumber;
