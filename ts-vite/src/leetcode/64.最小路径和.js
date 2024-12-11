/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
function generateMatrix(m, n, item) {
  return new Array(m).fill().map((x) => new Array(n).fill(item));
}
var minPathSum = function (grid) {
  if (grid.length === 0) return 0;
  const m = grid.length;
  const n = grid[0].length;
  const matrix = generateMatrix(m, n);
  let temp = 0;
  for (let i = 0; i < n; i++) {
    temp += grid[0][i];
    matrix[0][i] = temp;
  }
  temp = 0;
  for (let i = 0; i < m; i++) {
    temp += grid[i][0];
    matrix[i][0] = temp;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1]) + grid[i][j];
    }
  }
  return matrix[m - 1][n - 1];
};
// @lc code=end
/* 
const grid1 = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];
minPathSum(grid1);
console.log("minPathSum(grid1): ", minPathSum(grid1));

const grid2 = [
  [1, 3, 4, 8],
  [3, 2, 2, 4],
  [5, 7, 1, 9],
  [2, 3, 2, 3]
];
minPathSum(grid2);
console.log("minPathSum(grid2): ", minPathSum(grid2));
 */