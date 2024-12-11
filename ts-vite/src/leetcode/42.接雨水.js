/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const len = height.length;
  let total = 0;
  for (let i = 0; i < len; i++) {
    let max_left = 0;
    let max_right = 0;
    let h = height[i];
    for (let j = i - 1; j >= 0; j--) {
      const left = height[j];
      max_left = Math.max(left, max_left);
    }
    for (let k = i + 1; k < len; k++) {
      const right = height[k];
      max_right = Math.max(right, max_right);
    }
    let min_max = Math.min(max_left, max_right);
    const t = min_max - h;
    if (t > 0) {
      total += t;
    }
  }
  return total;
};
// @lc code=end
