/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
/* var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const buy = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const sale = prices[j];
      const income = sale - buy;
      if (income > max) max = income;
    }
  }
  return max;
}; */
var maxProfit = function (prices) {
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};
// @lc code=end
