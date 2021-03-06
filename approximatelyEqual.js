/**
 * 判断两个数是否在一定精度内相等
 *
 * @param {number} v1
 * @param {number} v2
 * @param {number} epsilon
 * @returns {boolean}
 * @example
 *
 * approximatelyEqual(0.8, 0.9, 0.1)
 * // => true
 */
function approximatelyEqual(v1, v2, epsilon = 0.001) {
  return Math.abs(v1 - v2) < epsilon;
}

export default approximatelyEqual;
