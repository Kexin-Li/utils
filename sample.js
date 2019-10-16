/**
 * 随机抽取数组中的值
 *
 * @param {array} arr
 * @returns {*}
 * @example
 *
 * sample([1,4,123,67,31,32,432,31])
 * // => 432
 */
function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default sample;
