/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let last = {
    val: null,
    count: 0
  };
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === last.val && last.count >= 2) {
      nums.splice(i, 1);
    } else if (nums[i] !== last.val) {
      last.val = nums[i++];
      last.count = 1;
    } else {
      last.val = nums[i++];
      last.count++;
    }
  }
  return nums.length;
};
// removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
// @lc code=end
