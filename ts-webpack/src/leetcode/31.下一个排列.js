/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var nextPermutation = function (nums) {
//   const len = nums.length;
//   for (let i = len; i >= 0; i--) {
//     const right = nums.slice(i, len);
//     const left = nums.slice(0, i);
//     const nextOne = getNext(right);
//     const newOne = left.concat(nextOne);
//     if (nextOne) {
//       return newOne;
//     }
//   }
//   return nums.sort((a, b) => a - b);

//   function getNext(nums) {
//     const maxArr = [].concat(nums).sort((a, b) => b - a);
//     const currentNum = parseInt(nums.join(""));
//     const max = parseInt(maxArr.join(""));
//     if (currentNum === max) return null;
//     loop: for (let i = nums.length - 1; i > 0; i--) {
//       const right = nums[i];
//       for (let j = i - 1; j >= 0; j--) {
//         const left = nums[j];
//         if (right > left) {
//           swapIndex = j;
//           nums[i] = left;
//           nums[j] = right;
//           for (let k = j + 1; k < nums.length; k++) {
//             for (let s = k + 1; s < nums.length; s++) {
//               if (nums[s] < nums[k]) {
//                 [nums[s], nums[k]] = [nums[k], nums[s]];
//               }
//             }
//           }
//           return nums;
//         }
//       }
//     }
//   }
// };
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const maxArr = [].concat(nums).sort((a, b) => b - a);
  const currentNum = parseInt(nums.join(""));
  const max = parseInt(maxArr.join(""));
  if (currentNum === max) return nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = len - 1; i >= 0; i--) {
    //   划定当前需要排序的区间
    for (let j = len - 1; j >= i; j--) {
      const right = nums[j];
      for (let k = j - 1; k >= i; k--) {
        const left = nums[k];
        if (right > left) {
          swapIndex = k;
          nums[k] = right;
          nums[j] = left;
          for (let n = k + 1; n < len; n++) {
            for (let s = n + 1; s < len; s++) {
              if (nums[s] < nums[n]) {
                [nums[s], nums[n]] = [nums[n], nums[s]];
              }
            }
          }
          return nums;
        }
      }
    }
  }
};
// @lc code=end
// console.log(nextPermutation([1, 2, 3]));
// console.log(nextPermutation([1, 2, 5, 4, 3]));
console.log(nextPermutation([4,2,0,2,3,2,0])); // Expected  [4,2,0,3,0,2,2]

// console.log(nextPermutation([1, 2]));
