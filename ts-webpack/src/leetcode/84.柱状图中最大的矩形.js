/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function (heights) {
  let max = 0;
  const len = heights.length;
  for (let i = 0; i < len; i++) {
    let min = heights[i];
    for (let j = i; j < len; j++) {
      min = Math.min(min, heights[j]);
      const area = min * (j - i + 1);
      max = Math.max(area, max);
    }
  }
  return max;
};
// @lc code=end
