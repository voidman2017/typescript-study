/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    const counts = [];
    let ptr = 0, n = s.length;
    while (ptr < n) {
        const c = s.charAt(ptr);
        let count = 0;
        while (ptr < n && s.charAt(ptr) === c) {
            ++ptr;
            ++count;
        }
        counts.push(count);
    }
    let ans = 0;
    for (let i = 1; i < counts.length; ++i) {
        ans += Math.min(counts[i], counts[i - 1]);
    }
    return ans;
};
// console.log(countBinarySubstrings("00110"))
// @lc code=end

