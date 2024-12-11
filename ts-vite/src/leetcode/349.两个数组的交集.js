/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let n1,
    n2,
    res = [];
  nums1.length < nums2.length
    ? ((n1 = nums1), (n2 = nums2))
    : ((n1 = nums2), (n2 = nums1));
  n1.forEach((n) => {
    if (n2.includes(n) && !res.includes(n)) {
      res.push(n);
    }
  });
  return res;
};
// @lc code=end
