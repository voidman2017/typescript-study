/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var multiplier = x>=0? 1 : -1;
    var s = Math.abs(x).toString().split('').reverse().join('')*multiplier
    if(s>2147483647||s<-2147483648) return 0
    return s
};
console.log(reverse(1534236469))
// @lc code=end

