/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let arr=[],len=nums.length
  if(len===0||len===1&&nums[0]!==1)return 1
  for(let i=0;i<len;i++){
    if(nums[i]>=0)arr[nums[i]]=true
  }
  if(!arr.length)return 1
  let len1=arr.length
  for(let i=1;i<len1;i++){
      if(!arr[i]){
          return i
      }
      if(i===len1-1)return len1
  }
};
// @lc code=end

