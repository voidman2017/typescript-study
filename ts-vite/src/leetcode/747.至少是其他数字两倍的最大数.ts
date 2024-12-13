/*
 * @lc app=leetcode.cn id=747 lang=typescript
 *
 * [747] 至少是其他数字两倍的最大数
 *
 * https://leetcode.cn/problems/largest-number-at-least-twice-of-others/description/
 *
 * algorithms
 * Easy (47.14%)
 * Likes:    211
 * Dislikes: 0
 * Total Accepted:    104.5K
 * Total Submissions: 221.7K
 * Testcase Example:  '[3,6,1,0]'
 *
 * 给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。
 *
 * 请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [3,6,1,0]
 * 输出：1
 * 解释：6 是最大的整数，对于数组中的其他整数，6 至少是数组中其他元素的两倍。6 的下标是 1 ，所以返回 1 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3,4]
 * 输出：-1
 * 解释：4 没有超过 3 的两倍大，所以返回 -1 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2 <= nums.length <= 50
 * 0 <= nums[i] <= 100
 * nums 中的最大元素是唯一的
 *
 *
 */

// @lc code=start
export function dominantIndex(nums: number[]): number {
  let m1 = -1,
    m2 = -1;
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > m1) {
      m2 = m1;
      m1 = nums[i];
      index = i;
    } else if (nums[i] > m2) {
      m2 = nums[i];
    }
  }
  return m1 >= m2 * 2 ? index : -1;
}
// @lc code=end
