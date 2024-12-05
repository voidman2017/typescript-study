/*
 * @lc app=leetcode.cn id=1664 lang=javascript
 *
 * [1664] 生成平衡数组的方案数
 *
 * https://leetcode.cn/problems/ways-to-make-a-fair-array/description/
 *
 * algorithms
 * Medium (60.58%)
 * Likes:    50
 * Dislikes: 0
 * Total Accepted:    10.1K
 * Total Submissions: 16.7K
 * Testcase Example:  '[2,1,6,4]'
 *
 * 给你一个整数数组 nums 。你需要选择 恰好 一个下标（下标从 0 开始）并删除对应的元素。请注意剩下元素的下标可能会因为删除操作而发生改变。
 *
 * 比方说，如果 nums = [6,1,7,4,1] ，那么：
 *
 *
 * 选择删除下标 1 ，剩下的数组为 nums = [6,7,4,1] 。
 * 选择删除下标 2 ，剩下的数组为 nums = [6,1,4,1] 。
 * 选择删除下标 4 ，剩下的数组为 nums = [6,1,7,4] 。
 *
 *
 * 如果一个数组满足奇数下标元素的和与偶数下标元素的和相等，该数组就是一个 平衡数组 。
 *
 * 请你返回删除操作后，剩下的数组 nums 是 平衡数组 的 方案数 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [2,1,6,4]
 * 输出：1
 * 解释：
 * 删除下标 0 ：[1,6,4] -> 偶数元素下标为：1 + 4 = 5 。奇数元素下标为：6 。不平衡。
 * 删除下标 1 ：[2,6,4] -> 偶数元素下标为：2 + 4 = 6 。奇数元素下标为：6 。平衡。
 * 删除下标 2 ：[2,1,4] -> 偶数元素下标为：2 + 4 = 6 。奇数元素下标为：1 。不平衡。
 * 删除下标 3 ：[2,1,6] -> 偶数元素下标为：2 + 6 = 8 。奇数元素下标为：1 。不平衡。
 * 只有一种让剩余数组成为平衡数组的方案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,1,1]
 * 输出：3
 * 解释：你可以删除任意元素，剩余数组都是平衡数组。
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：0
 * 解释：不管删除哪个元素，剩下数组都不是平衡数组。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/* var waysToMakeFair = function (nums) {
  // Time Limit Exceeded
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    const nNums = nums.filter((item, index) => index !== i);
    if (isBalanceArr(nNums)) result++;
  }
  return result;

  function isBalanceArr(arr) {
    return (
      arr.reduce((total, current, index) => {
        if (index % 2 == 0) {
          return total + current;
        } else {
          return total - current;
        }
      }, 0) === 0
    );
  }
}; */

var waysToMakeFair = function (nums) {
  const n = nums.length;
  const sum = [0, 0]; // sum[0] -> 偶数下标元素和； sum[1] -> 奇数下标元素和
  for (let i = 0; i < n; i++) {
    sum[i % 2] += nums[i];
  }
  let res = 0;
  // 当前已遍历的奇偶和
  const cur = [0, 0];
  for (let i = 0; i < n; i++) {
    // 获取从i到末尾未遍历的奇偶和
    const o = sum[0] - cur[0];
    const e = sum[1] - cur[1];
    // 去除i之后，判断奇偶和是否相等
    /*note: i & 1 
    如果 i 为偶数，则为0，Boolean(i & 1) => false
    如果 i 为奇数，则为1，Boolean(i & 1) => true
    */
    if (i & 1) { 
      if (cur[0] + e - nums[i] === cur[1] + o) res++;
    } else {
      if (cur[0] + e === cur[1] + o - nums[i]) res++;
    }
    cur[i % 2] += nums[i];
  }
  return res;
};

// @lc code=end
