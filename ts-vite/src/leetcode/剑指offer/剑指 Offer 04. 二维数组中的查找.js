/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === target) return true;
    }
  }
  return false;
};

var findNumberIn2DArray = function (matrix, target) {
  if (
    matrix == null ||
    matrix.length === 0 ||
    matrix[0] == null ||
    matrix[0].length === 0
  ) {
    return false;
  }
  let m = matrix.length;
  let n = matrix[0].length;
  let i = 0;
  let j = n - 1;
  while (i < m && j >= 0) {
    if (target < matrix[i][j]) {
      j--;
    } else if (target > matrix[i][j]) {
      i++;
    } else {
      return true;
    }
  }
  return false;
};

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

const target1 = 5;
const target2 = 20;
console.log(findNumberIn2DArray(matrix, target1));
console.log(findNumberIn2DArray(matrix, target2));
