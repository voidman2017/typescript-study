/* 
问题描述
小R正在研究一组观光景点，每个景点都有一个评分，保存在数组 values 中，其中 values[i] 表示第 i 个观光景点的评分。同时，景点之间的距离由它们的下标差 j - i 表示。
一对景点 (i < j) 的观光组合得分为 values[i] + values[j] + i - j，也就是两者评分之和减去它们之间的距离。
小R想知道，在哪种情况下能够获得观光景点组合的最高得分。

约束条件：
2 <= values.length
1 <= values[i] <= 1000

测试样例

样例1：
输入：values = [8, 3, 5, 5, 6]
输出：11

样例2：
输入：values = [10, 4, 8, 7]
输出：16

样例3：
输入：values = [1, 2, 3, 4, 5]
输出：8

*/

/**
 * 计算最佳观光组合得分
 * 对于景点 i 和 j，得分计算公式为: values[i] + values[j] + i - j
 * @param values 每个景点的分值数组
 * @returns 返回最高观光组合得分
 */
export function solution1(values: number[]): number {
  // 存储最大观光组合得分
  let result = 0;
  // 记录当前位置之前的最大 values[i] + i 值
  let max = values[0] + 0;

  // 从索引1开始遍历所有景点
  for(let j = 1; j < values.length; j++) {
    // 计算当前位置与之前位置的最大组合得分
    // max 代表之前位置的 values[i] + i
    // values[j] - j 是当前位置的值
    result = Math.max(result, max + values[j] - j);

    // 更新最大 values[i] + i 值
    // 为下一轮计算做准备
    max = Math.max(max, values[j] + j);
  }

  return result;
}