const fs = require('fs');

/**
 * 按行读文件
 *
 * @param {string} filename
 * @returns {array}
 * @example
 *
 * const arr = readFileLines('test.txt')
 * console.log(arr) // => ['line1', 'line2', 'line3']
 */
function readFileLines(filename) {
  return fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');
}

export default readFileLines;
