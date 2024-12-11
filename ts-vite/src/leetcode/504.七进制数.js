/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) return "0";
  const isPositive = num >= 0;
  num = Math.abs(num);
  const r = [];
  while (num >= 7) {
    r.unshift(num % 7);
    num = ~~(num / 7);
  }
  if (num) r.unshift(num);
  if (!isPositive) r.unshift("-");
  return r.join("");
};
// @lc code=end
