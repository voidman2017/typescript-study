/* 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：
输入：n = 2
输出：1

示例 2：
输入：n = 5
输出：5
 
提示：
0 <= n <= 100
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (typeof n !== "number") throw new Error("Parameter is not a number!");
  if (n === 0) return 0;
  if (n === 1) return 1;
  return (fib(n - 1) + fib(n - 2)) % 1000000007;
};

var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  const list = [0, 1];
  for (let i = 2; i <= n; i++) {
    list[i] = (list[i - 1] + list[i - 2]) % 1000000007;
  }
  return list[list.length - 1];
};
console.log(fib(81));
