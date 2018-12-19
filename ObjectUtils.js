"use strict";

var _hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 判断数组或者对象是否为空
 * @param {object} value
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
