/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const result = [];
  const n = matrix.length;
  matrix.forEach((nums) => {
    const min = [...nums].sort((a, b) => a - b)[0];
    const index = nums.indexOf(min);
    let isMin = true;
    for (let i = 0; i < n; i++) {
      if (matrix[i][index] > min) {
        isMin = false;
        break;
      }
    }
    if (isMin) result.push(min);
  });
  return result;
};
// @lc code=end
