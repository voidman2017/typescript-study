/* 
问题描述
小M面对一组从 1 到 9 的数字，这些数字被分成多个小组，并从每个小组中选择一个数字组成一个新的数。
目标是使得这个新数的各位数字之和为偶数。任务是计算出有多少种不同的分组和选择方法可以达到这一目标。

numbers: 一个由多个整数字符串组成的列表，每个字符串可以视为一个数字组。小M需要从每个数字组中选择一个数字。
例如对于[123, 456, 789]，14个符合条件的数为：147 149 158 167 169 248 257 259 268 347 349 358 367 369。

测试样例
样例1：
输入：numbers = [123, 456, 789]
输出：14

样例2：
输入：numbers = [123456789]
输出：4

样例3：
输入：numbers = [14329, 7568]
输出：10

【tag】： 动态规划

*/

export function solution1(numbers: number[]): number {
  // 1、统计每个数字组中奇数和偶数的个数
  const groups = numbers.map(num => {
    const numStr = num.toString();
    const odd = numStr
      .split('')
      .filter(digit => parseInt(digit) % 2 !== 0).length;
    const even = numStr.length - odd;
    return { odd, even };
  });

  //  2、动态规划
  let dp = { even: 1, odd: 0 };
  for (const { odd, even } of groups) {
    const newDp = {
      even: 0,
      odd: 0,
    };
    for (const sum in dp) {
      const isEven = sum === 'even';
      newDp.odd += dp[sum as keyof typeof dp] * (isEven ? odd : even);
      newDp.even += dp[sum as keyof typeof dp] * (isEven ? even : odd);
    }
    dp = newDp;
  }
  return dp.even;
}

export function solution2(numbers: number[]): number {
  // dp.even 表示和为偶数的组合数，dp.odd 表示和为奇数的组合数
  let dp = { even: 1, odd: 0 }; // 初始状态：[偶数组合数, 奇数组合数]

  for (const num of numbers) {
    // 统计当前数字组中奇偶数的个数
    let odd = 0,
      even = 0;
    let temp = num;
    while (temp > 0) {
      if ((temp % 10) % 2 === 1) {
        odd++;
      } else {
        even++;
      }
      temp = Math.floor(temp / 10);
    }

    // 状态转移
    const newDp = {
      even: dp.even * even + dp.odd * odd, // 新的偶数组合
      odd: dp.even * odd + dp.odd * even,  // 新的奇数组合
    };
    dp = newDp;
  }

  return dp.even;
}

/* 
  [123,456,789]
  [{奇数个数:2,偶数个数:1},{奇数个数:2,偶数个数:1},{奇数个数:2,偶数个数:1}]
  偶数组合 = 2*2*1 + 2*1*2 + 1 * 2 * 2 + 1*1 * 1 = 14
  */
