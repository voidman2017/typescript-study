/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let res = 0;
  const row = grid.length;
  const col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const n = grid[i][j];
      if (grid[i][j]) {
        let add = 4;
        if (grid[i][j + 1]) {
          add--;
        }
        if (grid[i][j - 1]) {
          add--;
        }
        if (grid[i + 1] && grid[i + 1][j]) {
          add--;
        }
        if (grid[i - 1] && grid[i - 1][j]) {
          add--;
        }
        res += add;
      }
    }
  }
  return res;
};
// @lc code=end
