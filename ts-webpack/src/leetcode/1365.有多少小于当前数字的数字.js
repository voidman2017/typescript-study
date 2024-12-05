/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const sortNums = [].concat(nums).sort((a, b) => a - b)
  return nums.map((num) => sortNums.indexOf(num))
}
// @lc code=end
