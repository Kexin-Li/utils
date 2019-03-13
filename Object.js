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

/**
 * 判断两个对象里的元素是否原生相等
 * @param {Object} obj1
 * @param {Object} obj2
 */
function equalObject(obj1, obj2) {
  if (!obj1 && !obj2) return true;
  if (!obj1) return false;
  if (!obj2) return false;

  for (let el in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj2, el)) {
      // nested object
      if (Object.prototype.toString.call(obj1[el]) === '[object Object]') {
        if (!equalObject(obj1[el], obj2[el])) return false;
      } else if (obj1[el] !== obj2[el]) return false;
    } else {
      return false;
    }
  }
  return true;
}
