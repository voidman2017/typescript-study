/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let l = 0;
  let r = 1;
  let c = 1;
  while (c !== n) {
    c++;
    let temp = l + r;
    l = r;
    r = temp;
  }
  return r;
};
// @lc code=end
