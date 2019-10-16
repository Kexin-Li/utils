/**
 * 字符串向左补位
 *
 * @param {string} str 待补位数字字符串
 * @param {number} length 补位后的字符串长度
 * @param {string} char 补位字符串
 * @returns {string}
 * @example
 *
 * leftpad('2', 2, '0')
 * // => "02"
 */
function leftpad(str, length, char) {
  return new String(str).padStart(length, char);
}

export default leftpad;
