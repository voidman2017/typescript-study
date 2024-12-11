/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
/* var addDigits = function (num) {
    while (num >= 10) {
        let nums = ('' + num).split('')
        num = nums.reduce((total, current) => {
            return total = total + parseInt(current)
        }, 0)
    }
    return num
}; */
var addDigits = function (num) {
    if (num < 10) return num
    return (num - 1) % 9 + 1
}
// @lc code=end

