/**
 * 随机一个生成[min， max]范围内的整数
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 * @example
 *
 * randomIntegerInRange(1, 20)
 *  // => 11
 */
function randomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default randomIntegerInRange;
