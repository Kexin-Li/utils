/**
 * 对输入的元素求和
 *
 * @param  {...number} arr
 * @returns {number}
 * @example
 *
 * sum(1,2,3,4)
 * // => 10
 */
function sum(...arr) {
  return [...arr].reduce((acc, val) => acc + val, 0);
}

export default sum;
