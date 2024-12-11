/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var minMoves = function (nums) {
//     nums.sort((a, b) => a - b)
//     let min = nums[0]
//     let r = 0
//     for (let i = 0; i < nums.length; i++) {
//         r += (nums[i] - min)
//     }
//     return r
// };

var minMoves = function (nums) {
    const min = Math.min(...nums)
    const r = nums.reduce((total, current) => {
        return total + (current - min)
    }, 0)
    return r
}
// @lc code=end

