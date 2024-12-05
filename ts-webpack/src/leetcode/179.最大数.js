/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums = nums.sort((a, b) => {
    let s1 = `${a}${b}`;
    let s2 = `${b}${a}`;
    return s2 - s1;
  });
  return nums[0] ? nums.join("") : "0";
};
// @lc code=end
