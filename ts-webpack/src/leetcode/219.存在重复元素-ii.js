/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  return nums.some((item, index) => {
    for (let i = 1; i <= k; i++) {
      if (nums[index + i] === item) return true;
    }
    return false;
  });
};
// @lc code=end
