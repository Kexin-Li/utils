/**
 * 检查某个值的类型
 *
 * @param {any} type
 * @param {any} val
 * @returns {boolean}
 * @example
 *
 * is(Number, 2)
 * // => true
 *
 * is (Object, {a: 1})
 * // => true
 */
function is(type, val) {
  return ![, null].includes(val) && val.constructor === type;
}

export default is;
