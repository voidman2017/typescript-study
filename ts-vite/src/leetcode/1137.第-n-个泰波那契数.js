/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 *
 * https://leetcode.cn/problems/n-th-tribonacci-number/description/
 *
 * algorithms
 * Easy (60.91%)
 * Likes:    312
 * Dislikes: 0
 * Total Accepted:    214.7K
 * Total Submissions: 351.9K
 * Testcase Example:  '4'
 *
 * 泰波那契序列 Tn 定义如下：
 *
 * T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
 *
 * 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
 *
 *
 *
 * 示例 1：
 *
 * 输入：n = 4
 * 输出：4
 * 解释：
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 *
 *
 * 示例 2：
 *
 * 输入：n = 25
 * 输出：1389537
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= n <= 37
 * 答案保证是一个 32 位整数，即 answer <= 2^31 - 1。
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/* var tribonacci = function(n) {
    if (n === 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    let p = 0, q = 0, r = 1, s = 1;
    for (let i = 3; i <= n; ++i) {
        p = q;
        q = r;
        r = s;
        s = p + q + r;
    }
    return s;
}; */

var tribonacci = function (n) {
  const arr = [0, 1, 1];
  if (n === 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[arr.length - 1];
};

// @lc code=end

