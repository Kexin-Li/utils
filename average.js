/**
 * 计算数组中位数
 *
 * @param  {array} nums target array
 * @returns {number} average number
 * @example
 *
 * average([1,2,3])
 * // => 2
 */
const average = nums => nums.reduce((acc, val) => acc + val, 0) / nums.length;

export default average;
