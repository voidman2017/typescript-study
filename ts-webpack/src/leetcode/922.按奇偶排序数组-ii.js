/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let even = [], odd = [], r = [];
  A.forEach((item) => {
      item % 2 == 0 ? odd.push(item) : even.push(item)
  })
  A.forEach((item, index) => {
      let pre = Math.floor(index / 2)
      index % 2 == 0 ? r.push(odd[pre]) : r.push(even[pre])
  })
  return r;
};
// @lc code=end

