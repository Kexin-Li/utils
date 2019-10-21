/**
 * 移除字符串中的空格
 *
 * @param {string} str
 * @returns {string}
 * @example
 *
 * removeSpace('abs dasdh ')
 * // => absdasdh
 */
function removeSpace(str) {
  return str.replace(/\s+/g, '');
}

export default removeSpace;
