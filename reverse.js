/**
 * 反转字符串
 *
 * @param {string} str
 * @returns {string}
 * @example
 *
 * reverse('abcde')
 * // => "edcba"
 */
function reverse(str) {
  return [...str].reverse().join('');
}

export default reverse;
