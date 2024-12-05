/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length == 0) return true;
    let num = 0;
    for (var i = 0; i < s.length; i++) {
        if (t.indexOf(s[i], num) !== -1) {
            if (num > t.indexOf(s[i], num)) {
                return false;
            }
            num = t.indexOf(s[i], num) + 1;
        } else {
            return false;
        }
    }
    return true;
};
// @lc code=end

