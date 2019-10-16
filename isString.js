/**
 * 检测目标值是否为String类型
 *
 * @param {*} val
 * @returns {boolean}
 * @example
 *
 * isString('abc')
 * // => true
 *
 * isString({a: 1})
 * // => false
 */
function isString(val) {
  return typeof val === 'string';
}

export default isString;
