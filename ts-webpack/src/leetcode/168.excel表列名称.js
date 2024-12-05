/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let r = "";
  while (n > 0) {
    let rest = n % 26;
    if (rest === 0) {
      rest = 26;
    }
    r = String.fromCharCode(64 + rest) + r;
    n = (n - rest) / 26;
  }
  return r
};
// @lc code=end
// console.log(String.fromCharCode(65));
// console.log(String.fromCharCode(90));
// 65 -> A
// 90 -> Z
