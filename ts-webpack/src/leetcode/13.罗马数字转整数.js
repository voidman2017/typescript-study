/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  const reverseS = s.split("").reverse();
  const r = reverseS.reduce((r, s, index, arr) => {
    const isSubtraction =
      (s === "I" && arr[index - 1] === "X") ||
      (s === "I" && arr[index - 1] === "V") ||
      (s === "X" && arr[index - 1] === "L") ||
      (s === "X" && arr[index - 1] === "C") ||
      (s === "C" && arr[index - 1] === "D") ||
      (s === "C" && arr[index - 1] === "M");
    const sign = isSubtraction ? -1 : +1;
    return r + sign * map[s];
  }, 0);
  return r;
};
// @lc code=end
