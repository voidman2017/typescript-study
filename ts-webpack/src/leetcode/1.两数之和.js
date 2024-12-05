/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let res;
  nums.some((item,index)=>{
      const anotherNum = target - item;
      const anotherNumIndex = nums.indexOf(anotherNum);
      if( anotherNumIndex!= index && ~anotherNumIndex){
          res = [].concat(index,anotherNumIndex)
          return true
      }
  })  
  return res;
};
// @lc code=end

export { twoSum };