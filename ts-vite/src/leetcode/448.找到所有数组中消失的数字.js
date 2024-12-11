/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const set = [...new Set(nums)].sort((a, b) => a - b);
  const len = nums.length;
  const r = [];
  for (let i = 1; i <= len; i++) {
    if (!set.includes(i)) {
      r.push(i);
    }
  }
  return r;
};
// @lc code=end
