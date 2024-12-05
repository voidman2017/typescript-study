/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if(s.length === 0) return s
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const currentLen = len - i;
        const currentSNum = i + 1;
        for(let j = 0;j<currentSNum;j++){
            const currentS = s.substring(j,j+currentLen);
            const currentSLen = currentS.length;
            const cycles = parseInt(currentSLen/2);
            let isPalindrome = true;
            for(let k = 0;k<cycles;k++){
                if(currentS[k] === currentS[currentSLen-k-1]){
                    continue
                }else{
                    isPalindrome = false
                    break
                }
            }
            if(isPalindrome) return currentS
        }
    }
};
// @lc code=end

