/**
 * 随机打乱数组
 *
 * @param {array} arr
 * @returns {array}
 * @example
 *
 * shuffle([1,2,3,412,34,1])
 * // => [34, 1, 1, 2, 412, 3]
 */
function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

export default shuffle;
