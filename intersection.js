/**
 * 获取两个数组的交集(不支持嵌套数组)
 *
 * @param {array} a
 * @param {array} b
 * @returns {array}
 * @example
 *
 * intersection([1,2,3], [1,3,4])
 * // => [1,3]
 *
 * intersection([1,2,3], [4,5,6])
 * // => []
 */
function intersection(a, b) {
  const s = new Set(b);
  return a.filter(x => s.has(x));
}

export default intersection;
