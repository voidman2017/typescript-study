/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let DIF = Infinity;
  let result;
  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    for (let j = i + 1; j < nums.length - 1; j++) {
      const second = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        const third = nums[k];
        const sum = first + second + third;
        const tempDIF = Math.abs(target - sum);
        if (tempDIF < DIF) {
          DIF = tempDIF;
          result = sum;
        }
      }
    }
  }
  return result;
};
// @lc code=end
