/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let temp = 0;
    for (let num of nums) {
        temp ^= num
    }
    return temp
};
// @lc code=end

