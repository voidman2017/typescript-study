/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/* var searchMatrix = function (matrix, target) {
  if (!matrix[0] || matrix[0].length === 0) return false;
  const n = matrix.length;
  const m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    const list = matrix[i];
    if (target >= list[0] && target <= list[m - 1]) {
      for (let j = 0; j < m; j++) {
        if (target === list[j]) {
          return true;
        }
      }
      return false;
    }
  }
  return false;
}; */

var searchMatrix = function (matrix, target) {
  if (!matrix[0] || matrix[0].length === 0) return false;
  const n = matrix.length;
  const m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    const list = matrix[i];
    if (target >= list[0] && target <= list[m - 1]) {
      /* 二分法 */
      let left = 0,
        right = m - 1;
      while (right - left > 1) {
        let mid = Math.floor((left + right) / 2);
        if (target === list[mid]) {
          return true;
        } else if (target < list[mid]) {
          right = mid;
        } else {
          left = mid;
        }
      }
      if (list[left] === target || list[right] === target) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

/* 代码简洁，但是效率低；没有利用矩阵matrix的两个特性 */
/* var searchMatrix = function (matrix, target) {
  return matrix.some((list = []) => {
    return list.some((item) => item === target);
  });
}; */
// @lc code=end
