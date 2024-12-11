/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    for (let i = 0; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            return i
        }
    }
};
// @lc code=end

