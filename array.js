'use strict';

/**
 * 创建二维数组
 * @param {Number} row
 * @param {Number} col
 * @param {Number} initialValue
 * @returns {Array}
 */
function createMatrix(row, col, initialValue) {
  let matrix = [];
  for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
      matrix[i][j] = initialValue;
    }
  }
  return matrix;
}

/**
 * 取数组里的某一属性组成新的数组
 * @param {Array} arr
 * @param {String} attribute
 * @returns {Array}
 */
function mergeValue(arr, attribute) {
  return arr.reduce(
    (accumulator, currentValue) => [...accumulator, currentValue[attribute]],
    []
  );
}

/**
 * 寻找数组中是否包含目标元素（兼容嵌套数组）
 * @param {Array} arr arr
 * @param {Any} target 目标
 */
function exist(arr, target) {
  return arr.some(el => el.target === target);
}

/**
 * 交换数组元素
 * @param {Array} arr
 * @param {Number} p 交换元素的位置
 * @param {Number} q 交换元素的位置
 */
function swap(arr, p, q) {
  // 这样就修改了参数
  [arr[p], arr[q]] = [arr[q], arr[p]];
  return arr;
}

/**
 * 判断两个数组里的元素是否原生相等
 * @param {Object} obj1
 * @param {Object} obj2
 */
function equalArray(arr1, arr2) {
  if (!arr1 || arr1.length < 0) return false;
  if (!arr2 || arr2.length < 0) return false;
  if (arr1.length !== arr2.length) return false;

  const getIndex = (arr, target) => arr.findIndex(el => el === target);
  return arr1.every(el1 => getIndex(arr1, el1) === getIndex(arr2, el1));
}

/**
 * 判断两个数组或对象是否形态相等
 * @param {Object | Array} val1
 * @param {Object | Array} val2
 */
function equal(val1, val2) {
  if (!val1 && !val2) return true;

  const getType = value => Object.prototype.toString.call(value);
  if (getType(val1) !== getType(val2)) return false;

  const equalArray = (arr1, arr2) => {
    if (!arr1 || arr1.length < 0) return false;
    if (!arr2 || arr2.length < 0) return false;
    if (arr1.length !== arr2.length) return false;

    return arr1.every(target => arr2.findIndex(el => el == target) >= 0);
  };

  const equalObject = (obj1, obj2) => {
    if (!obj1 && !obj2) return true;
    if (!obj1) return false;
    if (!obj2) return false;

    for (let el in obj1) {
      if (Object.prototype.hasOwnProperty.call(obj2, el)) {
        // nested object
        if (getType(obj1[el]) === '[object Object]') {
          if (!equalObject(obj1[el], obj2[el])) return false;
        } else if (getType(obj1[el]) === '[object Array]') {
          if (!equalArray(obj1[el], obj2[el])) return false;
        } else if (obj1[el] !== obj2[el]) return false;
      } else {
        return false;
      }
    }
    return true;
  };

  return getType(val1) === '[object Object]'
    ? equalObject(val1, val2)
    : equalArray(val1, val2);
}

const val1 = { a: [1, '2'], b: 2 };
const val2 = { b: 2, a: [1, 2] };
console.log(equal(val1, val2));
