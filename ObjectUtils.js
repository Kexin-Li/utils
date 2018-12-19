"use strict";

var _hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 判断数组或者对象是否为空
 * @param {Object} value
 * @returns {Boolean}
 */
function isEmpty(value) {
  if (!value) {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  } else {
    for (const i in value) {
      if (_hasOwnProperty.call(value, i)) {
        return false;
      }
    }
    return true;
  }
}

/**
 * 替换字符串中的所有子串
 * @param {String} str 源字符串
 * @param {String} searchValue 需要替换的子串
 * @param {String} replaceValue 替换的子串
 */
function replaceAll(str, searchValue, replaceValue) {
  return str.split(searchValue).join(replaceValue);
}
