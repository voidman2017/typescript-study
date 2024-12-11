/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString().split('')
    var cycles = parseInt(x.length/2)
    var len = x.length
    for(let i = 0;i<cycles;i++){
        if(x[i] === x[len-i-1]){
            continue
        }else{
            return false
        }
    }
    return true
};
// @lc code=end

