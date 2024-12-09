/* 
问题描述
在一个班级中，每位同学都拿到了一张卡片，上面有一个整数。有趣的是，除了一个数字之外，所有的数字都恰好出现了两次。现在需要你帮助班长小C快速找到那个拿了独特数字卡片的同学手上的数字是什么。

要求：

设计一个算法，使其时间复杂度为 O(n)，其中 n 是班级的人数。
尽量减少额外空间的使用，以体现你的算法优化能力。
测试样例
样例1：

输入：cards = [1, 1, 2, 2, 3, 3, 4, 5, 5]
输出：4
解释：拿到数字 4 的同学是唯一一个没有配对的。

样例2：

输入：cards = [0, 1, 0, 1, 2]
输出：2
解释：数字 2 只出现一次，是独特的卡片。

样例3：

输入：cards = [7, 3, 3, 7, 10]
输出：10
解释：10 是班级中唯一一个不重复的数字卡片。

约束条件
1 ≤ cards.length ≤ 1001
0 ≤ cards[i] ≤ 1000
班级人数为奇数
除了一个数字卡片只出现一次外，其余每个数字卡片都恰好出现两次
*/

export function solution1(cards: number[]): number {
  const cardMaps: Record<number, boolean> = {};
  const resultArray: number[] = [];
  for (let i = 0; i < cards.length; i++) {
    const current: number = cards[i];
    cardMaps[current] = cardMaps[current] ? false : true;
    if (cardMaps[current]) {
      resultArray.push(current);
    } else {
      resultArray.splice(resultArray.indexOf(current), 1);
    }
  }
  return resultArray[0];
}

/**
 * 异或运算
 * @param cards 
 * @returns
 * 
这个解法的优点：
时间复杂度：O(n)，只需要遍历一次数组
空间复杂度：O(1)，只使用了一个变量
原理：利用异或运算的特性
a ^ a = 0（相同数字异或为0）
a ^ 0 = a（任何数字与0异或等于自身）
异或运算满足交换律和结合律

为什么这样做有效：
当两个相同的数字进行异或运算时，结果为0
所有出现两次的数字最终都会被抵消为0
只出现一次的数字会保留下来
最终结果就是那个只出现一次的数字
这比原来的解法要好，因为：
不需要额外的数据结构（原解法使用了对象和数组）
代码更简洁
内存使用更少
运行速度更快 
 */

export function solution2(cards: number[]): number {
  let result = 0;
  for (const num of cards) {
    result ^= num;
  }
  return result;
}

function main() {
  console.log('==========01.找单独的数==========');
  console.log(solution1([1, 1, 2, 2, 3, 3, 4, 5, 5]) === 4);
  console.log(solution1([0, 1, 0, 1, 2]) === 2);

  console.log(solution2([1, 1, 2, 2, 3, 3, 4, 5, 5]) === 4);
  console.log(solution2([0, 1, 0, 1, 2]) === 2);
  console.log('==========01.找单独的数==========');
}

main();
