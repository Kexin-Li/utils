# utils

JavaScript util methods.

## 目录

### a

| 名称                   | 描述                                        | 备注                     |
| ---------------------- | ------------------------------------------- | ------------------------ |
| all                    | 判断数组中的所有元素是否都满足某种情况      |                          |
| allEqual               | 判断数组里的所有元素是否都相等              |                          |
| approximatelyEqual     | 判断两个数是否在一定精度内相等              |                          |
| attempt                | 执行一个函数，返回函数结果或者 Error 对象。 |                          |
| average                | 计算数组中位数                              |                          |
| averageBy              | 计算嵌套数组中位数                          |                          |
| byteSize               | 计算字符串的字节大小                        |                          |
| capitalize             | 将字符串的第一个字母转换为大写              |                          |
| castArray              | 将输入的值转换为数组                        |                          |
| compact                | 去除数组中值为 false 的元素                 |                          |
| countOccurrences       | 计算一个值在数组中出现的次数                | 不支持嵌套数组           |
| currentUrl             | 获取当前页面 URL                            |                          |
| dayOfYear              | 获取当前日期是一年中的第几天                |                          |
| deepFlatten            | 扁平化数组                                  | 支持嵌套数组             |
| defer                  | 延迟一秒执行目标函数                        |                          |
| difference             | 判断两个数组是否完全相等                    | 不支持嵌套数组           |
| digitize               | 获取输入数字值的数组                        | 仅支持个位数             |
| drop                   | 删除数组的前 n 位                           |                          |
| dropRight              | 删除数组的后 n 位                           |                          |
| filterNonUnique        | 数组去重                                    | 不支持嵌套数组           |
| findFirst              | 获取数组的第一个值                          |                          |
| findLast               | 获取数组的最后一个值                        |                          |
| findLastBy             | 获取数组中满足条件的最后一个值              |                          |
| flatten                | 扁平化数组，可自定义深度                    |                          |
| getDaysBetweenDates    | 计算两个日期相差的天数                      |                          |
| getStyle               | 计算某一个元素的某种样式                    |                          |
| getTimeFromDate        | 获取目标日期的时间                          | 格式：时/分/秒           |
| httpsRedirect          | 将 http 重定向到当前域名下的 https          |                          |
| indexOfAll             | 获取元素在数组中的所有 index                | 不存在数组中则返回空数组 |
| intersection           | 获取两个数组的交集                          | 不支持嵌套数组           |
| intersectionBy         | 获取两个数组的交集                          | 支持嵌套数组             |
| is                     | 检查某个值的类型                            |                          |
| isBoolean              | 检测目标值是否为 Boolean 类型               |                          |
| isBrowser              | 检测是否是浏览器环境                        |                          |
| isNil                  | 检测目标值是否为 null 或 undefined          |                          |
| isNull                 | 检测目标值是否为 null                       |                          |
| isNumber               | 检测目标值是否为 Number 类型                |                          |
| isObject               | 检测目标值是否为 Object 类型                |                          |
| isString               | 检测目标值是否为 String 类型                |                          |
| isSymbol               | 检测目标值是否为 Symbol 类型                |                          |
| isUndefined            | 检测目标值是否为 undefined 类型             |                          |
| isValidJSON            | 检测目标值是否是正确的 JSON 格式            |                          |
| maxN                   | 找出数组中前 n 大的值                       |                          |
| minN                   | 找出数组中前 n 小的值                       |                          |
| randomHexColor         | 随机生成颜色值                              |                          |
| randomIntArrayInRange  | 在[min, max]范围内，随机生成 n 个整数数组   |                          |
| randomIntegerInRange   | 随机一个生成[min， max]范围内的整数         |                          |
| readFileLines          | 按行读文件                                  |                          |
| redirect               | 重定向至目标 URL                            |                          |
| reverse                | 反转字符串                                  |                          |
| round                  | 根据精度四舍五入目标值                      |                          |
| sample                 | 随机抽取数组中的值                          |                          |
| scrollToTop            | 回到顶部                                    |                          |
| serializeCookie        | 序列化 cookie                               |                          |
| shadowClone            | 浅拷贝对象                                  |                          |
| shuffle                | 随机打乱数组                                |                          |
| sortCharactersInString | 对字符串里的字母按字典序排序                |                          |
| splitLines             | 按行切割字符串                              |                          |
| sum                    | 对输入的元素求和                            |                          |
| timeTaken              | 打印执行一段函数所花的时间                  |                          |
