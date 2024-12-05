/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

/* 
示例 1:
输入: version1 = "0.1", version2 = "1.1"
输出: -1

示例 2:
输入: version1 = "1.0.1", version2 = "1"
输出: 1

示例 3:
输入: version1 = "7.5.2.4", version2 = "7.5.3"
输出: -1

示例 4：
输入：version1 = "1.01", version2 = "1.001"
输出：0
解释：忽略前导零，“01” 和 “001” 表示相同的数字 “1”。

示例 5：
输入：version1 = "1.0", version2 = "1.0.0"
输出：0
解释：version1 没有第三级修订号，这意味着它的第三级修订号默认为 “0”。
*/

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split('.').map((i) => parseInt(i));
  const v2 = version2.split('.').map((i) => parseInt(i));
  const len = Math.max(v1.length, v2.length);
  for (let i = 0; i < len; i++) {
    const _v1 = v1[i] ? v1[i] : 0;
    const _v2 = v2[i] ? v2[i] : 0;
    if (_v1 > _v2) return 1;
    if (_v1 < _v2) return -1;
  }
  return 0;
};
// @lc code=end
