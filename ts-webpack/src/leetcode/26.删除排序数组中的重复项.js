/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   var len = 1;
//   for (var i = 1; i < nums.length; i++)
//     if (nums[i] != nums[i - 1]) nums[len++] = nums[i];
//   return len;
// };

var removeDuplicates = function(nums) {
  let last;
  for (let i = 0; i < nums.length; ) {
    if(nums[i]=== last){
      nums.splice(i,1)
    }else{
      last = nums[i++]
    }
  }
  return nums.length;
};
// @lc code=end
removeDuplicates([1,1,2])