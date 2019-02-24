"use strict";

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
