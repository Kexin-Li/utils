/**
 * 打印执行一段函数的时间
 *
 * @param {function} callback
 * @example
 *
 * timeTaken(function() {
 *    Math.pow(2, 10)
 * })
 */
function timeTaken(callback) {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
}

export default timeTaken;
