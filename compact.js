/**
 * 去除数组中值为false的元素
 *
 * @param {array} arr target array
 * @returns {array}
 * @example
 *
 * compact([1,2,3])
 * // => [1,2,3]
 *
 * compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])
 * // =>[ 1, 2, 3, 'a', 's', 34 ]
 */
const compact = arr => arr.filter(Boolean);

export default compact;
