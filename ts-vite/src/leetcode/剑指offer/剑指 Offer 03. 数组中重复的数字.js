/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const temp = [];
  for (let i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i])) return nums[i];
    temp.push(nums[i]);
  }
};

var findRepeatNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(nums[i]) !== i) return nums[i];
  }
  return null;
};

var findRepeatNumber = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else {
      return nums[i];
    }
  }
};
