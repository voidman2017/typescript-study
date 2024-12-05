/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let temp = "";
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      temp = "1";
      continue;
    }
    temp = getDes(temp);
  }
  return temp;
};
function getDes(str) {
  let lastS = "";
  let nums = 0;
  let total = "";
  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    if (lastS === s) {
      nums++;
    } else {
      if (lastS !== "") {
        total = total + (nums + lastS);
      }
      lastS = s;
      nums = 1;
    }
    if (i === str.length - 1) {
      total = total + (nums + lastS);
    }
  }
  return total;
}
// @lc code=end
// console.log(countAndSay(2));
