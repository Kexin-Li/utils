/**
 * 按行切割
 *
 * @param {string} str
 * @returns {array}
 * @example
 *
 * splitLines('This\nis a\nmultiline\nstring.\n')
 * // => ['This', 'is a', 'multiline', 'string.' , '']
 */
function splitLines(str) {
  return str.split(/\r?\n/);
}

export default splitLines;
