/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // nums.sort((a, b) => a - b)
  let left = 0;
  let right = nums.length - 1;
  let current = 0;
  while (current <= right) {
    const num = nums[current];
    if (num === 0) {
      swap(current, left, nums);
      left++;
      current++;
    } else if (num === 2) {
      swap(current, right, nums);
      right--;
    } else {
      current++;
    }
  }
};
function swap(i, j, nums) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
// @lc code=end
