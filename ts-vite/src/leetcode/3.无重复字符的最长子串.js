/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(!s) return 0
  let max = 1;
  const list = s.split("");
  const len = list.length;
  let temp = {};
  for (let i = 0; i < len; i++) {
    const tempList = list.slice(i);
    if(max > len-i) break
    for (let j = 0; j < tempList.length; j++) {
      if(temp[tempList[j]]){
        break
      }
      temp[tempList[j]] = 1
    }
    const currentLength = Object.keys(temp).length;
    temp = {};
    max = Math.max(currentLength,max)
  }
  return max
};
lengthOfLongestSubstring("pwwkew");
// @lc code=end
