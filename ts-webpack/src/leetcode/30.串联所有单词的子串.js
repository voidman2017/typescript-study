/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

function strToArr(s, l) {
  const r = [];
  const len = s.length / l;
  for (let i = 0; i < len; i++) {
    r.push(s.substring(i * l, (i + 1) * l));
  }
  return r;
}

function isSameArr(arr1, arr2) {
  return arr1.every(item => {
    if (arr2.includes(item)) {
      const index = arr2.indexOf(item);
      arr2.splice(index, 1);
      return true;
    } else {
      return false;
    }
  });
}

var findSubstring = function(s, words) {
  if(words.length === 0) return []
  const wordsLen = words.join("").length;
  const wordLen = words[0].length;
  const sLen = s.length;
  const r = [];
  for (let i = 0; i < sLen - wordsLen + 1; i++) {
    const currentStr = s.substring(i, i + wordsLen);
    const currentStrList = strToArr(currentStr, wordLen);
    isSameArr(words, currentStrList) && r.push(i);
  }
  return r;
};
// @lc code=end
