/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (divisor === 1) {
    return dividend;
  }
  if (divisor === -1) {
    if (dividend === -Math.pow(2, 31)) {
      return Math.pow(2, 31) - 1;
    } else {
      return -dividend;
    }
  }
  let i = 0;
  let total = 0;
  let isOverZero = true;
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0))
    isOverZero = false;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  while (total < dividend) {
    total += divisor;
    total <= dividend ? i++ : i;
  }
  const r = isOverZero ? i : -i;
  if (r > max) {
    return max;
  } else if (r < min) {
    return min;
  } else {
    return r;
  }
};
// @lc code=end
