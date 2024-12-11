/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let length = nums.length;
  let maxTarget = 0;
  for (let i = 0; i < length; i++) {
    if (i <= maxTarget) {
      maxTarget = Math.max(maxTarget, i + nums[i]);
      if (maxTarget >= length - 1) return true;
    }
  }
  return false;
};
// @lc code=end
