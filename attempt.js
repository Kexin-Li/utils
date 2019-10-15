/**
 * 执行一个函数，返回函数结果或者Error对象。
 *
 * @param {function} fn target function
 * @param  {...any} args arguments
 * @returns {object} results or Error object
 * @example
 *
 * const res = attempt(a => a + 1, 10)
 * if (res instanceof Error) res = []
 */
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};

export default attempt;
