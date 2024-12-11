/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.min(nums[0], nums[1]);
  for (let i = 0; i < nums.length; i++) {
    if (
      nums[i] < nums[i - 1 > 0 ? i - 1 : nums.length - 1] &&
      nums[i] < nums[i + 1 < nums.length - 1 ? i + 1 : 0]
    ) {
      return nums[i];
    }
  }
  // return nums.sort((a, b) => a - b)[0];
};
// @lc code=end
