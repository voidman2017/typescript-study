/* 
问题描述
小R正在计划一次从地点A到地点B的徒步旅行，总路程需要 N 天。为了在旅途中保持充足的能量，小R每天必须消耗1份食物。
幸运的是，小R在路途中每天都会经过一个补给站，可以先购买完食物后再消耗今天的1份食物。
然而，每个补给站的食物每份的价格可能不同，并且小R在购买完食物后最多只能同时携带 K 份食物。

现在，小R希望在保证每天食物消耗的前提下，以最小的花费完成这次徒步旅行。你能帮助小R计算出最低的花费是多少吗？

**输入 **
n 总路程需要的天数
k 小R最多能同时携带食物的份数
data[i] 第i天补给站每份食物的价格

**输出 **
返回完成这次徒步旅行的最小花费

**约束条件 **
1 < n,k < 1000
1 < data[i] < 10000

测试样例
样例1：

输入：n = 5 ,k = 2 ,data = [1, 2, 3, 3, 2]
输出：9

样例2：

输入：n = 6 ,k = 3 ,data = [4, 1, 5, 2, 1, 3]
输出：9

样例3：

输入：n = 4 ,k = 1 ,data = [3, 2, 4, 1]
输出：10

【tag】： 动态规划

*/
/* 
https://juejin.cn/post/7435037078473621555
https://juejin.cn/post/7435304955878015015
*/

export function solution1(n: number, k: number, data: number[]): number {
  // 初始化dp数组，dp[i]表示第i天结束时的最小花费
  const dp: number[] = new Array(n + 1).fill(Infinity);
  dp[0] = 0; // 第0天的花费为0
  for (let i = 1; i <= n; i++) {
    // 计算当天购买食物的花费
    // 从最近的k天中选择最低价格
    const startIndex = Math.max(0, i - k);
    const cost = Math.min(...data.slice(startIndex, i));
    // 更新dp数组
    dp[i] = Math.min(dp[i], dp[i - 1] + cost);
  }
  return dp[n];
}

export function solution2(n: number, k: number, data: number[]): number {
  const dp: number[] = new Array(n + 1).fill(Infinity);
  // 添加购买记录数组
  const purchases: number[] = new Array(n).fill(0);

  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    const startIndex = Math.max(0, i - k);
    // 找出最低价格及其对应的日期
    let minCost = Infinity;
    let minDay = startIndex;

    for (let j = startIndex; j < i; j++) {
      if (data[j] < minCost) {
        minCost = data[j];
        minDay = j;
      }
    }

    dp[i] = dp[i - 1] + minCost;
    purchases[i - 1] = minDay; // 记录在第i天消耗的食物是在哪天购买的
  }

  // 打印购买决策
  console.log('购买决策:');
  for (let i = 0; i < n; i++) {
    console.log(
      `第${i + 1}天消耗的食物在第${purchases[i] + 1}天购买，价格为${data[purchases[i]]}`
    );
  }
  console.log(dp)
  return dp[n];
}

function main() {
  console.log('==========02.徒步旅行中的补给问题==========');
  console.log(solution2(5, 2, [1, 2, 3, 3, 2]) === 9);
  console.log(solution1(6, 3, [4, 1, 5, 2, 1, 3]) === 9);
  console.log(solution2(4, 1, [3, 2, 4, 1]) === 10);
  console.log('==========02.徒步旅行中的补给问题==========');
}

main();
