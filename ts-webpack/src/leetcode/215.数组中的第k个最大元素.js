/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j + 1] < nums[j]) {
        var temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums[nums.length - k];
};
// @lc code=end
