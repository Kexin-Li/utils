/**
 * 获取输入数字值的数组(仅支持个位数)
 *
 * @param {number} n target number
 * @returns {array}
 * @example
 *
 * digitize(1234567)
 * // => [1,2,3,4,5,6,7]
 */
const digitize = n => [...`${n}`].map(i => parseInt(i));

export default digitize;
