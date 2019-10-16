/**
 * 检测source对象中的值是否都在obj对象中存在
 *
 * @param {object} obj
 * @param {object} source
 * @returns {boolean}
 * @example
 *
 * matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })
 * // => true
 */
function matches(obj, source) {
  return Object.keys(source).every(
    key => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
}

export default matches;
