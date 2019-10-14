/**
 * 获取当前日期是一年中的第几天
 *
 * @param {date} date
 * @returns {number}
 * @example
 *
 * dayOfYear(new Date())
 * // => 287
 */
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

export default dayOfYear;
