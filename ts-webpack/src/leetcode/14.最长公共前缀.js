/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return "";
  let r = "";
  let index = 0;
  let hasCommonPrefix = true;
  while (hasCommonPrefix) {
    const baseStr = strs[0][index];
    if(!baseStr) break
    hasCommonPrefix = strs.every(item => {
      return item[index] === baseStr;
    });
    if (hasCommonPrefix) {
      r += baseStr;
    }
    index++
  }
  return r;
};
// @lc code=end
