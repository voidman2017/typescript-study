/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const temp = [];
  for (let i = 0; i < s.length; i++) {
    const index = temp.findIndex((item) => item.word === s[i]);
    if (index > -1) {
      temp[index].num++;
    } else {
      temp.push({
        word: s[i],
        num: 1,
        index: i
      });
    }
  }
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].num === 1) {
      return temp[i].index;
    }
  }
  return -1
};
// @lc code=end
// console.log(firstUniqChar("loveleetcode"))