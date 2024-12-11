/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
/* 输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。 */
var backspaceCompare = function (S, T) {
  const arrS = [];
  const arrT = [];
  S.split("").forEach((item) => {
    if (item === "#") {
      arrS.pop();
    } else {
      arrS.push(item);
    }
  });
  T.split("").forEach((item) => {
    if (item === "#") {
      arrT.pop();
    } else {
      arrT.push(item);
    }
  });
  return arrS.join("") === arrT.join("");
};
// @lc code=end
