/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
    let i = digits.length - 1
    let condition = true
    while (condition) {
        if (i < 0) {
            digits.unshift(0)
            i++
        }
        const isGt = digits[i] + 1 >= 10
        digits[i] = (digits[i] + 1) % 10
        if (isGt) {
            condition = true
            i--
        } else {
            condition = false
        }
    }
    return digits
};

// @lc code=end

