/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  return A.map((item) => item * item).sort((a, b) => a - b);
};
// @lc code=end
