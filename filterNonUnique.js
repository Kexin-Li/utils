/**
 * 数组去重(不支持嵌套数组)
 *
 * @param {array} arr
 * @returns {array}
 * @example
 *
 * filterNonUnique([1,1,2,3,4])
 * // => [1,2,3,4]
 */
function filterNonUnique(arr) {
  return arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
}

export default filterNonUnique;
