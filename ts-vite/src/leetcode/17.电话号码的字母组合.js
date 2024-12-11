/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits) return []
  const map = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"]
  ];
  let r;
  for (let i = 0; i < digits.length; i++) {
    r = fn(map[digits[i] - 2], r);
  }
  return r;
  function fn(arr1, arr2) {
    if (!arr2) return arr1;
    const r = [];
    arr2.forEach(item1 => {
      arr1.forEach(item2 => {
        r.push(item1 + item2);
      });
    });
    return r;
  }
  
};
letterCombinations("23");
// @lc code=end
