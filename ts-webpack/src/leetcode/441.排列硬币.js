/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let col = 1;
  while (n >= col) {
    n = n - col;
    col++;
  }
  return --col;
};
// @lc code=end

