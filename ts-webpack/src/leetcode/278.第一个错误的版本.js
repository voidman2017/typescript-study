/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0,
      right = n;
    let firstBadVersion = n;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        firstBadVersion = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return firstBadVersion;
  };
};
// @lc code=end
