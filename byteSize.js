/**
 * 计算字符串的字节大小
 *
 * @param {string} str target string
 * @returns {number}
 * @example
 *
 * byteSize('😀');
 * // => 4
 *
 * byteSize('Hello World');
 * // => 11
 */
function byteSize(str) {
  return new Blob([str]).size;
}

export default byteSize;
