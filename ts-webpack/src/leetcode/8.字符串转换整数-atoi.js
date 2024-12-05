/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str =  str.replace(/(^\s*)|(\s*$)/g,"")
    const reg = /^(-|\+|[0-9])\d*/
    const r = str.match(reg)
    if(!r) return 0;
    const numS = r[0]
    const num = parseInt(numS)
    if(isNaN(num)) return 0
    if(num>2147483647) return 2147483647
    if(num<-2147483648) return -2147483648
    return num
};
// @lc code=end

