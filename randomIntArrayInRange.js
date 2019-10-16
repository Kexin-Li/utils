/**
 * 在[min, max]范围内，随机生成n个整数数组
 *
 * @param {number} min
 * @param {number} max
 * @param {number} n
 * @returns {array}
 * @example
 *
 * randomIntArrayInRange(1, 10, 5)
 * // => [10, 4, 9, 10, 2]
 */
function randomIntArrayInRange(min, max, n = 1) {
  return Array.from({ length: n }, function() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  });
}

export default randomIntArrayInRange;
