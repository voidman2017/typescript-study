/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const index = nums.indexOf(target)
    if(~index) return index
    for(let i = 0;i<nums.length;i++){
        const s = nums[i]
        if(s>target) return i
    }
    return nums.length
};
// @lc code=end
// console.log(searchInsert([1,3,5,6], 5))
// console.log(searchInsert([1,3,5,6], 2))
// console.log(searchInsert([1,3,5,6], 7))
// console.log(searchInsert([1,3,5,6], 0))

