/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

/* 示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    const l = s[left].toLocaleLowerCase();
    const r = s[right].toLocaleLowerCase();
    if (!isEligible(l)) {
      left++;
      continue;
    }
    if (!isEligible(r)) {
      right--;
      continue;
    }
    if (l !== r) return false;
    left++;
    right--;
  }
  return true;
};

function isEligible(s) {
  return /^[0-9a-zA-Z]*$/.test(s);
}
// @lc code=end
