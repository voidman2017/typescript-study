/*
 * @lc app=leetcode.cn id=5894 lang=javascript
 *
 * [5894] 至少在两个数组中出现的值
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    const all = [...nums1, ...nums2, ...nums3]
    const unique = Array.from(new Set(all))
    const res = []
    unique.forEach(item => {
        let count = 0;
        nums1.includes(item) && count++
        nums2.includes(item) && count++
        nums3.includes(item) && count++
        count >= 2 && res.push(item)
    })
    return res
};
// @lc code=end

