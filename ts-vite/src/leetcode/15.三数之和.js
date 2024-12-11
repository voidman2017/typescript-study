/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//   const r = [];
//   nums = nums.sort((a, b) => a - b);
//   nums.forEach((item, index) => {
//     const first = item;
//     const restNums = [].concat(nums);
//     restNums.splice(0, index + 1);
//     restNums.forEach((item, index) => {
//       const second = item;
//       const third = 0 - first - second;
//       const restNums2 = [].concat(restNums);
//       restNums2.splice(0, index + 1);
//       if (restNums2.includes(third)) {
//         const temp = [first, second, third];
//         const hasSame = r.some(item => {
//           return isSameArr(item, temp);
//         });
//         if (!hasSame) {
//           r.push(temp);
//         }
//       }
//     });
//   });
//   return r;
// };

// const isSameArr = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;
//   return arr1.every((item, index) => {
//     return item === arr2[index];
//   });
// };

const threeSum = nums => {
  const len = nums.length;
  let result = [];
  if (len < 3) return [];
  const target = 0;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (target === sum) {
        result.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  }
  return result;
};
// @lc code=end
