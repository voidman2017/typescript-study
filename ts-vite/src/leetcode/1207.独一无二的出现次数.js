/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }
  const mapArr = Object.values(map);
  const set = new Set();
  for (const item of mapArr) {
    if (set.has(item)) {
      return false;
    } else {
      set.add(item);
    }
  }
  return true;
};
// @lc code=end
