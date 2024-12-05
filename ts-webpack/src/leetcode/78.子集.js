/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  const len = nums.length;
  for (let i = 0; i < 1 << len; i++) {
    const t = [];
    for (let j = 0; j < len; j++) {
      if (i & (1 << j)) {
        t.push(nums[j]);
      }
    }
    res.push(t);
  }
  return res;
};

/* 
a << b	将 a 的二进制形式向左移 b (< 32) 比特位，右边用0填充。
1<<len 可以用 Math.pow(1,len)代替


[5,2,9]
0/1序列   子集      0/1 序列对应的二进制数
000       {}	     0
001	      {9}	     1
010	      {2}	     2
011	      {2,9}    3
100	      {5}      4
101	      {5,9}    5
110	      {5,2}    6
111	      {5,2,9}  7
*/
// console.log("subsets([1,2,3]): ", subsets([1, 2, 3]));
// @lc code=end
