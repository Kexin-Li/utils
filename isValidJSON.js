/**
 * 检测目标值是否是正确的JSON格式
 *
 * @param {*} val
 * @returns {boolean}
 * @example
 *
 * isValidJSON('{"name":"Adam","age":20}')
 * // => true
 *
 * isValidJSON('{"name":"Adam",age:"20"}')
 * // => false
 */
function isValidJSON(val) {
  try {
    JSON.parse(val);
    return true;
  } catch (e) {
    return false;
  }
}

export default isValidJSON;
