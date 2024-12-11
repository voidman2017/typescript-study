/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 1) return 1;
  let start = 0;
  let end = x;
  let r = Math.floor((start + end) / 2);
  while (!(Math.pow(r, 2) <= x && Math.pow(r + 1, 2) > x)) {
    const pow = Math.pow(r, 2);
    const mid = Math.floor((start + end) / 2);
    if (pow > x) {
      end = mid;
    } else if (pow < x) {
      start = mid;
    } else {
      return r;
    }
    r = Math.floor((start + end) / 2);
  }
  return r;
};
// console.log(mySqrt(562464195));
// @lc code=end
