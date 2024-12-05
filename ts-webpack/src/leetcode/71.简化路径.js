/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const arr = path.split("/");
  const r = [];
  arr.forEach((item) => {
    if (item === "..") {
      r.pop();
    } else if (item !== "" && item !== ".") {
      r.push(item);
    }
  });
  return "/" + r.join("/");
};
// @lc code=end
