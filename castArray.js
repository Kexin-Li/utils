/**
 * 将输入的值转换为数组
 *
 * @param {*} val target
 * @returns {array}
 * @example
 *
 * castArray('foo')
 * // => ['foo']
 *
 * castArray([1])
 * // => [1]
 */
const castArray = val => (Array.isArray(val) ? val : [val]);

export default castArray;
