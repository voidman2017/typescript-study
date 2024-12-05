/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let getATimes = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") getATimes++;
    if (getATimes > 1) return false;
    if (s[i] === "L" && s[i + 1] === "L" && s[i + 2] === "L") return false;
  }
  return true;
};
// @lc code=end