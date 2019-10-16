/**
 * 扁平化数组，可自定义深度
 *
 * @param {array} arr
 * @param {number} depth
 * @returns {array}
 * @example
 *
 * flatten([1,[2,3],4,5])
 * // => [1,2,3,4,5]
 *
 * flatten([1,[2,3,[4,5,6]]])
 * // => [1,2,3,[4,5,6]]
 */
function flatten(arr, depth = 1) {
  return arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );
}

export default flatten;
