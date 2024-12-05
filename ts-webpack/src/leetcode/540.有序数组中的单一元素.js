/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];
  for (let i = 1; i < nums.length; ) {
    if (nums[i] === nums[i - 1]) {
      i += 2;
    } else {
      return nums[i - 1];
    }
  }
  return nums[nums.length - 1];
};
// @lc code=end
