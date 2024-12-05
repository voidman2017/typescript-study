/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  const heap = {};
  deck.forEach((item) => {
    heap[item] ? heap[item]++ : (heap[item] = 1);
  });
  const arr = Object.entries(heap);
  let gcd = arr.reduce((gcd, [key, val]) => {
    gcd = getGCD(gcd, val);
    return gcd;
  }, arr[0][1]);
  return gcd >= 2;
};

/* 
function getGCD(a, b) {
  if (a === b) return a;
  let A = Math.max(a, b);
  let B = Math.min(a, b);
  if (A - B === B) {
    return B;
  } else {
    return getGCD(B, A - B);
  }
}
 */
/* 
function getGCD(a, b) {
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}
 */

function getGCD(a, b) {
  return a === 0 ? b : getGCD(b % a, a);
}
// @lc code=end
