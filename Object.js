'use strict';

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
 * 解析 query(string) 为 Object 简易版
 * @param {String} input query: location.search
 */
function parseQuery(input) {
  input = input.trim().replace(/^[?#&]/, '');
  let ret = Object.create(null);

  for (let param of input.split('&')) {
    let [key, value] = param.replace(/\+/g, ' ').split('=');
    if (ret[key] === undefined) {
      ret[key] = value;
    } else {
      ret[key] = [].concat(ret[key], value);
    }
  }

  return ret;
}
