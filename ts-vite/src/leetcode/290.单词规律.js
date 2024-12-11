/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  var arr = s.split(" ");
  if (pattern.length != arr.length) return false;
  for (var i = 0; i < pattern.length; i++) {
    if (pattern.indexOf(pattern[i]) != arr.indexOf(arr[i])) {
      return false;
    }
  }
  return true;
};
// @lc code=end
