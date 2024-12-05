/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  const len = height.length;
  let max = 0;
  for (let i = 0; i < len; i++) {
    let l = height[i];
    for (let j = i + 1; j < len; j++) {
      let r = height[j];
      let h = Math.min(l, r);
      let size = h * (j-i)
      max = Math.max(max,size)
    }
  }
  return max
};
// @lc code=end
