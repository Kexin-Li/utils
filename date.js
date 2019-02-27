'use strict';

/**
 * 将utc时间转换为可显示的本地时间：2019-01-28T08:27:19+00:00 -> 2019-1-28 16:27:19
 * @param {*} utc
 */
function utcToLocaleString(utc) {
  return new Date(utc).toLocaleString();
}
