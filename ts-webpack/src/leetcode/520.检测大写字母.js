/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const wordList = word.split("");
  if (isUppercase(wordList[0]) === isUppercase(wordList[1])) {
    //全小写或者全大写
    if (isUppercase(wordList[0])) {
      return wordList.every((n) => {
        return isUppercase(n);
      });
    } else {
      return wordList.every((n) => {
        return !isUppercase(n);
      });
    }
  } else {
    if (isUppercase(wordList[0])) {
      return wordList.slice(1).every((n) => {
        return !isUppercase(n);
      });
    } else {
      return false;
    }
  }
};
function isUppercase(n) {
  return /[A-Z]/.test(n);
}
// @lc code=end
