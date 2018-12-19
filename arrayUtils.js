"use strict";

/**
 * 创建二维数组
 * @param {Number} row
 * @param {Number} col
 * @param {Number} initialValue
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
