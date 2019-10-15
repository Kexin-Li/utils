/**
 * 计算某一个元素的样式
 *
 * @param {element} el
 * @param {string} ruleName
 * @returns {string}
 * @example
 *
 * getStyle(document.querySelector('p'), 'font-size')
 * // => "16px"
 */
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

export default getStyle;
