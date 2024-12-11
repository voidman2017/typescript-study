/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/* 
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (target === numbers[i] + numbers[j]) {
        return [i + 1, j + 1];
      }
    }
  }
}; 
*/
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    const temp = numbers[left] + numbers[right];
    if (temp === target) {
      return [left + 1, right + 1];
    } else if (temp < target) {
      left++;
    } else {
      right--;
    }
  }
};
// @lc code=end
