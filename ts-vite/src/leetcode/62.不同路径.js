/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//   return dfs(m, n, 1, 1);
// };

// function dfs(m, n, row, col) {
//   if (row === m && col === n) return 1;
//   if (row > m || col > n) return 0;

//   const pathsRight = dfs(m, n, row, col + 1);
//   const pathsDown = dfs(m, n, row + 1, col);

//   return pathsRight + pathsDown;
// }
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill().map((x) => new Array(n).fill());
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end
// console.log('uniquePaths(7, 3): ', uniquePaths(7, 3));
