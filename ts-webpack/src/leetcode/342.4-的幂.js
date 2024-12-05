/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  while (num > 1) {
    num = num / 4;
  }
  return num === 1;
};
// @lc code=end
