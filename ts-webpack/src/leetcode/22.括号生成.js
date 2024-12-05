/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  /**
   * 
   * @param {*} l 剩余左括号数
   * @param {*} r 剩余右括号书
   * @param {*} s 当前回合添加的括号
   */
  function fn(l, r, s) {
    if (l > r) return; //由于添加括号是先左再右。当剩余左括号数>剩余右括号数时，则表示当前存在先添加了右括号的情况，不符合添加规则。

    if (l === 0 && r === 0) { // 当剩余括号数为0时，则表示所有括号添加完毕
      res.push(s);
      return;
    }

    if (l > 0) fn(l - 1, r, s + "("); //添加左括号并减少左括号库存
    if (r > 0) fn(l, r - 1, s + ")"); //添加右括号并减少右括号库存
  }

  fn(n, n, "");
  return res;
};
// @lc code=end