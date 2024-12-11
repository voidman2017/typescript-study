/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const left = ["(", "[", "{"];
  const right = [")", "]", "}"];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const temp = s[i];
    const isLeft = left.includes(temp);
    if (isLeft) {
      stack.push(temp);
    } else {
      const lastOne = stack[stack.length - 1];
      const correct = map[lastOne];
      if (temp !== correct) {
        return false;
      } else {
        stack.splice(stack.length - 1, 1);
      }
    }
  }
  if (stack.length === 0) return true;
  return false;
};
// @lc code=end
