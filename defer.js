/**
 * 延迟一秒执行目标函数
 *
 * @param {function} fn target function
 * @param  {...any} args arguments
 * @returns fn的执行结果
 * @example
 *
 * defer(console.log, 1);
 * console.log(11);
 * // => 先打印11，一秒后打印1
 */
const defer = (fn, ...args) => setTimeout(fn, 1000, ...args);

export default defer;
