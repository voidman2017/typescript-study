/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var loop = numRows - 1;
  var index = 1;
  var arr = [];
  while (s) {
    if (index === 1) {
      var temp = s.substring(0, numRows).split("");
      s = s.substring(numRows);
      arr.push(temp);
    } else {
      var c = s.substring(0, 1);
      s = s.substring(1);
      var temp = Object.keys(Array.from({ length: numRows })).map(function(
        item
      ) {
        return "";
      });
      temp[numRows - index] = c;
      arr.push(temp);
    }
    index++;
    if (index > loop) {
      index = 1;
    }
  }
  var len = arr.length;
  var r = "";
  for (var i = 0; i < numRows; i++) {
    for (var j = 0; j < len; j++) {
      r += arr[j][i] ? arr[j][i] : '';
    }
  }
  return r
};
// @lc code=end
