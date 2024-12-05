/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true;
  let left = 0,
    right = num;
  while (right - left > 1) {
    let n = Math.floor((left + right) / 2);
    if (n * n === num) return true;
    if (n * n > num) {
      right = n;
    }
    if (n * n < num) {
      left = n;
    }
  }
  return false;
};
// @lc code=end
