/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  function getNext(saved, rest) {
    if (rest.length <= 1) {
      res.push([].concat(saved, rest));
    } else {
      rest.forEach((num, index) => {
        getNext([].concat(saved, num), getRest(rest, index));
      });
    }
  }
  function getRest(arr, index) {
    return [].concat(arr.slice(0, index), arr.slice(index + 1));
  }
  getNext([], nums);
  return res;
};
// @lc code=end
