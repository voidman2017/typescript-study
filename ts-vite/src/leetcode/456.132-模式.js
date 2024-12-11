/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let max;
    for (let j = i + 1; j < nums.length; j++) {
      if (max) {
        if (nums[j] > max) {
          max = nums[j];
        }
        if (nums[j] < max && nums[j] > min) return true;
      } else {
        if (nums[j] > min) {
          max = nums[j];
        }
      }
    }
  }
  return false;
};
// @lc code=end
