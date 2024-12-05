/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
/* var intToRoman = function (num) {
  let r = "";
  const map = {
    hundred: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ten: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    singles: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  }
  const thousand = parseInt(num / 1000);
  num = num % 1000;
  for (let i = 0; i < thousand; i++) {
    r += "M";
  }

  const hundred = parseInt(num / 100);
  num = num % 100;
  r += map.hundred[hundred]

  const ten = parseInt(num / 10);
  num = num % 10;
  r += map.ten[ten]

  const singles = num
  r += map.singles[singles]
  return r
}; */

var intToRoman = function (num) {
  let r = "";
  const map = {
    thousand: ['', 'M', 'MM', 'MMM'],
    hundred: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ten: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    singles: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  }

  const singles = num % 10;
  r = map.singles[singles] + r
  if(num<10) return r

  const ten = parseInt(num % 100 / 10)
  r = map.ten[ten] + r
  if(num<100) return r

  const hundred = parseInt(num % 1000 / 100)
  r = map.hundred[hundred] + r
  if(num<1000) return r

  const thousand = parseInt(num % 10000 / 1000)
  if (!thousand) return r
  r = map.thousand[thousand] + r

  return r
};
// @lc code=end
