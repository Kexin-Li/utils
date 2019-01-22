"use strict";

/**
 * 替换字符串中的所有子串
 * @param {String} str 源字符串
 * @param {String} searchValue 需要替换的子串
 * @param {String} replaceValue 替换的子串
 */
function replaceAll(str, searchValue, replaceValue) {
  return str.split(searchValue).join(replaceValue);
}
