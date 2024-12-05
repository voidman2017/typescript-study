/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
/* var hammingWeight = function (n) {
  const str = n.toString(2);
  let r = 0;
  str.split("").forEach((item) => {
    if (item === "1") r++;
  });
  return r;
}; */

var hammingWeight = function (n) {
  let r = 0;
  while (n >= 2) {
    const rest = n % 2;
    if (rest === 1) r++;
    n = Math.floor(n / 2);
  }
  n === 1 && r++;
  return r;
};
// @lc code=end
// console.log(hammingWeight(31));
