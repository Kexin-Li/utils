/**
 * 根据精度四舍五入目标值
 *
 * @param {number} n
 * @param {number} decimals
 * @returns {number}
 *
 * @example
 * round(20.555, 2)
 * // => 20.55
 */
function round(n, decimals = 0) {
  return Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
}

export default round;
