/**
 * 获取目标日期的时间(时/分/秒)
 *
 * @param {date} date
 * @returns {string}
 * @example
 *
 * getTimeFromDate(new Date())
 * // => "18:48:41"
 */
function getTimeFromDate(date) {
  return date.toTimeString().slice(0, 8);
}

export default getTimeFromDate;
