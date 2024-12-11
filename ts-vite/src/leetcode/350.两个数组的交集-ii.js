/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let n1,
    n2,
    res = [];
  nums1.length < nums2.length
    ? ((n1 = nums1), (n2 = nums2))
    : ((n1 = nums2), (n2 = nums1));
  n1.forEach((n) => {
    const index = n2.indexOf(n);
    if (~index) {
      n2.splice(index, 1);
      res.push(n);
    }
  });
  return res;
};
// @lc code=end
