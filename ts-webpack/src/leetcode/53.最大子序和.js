/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let total = nums[i];
        max = Math.max(max, total)
        for (let j = i + 1; j < nums.length; j++) {
            total += nums[j]
            max = Math.max(max, total)
        }
    }
    return max
};
// @lc code=end

