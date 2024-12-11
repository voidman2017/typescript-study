/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const len = Math.max(num1.length, num2.length);
  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();
  let r = [];
  let tens = 0;
  for (var i = 0; i < len; i++) {
    let current = ~~num1[i] + ~~num2[i] + tens;
    let digits = current % 10;
    r.unshift(digits);
    tens = current > 9 ? 1 : 0;
  }
  if (tens) {
    r.unshift(tens);
  }
  return r.join("");
};
// @lc code=end
