/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = {};
  while (n !== 1 && !map[n]) {
    map[n] = true;
    n = getNext(n);
  }
  return n === 1;
};
function getNext(n) {
  return n
    .toString()
    .split("")
    .reduce((total, current) => {
      return total + Math.pow(current, 2);
    }, 0);
}
// @lc code=end
