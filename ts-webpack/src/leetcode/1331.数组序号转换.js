/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const sort = [...new Set(arr)].sort((a, b) => a - b);
  return arr.map(item=> sort.indexOf(item) + 1)
};
// @lc code=end
// const list = [40, 10, 20, 30, 20];
// console.log(arrayRankTransform(list));
