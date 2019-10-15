/**
 * 判断数组里的所有元素是否都相等
 *
 * @param {array} arr target array
 * @returns {boolean}
 * @example
 *
 * allEqual([1,2,3])
 * // => false
 *
 * allEqual([1,1,1,1])
 * // => true
 */
const allEqual = arr => arr.every(val => val === arr[0]);

export default allEqual;
