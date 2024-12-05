/*
 * @lc app=leetcode.cn id=319 lang=javascript
 *
 * [319] 灯泡开关
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var bulbSwitch = function (n) {
//     let bulbs = new Array(n).fill(0)
//     for (let i = 1; i <= n; i++) {
//         bulbs = bulbs.map((item, index) => {
//             if ((index + 1) % i === 0) {
//                 return item === 0 ? 1 : 0
//             } else {
//                 return item
//             }
//         })
//     }
//     return bulbs.reduce((total, current) => {
//         return current === 1 ? total + 1 : total
//     }, 0)
// };
var bulbSwitch = function (n) {
    return Math.floor(Math.sqrt(n + 0.5));
};
// @lc code=end

