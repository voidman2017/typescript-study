/*
 * @lc app=leetcode.cn id=1441 lang=javascript
 *
 * [1441] 用栈操作构建数组
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let len = 0;
  const _len = target.length;
  const r = [];
  for (let i = 1; i <= n; i++) {
    if (target.includes(i)) {
      r.push("Push");
      if (++len === _len) return r;
    } else {
      r.push("Push", "Pop");
    }
  }
  return r;
};
// @lc code=end

