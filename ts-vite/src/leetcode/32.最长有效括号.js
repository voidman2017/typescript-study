/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let max = 0;
  const len = s.length;
  const stack = [-1];
  for (let i = 0; i < len; i++) {
    const currentS = s[i];
    if (currentS === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        const lastIndex = stack[stack.length - 1];
        max = Math.max(max, i - lastIndex);
      }
    }
  }
  return max;
};
// @lc code=end
