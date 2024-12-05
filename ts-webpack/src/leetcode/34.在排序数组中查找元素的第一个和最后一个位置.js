/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* 
 var searchRange = function (nums, target) {
  const result = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const s = nums[i];
    if (s === target) {
      if (result.length < 2) {
        result.push(i);
      } else {
        result[1] = i;
      }
    }
  }
  if (result.length === 0) {
    result.push(-1);
    result.push(-1);
  }
  if (result.length === 1) {
    result.push(result[result.length - 1]);
  }
  return result;
};
 */

/* 
var searchRange = function (nums, target) {
  const result = [-1, -1];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === target) {
      result[0] = i;
      break;
    }
  }
  if (result[0] === -1) return result;
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] === target) {
      result[1] = i;
      return result;
    }
  }
};
*/
/* TODO 二分法 */
var searchRange = function (nums, target) {
  
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// @lc code=end
