/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/* 
var combinationSum = function (candidates, target) {
  const result = [];
  function getNext(target, candidates, store = []) {
    candidates.forEach((item, index) => {
      if (item < store[store.length - 1]) return;
      const temp = [].concat(store);
      const r = target - item;
      if (r === 0) {
        temp.push(item);
        result.push(temp);
      } else if (r > 0) {
        temp.push(item);
        getNext(r, candidates, temp);
      }
    });
  }
  getNext(target, candidates);
  return result;
};
 */

 
// @lc code=end
// console.log(combinationSum([2,3,6,7], 7));
