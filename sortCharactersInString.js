/**
 * 对字符串里的字母按字典序排序
 *
 * @param {string} str
 * @returns {string}
 * @example
 *
 * sortCharactersInString('djasga')
 * // => "aadgjs"
 */
function sortCharactersInString(str) {
  return [...str]
    .sort(function(a, b) {
      return a.localeCompare(b);
    })
    .join('');
}

export default sortCharactersInString;
