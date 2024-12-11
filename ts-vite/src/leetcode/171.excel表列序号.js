/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let res = 0;
  let arr = s.split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    res += (temp.charCodeAt() - 64) * Math.pow(26, i);
  }
  return res
};
// @lc code=end
