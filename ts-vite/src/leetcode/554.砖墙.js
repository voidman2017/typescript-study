/*
 * @lc app=leetcode.cn id=554 lang=javascript
 *
 * [554] 砖墙
 */

// @lc code=start
/**
 * @param {number[][]} wall
 * @return {number}
 */
// var leastBricks = function (wall) {
//     const _wall = []
//     let min = Infinity
//     for (let i = 0; i < wall.length; i++) {
//         const current = wall[i]
//         const temp = []
//         current.forEach(function (item, index) {
//             if (index > 0) {
//                 temp.push('x')
//             }
//             for (let i = 0; i < item; i++) {
//                 temp.push('o')
//             }
//         })
//         min = Math.min(min, temp.length)
//         _wall.push(temp)
//     }
//     let r = Infinity

//     for (let i = 0; i < min; i++) {
//         let passWalls = 0;
//         for (let j = 0; j < _wall.length; j++) {
//             const n = _wall[j][i]
//             if (n === 'o') passWalls++
//         }
//         r = Math.min(passWalls, r)
//     }
//     return r
// };
var leastBricks = function(wall) {
    const cnt = new Map();
    for (const widths of wall) {
        const n = widths.length;
        let sum = 0;
        for (let i = 0; i < n - 1; i++) {
            sum += widths[i];
            cnt.set(sum, (cnt.get(sum) || 0) + 1);
        }
    }
    let maxCnt = 0;
    for (const [_, c] of cnt.entries()) {
        maxCnt = Math.max(maxCnt, c);
    }
    return wall.length - maxCnt;
};
// @lc code=end
