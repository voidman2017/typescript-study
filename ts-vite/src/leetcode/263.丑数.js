/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    if (num === 0) {
        return false
    }
    if (num === 1) {
        return true
    } else if (num % 2 === 0) {
        return isUgly(num / 2)
    } else if (num % 3 === 0) {
        return isUgly(num / 3)
    } else if (num % 5 === 0) {
        return isUgly(num / 5)
    } else {
        return false
    }
};
// @lc code=end

