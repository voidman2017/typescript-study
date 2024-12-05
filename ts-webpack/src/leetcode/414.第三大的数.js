/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const set = [...new Set(nums)].sort((a, b) => b - a);
  return set.length >= 3 ? set[2] : set[0];
};
// @lc code=end
