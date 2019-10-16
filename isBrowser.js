/**
 * 检测是否是浏览器环境
 * @returns {boolean}
 */
function isBrowser() {
  return ![typeof window, typeof document].includes(undefined);
}

export default isBrowser;
