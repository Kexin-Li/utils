/**
 * 浅拷贝对象
 *
 * @param {object} obj
 * @returns {object}
 * @example
 *
 * const a = { x: true, y: 1 };
 * const b = shadowClone(a)
 * // a !== b
 */
function shadowClone(obj) {
  return Object.assign({}, obj);
}

export default shadowClone;
