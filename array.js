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
