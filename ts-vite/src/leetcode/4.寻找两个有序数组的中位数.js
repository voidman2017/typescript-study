/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var totalLen = nums1.length + nums2.length;
  var isEven = totalLen % 2 === 0;
  var medianIndex = Math.round(totalLen / 2);
  var needPush = isEven ? medianIndex + 1 : medianIndex;
  var nums1Index = 0;
  var nums2Index = 0;
  const n1Len = nums1.length
  const n2Len = nums2.length
  var res = [];
  for(let i =0;i<needPush;i++){
    const n1 = nums1[nums1Index]
    const n2 = nums2[nums2Index]
    const remainN1 = nums1Index < n1Len;
    const remainN2 = nums2Index < n2Len;
    if(!remainN1){
      res.push(n2);
      nums2Index++
    }else if (!remainN2){
      res.push(n1);
      nums1Index++
    }else if (n1 < n2){
      res.push(n1);
      nums1Index ++;
    }else{
      res.push(n2);
      nums2Index ++;
    }
  }
  return isEven
    ? (res[res.length - 1] + res[res.length - 2]) / 2
    : res[res.length - 1];
};
// @lc code=end
