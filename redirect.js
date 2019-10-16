/**
 * 重定向至目标URL
 *
 * @param {string} url
 * @param {*boolean} asLink
 * @example
 *
 * redirect('https://google.com')
 */
function redirect(url, asLink = true) {
  return asLink ? (window.location.href = url) : window.location.replace(url);
}

export default redirect;
