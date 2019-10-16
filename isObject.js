/**
 * 检测目标值是否为Object类型
 *
 * @param {*} obj
 * @returns {boolean}
 * @example
 *
 * isObject({a: 1})
 * // => true
 *
 * isObject(2)
 * // => false
 */
function isObject(obj) {
  return obj === Object(obj);
}

export default isObject;
