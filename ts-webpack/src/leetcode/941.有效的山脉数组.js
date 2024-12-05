/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  if (A.length < 3) return false;
  if (A[1] <= A[0]) return false;
  let turning_point = 0;
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] === A[i - 1]) return false;
    if (
      (A[i] > A[i - 1] && A[i] > A[i + 1]) ||
      (A[i] < A[i - 1] && A[i] < A[i + 1])
    )
      turning_point++;
    if (turning_point > 1) return false;
  }
  return turning_point === 1;
};
// @lc code=end

// validMountainArray([1,3,2])
