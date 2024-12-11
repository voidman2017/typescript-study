/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
/* var findTheDifference = function (s, t) {
  s = s.split("").sort();
  t = t.split("").sort();
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== s[i]) return t[i];
  }
}; */

var findTheDifference = function (s, t) {
  for (let i = 0; i < t.length; i++) {
    const index = s.indexOf(t[i]);
    if (~index) {
      s = s.replace(t[i], "");
    } else {
      return t[i];
    }
  }
};
// @lc code=end
