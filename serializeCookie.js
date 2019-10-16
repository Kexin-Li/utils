/**
 * 序列化cookie
 *
 * @param {string} key
 * @param {string} value
 * @returns {string}
 * @example
 *
 * serializeCookie('foo', 'bar')
 * // => "foo=bar"
 */
function serializeCookie(key, value) {
  return `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
}

export default serializeCookie;
