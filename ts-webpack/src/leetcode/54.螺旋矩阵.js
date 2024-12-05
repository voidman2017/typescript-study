/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // const direction = ["right", "bottom", "left", "top"];
  if (matrix.length === 0) return [];
  let direction = 0;
  const row = matrix.length; //行数
  const col = matrix[0].length; //列数
  // const visited = generateArr(row, col, false);
  const visited = new Array(row).fill(null).map((x) => new Array(col).fill(false));
  const res = [];
  const total = row * col;
  let index = 0;
  let i = 0;
  let j = 0;
  while (index < total) {
    visited[i][j] = true;
    res.push(matrix[i][j]);
    switch (direction % 4) {
      case 0:
        if (j + 1 >= col || visited[i][j + 1]) {
          //到达边界
          direction++;
          i++;
        } else {
          j++;
        }
        break;
      case 1:
        if (i + 1 >= row || visited[i + 1][j]) {
          direction++;
          j--;
        } else {
          i++;
        }
        break;
      case 2:
        if (j - 1 < 0 || visited[i][j - 1]) {
          direction++;
          i--;
        } else {
          j--;
        }
        break;
      case 3:
        if (i - 1 < 0 || visited[i - 1][j]) {
          direction++;
          j++;
        } else {
          i--;
        }
        break;
    }
    index++;
  }
  return res;
};
// function generateArr(row, col, val) {
//   const arr = [];
//   for (let i = 0; i < row; i++) {
//     const temp = [];
//     for (let j = 0; j < col; j++) {
//       temp.push(val);
//     }
//     arr.push(temp);
//   }
//   return arr;
// }
// @lc code=end
