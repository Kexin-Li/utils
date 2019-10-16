/**
 * 获取两个数组的交集(支持嵌套数组)
 *
 * @param {array} a
 * @param {array} b
 * @param {function} fn
 * @returns {array}
 * @example
 *
 * intersectionBy([{a: 1}, {a: 2}], [{a: 2}, {a: 4}], o => o.a)
 * // => [{a: 2}]
 *
 * intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [2.1]
 */
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

export default intersectionBy;
