/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
/* var rotateString = function (s, goal) {
  const len = s.length;
  for (let i = 0; i < len; i++) {
    s = s.substring(len - 1, len) + s.substring(0, len - 1);
    if (s === goal) return true;
  }
  return false;
}; */

var rotateString = function (s, goal) {
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if(s.slice(i) + s.slice(0, i) === goal) return true;
  }
  return false;
};
// @lc code=end
