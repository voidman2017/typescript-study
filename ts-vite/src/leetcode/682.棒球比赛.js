/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  var record = [];
  const totle = ops.reduce((temp, curr, index, arr) => {
      let current = 0, len = record.length;
      const lastone = record[len - 1], lasttwo = record[len - 2];
      if (curr === 'C') {
          current = -1 * lastone;
          record.pop();
      } else if (curr === 'D') {
          current = lastone * 2;
          record.push(current);
      } else if (curr === '+') {
          current = lastone + lasttwo;
          record.push(current);
      } else {
          current = +curr;
          record.push(current);
      }
      temp += current;
      return temp;
  }, 0)
  return totle;
};
// @lc code=end

