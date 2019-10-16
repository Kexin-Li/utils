/**
 * 判断两个数组是否完全相等(不支持嵌套数组)
 *
 * @param {array} a
 * @param {array} b
 * @returns {array} 包含不同元素的字符串，如果完全相等则返回空数组
 * @example
 *
 * difference([1,2,3], [1,2,4])
 * // => false
 */
function difference(a, b) {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
}

export default difference;
