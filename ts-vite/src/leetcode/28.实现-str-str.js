/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === "") return 0;
  const h_len = haystack.length;
  const n_len = needle.length;
  if (n_len > h_len) return -1;
  for (let i = 0; i <= h_len - n_len; i++) {
    const temp = haystack.substring(i, i + n_len);
    if (temp === needle) return i;
  }
  return -1;
};
// @lc code=end
