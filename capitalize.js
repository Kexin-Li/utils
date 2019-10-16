/**
 * 将字符串的第一个字母转换为大写
 *
 * @param {string} string
 * @returns {string}
 * @example
 *
 * capitalize('abc')
 * // => Abc
 */
function capitalize([first, ...rest]) {
  return first.toUpperCase() + rest.join('');
}

export default capitalize;
