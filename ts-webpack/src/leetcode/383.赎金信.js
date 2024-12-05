/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let magazineList = magazine.split("");
  return ransomNote.split("").every((item) => {
    if (magazineList.includes(item)) {
      const index = magazineList.lastIndexOf(item);
      magazineList.splice(index, 1);
      return true;
    } else {
      return false;
    }
  });
};
// @lc code=end
