/**
 * 检测目标值是否为Symbol类型
 *
 * @param {*} val
 * @returns {boolean}
 * @example
 *
 * isSymbol(Symbol(1))
 * // => true
 *
 * isSymbol(1)
 * // => false
 */
function isSymbol(val) {
  return typeof val === 'symbol';
}

export default isSymbol;
