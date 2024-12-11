/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix.length === 0) return 0;
  let max = 0;
  const heightsLen = matrix[0].length;
  for (let row = 0; row < matrix.length; row++) {
    const heights = new Array(heightsLen).fill(0);
    for (let col = 0; col < heightsLen; col++) {
      loop: for (let k = row; k >= 0; k--) {
        if (matrix[k][col] === "0") break loop;
        heights[col] += parseInt(matrix[k][col]);
      }
    }
    const maxArea = largestRectangleArea(heights);
    max = Math.max(max, maxArea);
  }
  return max;
};

function largestRectangleArea(heights) {
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
}
// @lc code=end
