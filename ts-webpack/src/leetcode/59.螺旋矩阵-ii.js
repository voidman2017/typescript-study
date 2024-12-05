/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */

// 输入: 3
// 输出:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]
var generateMatrix = function (n) {
  if (n === 0) return [];
  const matrix = new Array(n).fill(null).map((x) => new Array(n));
  matrix[0][0] = 1;
  let direction = 0;
  let i = 0;
  let j = 0;
  for (let k = 2; k <= n * n; k++) {
    switch (direction % 4) {
      case 0:
        if (j + 1 >= n || matrix[i][j + 1]) {
          direction++;
          i++;
        } else {
          j++;
        }
        break;
      case 1:
        if (i + 1 >= n || matrix[i + 1][j]) {
          direction++;
          j--;
        } else {
          i++;
        }
        break;
      case 2:
        if (j - 1 < 0 || matrix[i][j - 1]) {
          direction++;
          i--;
        } else {
          j--;
        }
        break;
      case 3:
        if (i - 1 < 0 || matrix[i - 1][j]) {
          direction++;
          j++;
        } else {
          i--;
        }
        break;
    }
    matrix[i][j] = k;
  }
  return matrix;
};
// @lc code=end
