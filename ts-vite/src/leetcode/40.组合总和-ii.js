/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let res = [];
  const dfs = (position, rest, last) => {
    if (rest === 0) {
      res.push(last);
      return;
    }
    for (let i = position; i < candidates.length; i++) {
      if (candidates[i] <= rest) {
        dfs(i + 1, rest - candidates[i], [...last, candidates[i]]);
        while (candidates[i] === candidates[i + 1]) i++;
      }
    }
  };
  dfs(0, target, []);
  return res;
};
// @lc code=end
