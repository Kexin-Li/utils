/**
 * 计算嵌套数组中位数
 *
 * @param {array} arr target array
 * @param {function | string} fn filter function or string
 * @returns {number} average number
 * @example
 *
 * averageBy([{a: 1, b: 2}, {a: 2, b: 2}, {a: 3, b: 2}, {a: 4, b: 2}], 'a')
 * // => 2.5
 *
 * averageBy([{a: 1, b: 2}, {a: 2, b: 2}, {a: 3, b: 2}, {a: 4, b: 2}], o => o.b)
 * // => 2
 */
function averageBy(arr, fn) {
  return (
    arr
      .map(typeof fn === 'function' ? fn : val => val[fn])
      .reduce((acc, val) => acc + val, 0) / arr.length
  );
}

export default averageBy;
