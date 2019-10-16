/**
 * 检测目标值是否为undefined类型
 *
 * @param {*} val
 * @returns {boolean}
 * @example
 *
 * isUndefined(undefined)
 * // => true
 *
 * isUndefined(null)
 * // => false
 */
function isUndefined(val) {
  return val === undefined;
}

export default isUndefined;
