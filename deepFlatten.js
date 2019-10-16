/**
 * 扁平化数组(支持嵌套数组)
 *
 * @param {array} arr target array
 * @returns {array}
 * @example
 *
 * deepFlatten([1, [2], [[3], 4], 5])
 * // => [1,2,3,4,5]
 */
function deepFlatten(arr) {
  return [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
}

export default deepFlatten;
