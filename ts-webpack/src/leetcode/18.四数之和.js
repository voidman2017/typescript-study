/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    const first = nums[i];
    for (let j = i + 1; j < nums.length - 2; j++) {
      const second = nums[j];
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const third = nums[left];
        const fourth = nums[right];
        let sum = first + second + third + fourth;
        if (target === sum) {
          const newOne = [first, second, third, fourth];
          if (isNew(result, newOne)) {
            result.push(newOne);
          }
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};
function isNew(result, newOne) {
  const len = result.length;
  if (!len) return true;
  for (let i = 0; i < len; i++) {
    const pushed = result[i];
    const [pushedFirst, pushedSecond, pushedThird, pushedFourth] = pushed;
    const [first, second, third, fourth] = newOne;
    if (
      pushedFirst === first &&
      pushedSecond === second &&
      pushedThird === third &&
      pushedFourth === fourth
    ) {
      return false;
    }
  }
  return true;
}

// [-3,-2,-1,0,0,1,2,3]
// 0

// [-3,-3,-2,-1,0,0,1,2,3,3]
// 0

// [-5,-4,-3,-2,-1,0,0,1,2,3,4,5]
// 0

// [-1,0,1,2,-1,-4]
// -1

// [0, 1, 5, 0, 1, 5, 5, -4];
// 11

// @lc code=end
