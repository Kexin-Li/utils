/**
 * 计算两个日期相差的天数
 *
 * @param {date} dateInitial
 * @param {date} dateFinal
 * @returns {number}
 * @example
 *
 * getDaysBetweenDates(new Date('2019-10-01'), new Date('2019-10-15'))
 * // => 14
 */
const getDaysBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

export default getDaysBetweenDates;
