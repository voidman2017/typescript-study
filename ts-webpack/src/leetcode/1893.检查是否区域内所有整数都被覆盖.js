/*
 * @lc app=leetcode.cn id=1893 lang=javascript
 *
 * [1893] 检查是否区域内所有整数都被覆盖
 */

// @lc code=start
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    for (let i = left; i <= right; i++) {
        const inRange = ranges.some(range => {
            return range[0] <= i && range[1] >= i
        })
        if (!inRange) return false
    }
    return true
};

// @lc code=end

