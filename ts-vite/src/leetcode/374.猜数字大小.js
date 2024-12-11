/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 0,
    right = n;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let g = guess(mid);
    if (g === 0) {
      return mid;
    } else if (g === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (guess(left) === 0) return left;
  if (guess(right) === 0) return right;
};
// @lc code=end
