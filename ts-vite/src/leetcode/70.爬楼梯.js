/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/* var climbStairs = function (n) {
  let condition = true;
  let stack = [n];
  while (condition) {
    let hasMore = false;
    let temp = [];
    stack.forEach((item) => {
      if (item > 1) {
        hasMore = true;
        temp.push(item - 1, item - 2);
      }else{
        temp.push(item)
      }
    });
    stack = temp;
    condition = hasMore;
  }
  return stack.length
}; */
/* var climbStairs = function (n) {
  let total = 0;
  getLast(n);
  function getLast(n) {
    if (n === 1 || n === 0) {
      total++;
      return;
    }
    if (n === 2) {
      total += 2;
      return;
    }
    if (n === 3) {
      total += 3;
      return;
    }
    getLast(n - 1);
    getLast(n - 2);
  }
  return total;
}; */

var climbStairs = function (n) {
  const arr = [1, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[arr.length - 1];
};
// @lc code=end
