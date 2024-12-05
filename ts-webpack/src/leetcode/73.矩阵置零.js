/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const isZero = [];
  const row = matrix.length;
  const col = matrix[0].length;
  matrix.forEach((item, m) => {
    item.forEach((item, n) => {
      if (item === 0) {
        isZero.push([m, n]);
      }
    });
  });
  isZero.forEach((item) => {
    const [m, n] = item;
    matrix[m] = new Array(col).fill(0);
    for (let i = 0; i < row; i++) {
      matrix[i][n] = 0;
    }
  });
};
/* const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
];
setZeroes(matrix); */
// @lc code=end
