/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  // 第一步:对角线交换
  for (let i = 0; i < row; i++) {
    for (let j = i; j < row; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // 第二步:左右交换
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col / 2; j++) {
      [matrix[i][j], matrix[i][row - j - 1]] = [matrix[i][row - j - 1], matrix[i][j]];
    }
  }
};
// @lc code=end
