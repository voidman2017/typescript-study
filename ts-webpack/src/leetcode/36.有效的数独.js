/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValid(arr) {
  const temp = {};
  for (let i = 0; i < arr.length; i++) {
    const s = arr[i];
    if (s === ".") continue;
    if (temp[s]) return false;
    temp[s] = true;
  }
  return true;
}
function getMatrix(board, size) {
  const len = board.length;
  const loop = len / size;
  const result = [];
  for (let row = 0; row < loop; row++) {
    /* 控制行 */
    for (let col = 0; col < loop; col++) {
      /* 控制列 */
      const temp = [];
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          temp.push(board[row * size + j][col * size + i]);
        }
      }
      result.push(temp);
    }
  }
  return result;
}
var isValidSudoku = function (board) {
  const len = board.length;
  /* 判断行 */
  for (let i = 0; i < len; i++) {
    const row = board[i];
    if (!isValid(row)) return false;
  }
  /* 判断列 */
  var newArray = board[0].map(function (col, i) {
    return board.map(function (row) {
      return row[i];
    });
  });
  for (let i = 0; i < len; i++) {
    const col = newArray[i];
    if (!isValid(col)) return false;
  }
  /* 判断3*3 */
  var group3_3 = getMatrix(board,3)
  for (let i = 0; i < len; i++) {
    const group = group3_3[i];
    if (!isValid(group)) return false;
  }
  const arrIndex = [];
  return true;
};

// @lc code=end
// const board1 = [
//   ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];
// const board2 = [
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ]
// console.log(isValidSudoku(board1));
// console.log(isValidSudoku(board2));
