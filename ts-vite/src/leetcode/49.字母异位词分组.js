/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let sorted = strs.map((item) => item.split("").sort().join(""));
  let map = {};
  const res = [];
  sorted.forEach((item, index) => {
    if (typeof map[item] === "number") {
      res[map[item]].push(strs[index]);
    } else {
      map[item] = res.length;
      res.push([strs[index]]);
    }
  });
  return res;
};
// @lc code=end
