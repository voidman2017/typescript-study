/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  const result = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    const arr = new Array(i + 1);
    const last = result[result.length - 1];
    arr[0] = 1;
    arr[arr.length - 1] = 1;
    let left = 1;
    let right = i - 1;
    while (left <= right) {
      arr[left] = last[left] + last[left - 1];
      arr[right] = last[right] + last[right - 1];
      left++;
      right--;
    }
    result.push(arr);
  }
  return result;
};
// @lc code=end
