/**
 * 检测是否是浏览器环境
 * @returns {boolean}
 */
const isBrowser = () => ![typeof window, typeof document].includes(undefined);

export default isBrowser;
