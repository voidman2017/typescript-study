/*
 * @lc app=leetcode.cn id=1473 lang=javascript
 *
 * [1473] 粉刷房子 III
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function (houses, cost, m, n, target) {
    // 缓存[房子位置][右侧颜色][期望的街道数] = 最小花费
    const cache = new Array(m + 1).fill([]).map(_ => new Array(n + 1).fill([]).map(_ => new Array(target + 1).fill(-1)));
    cache[-1] = new Array(n + 1).fill([]).map(_ => new Array(target + 1).fill(Infinity));
    for (let c = 1; c <= n; c++) cache[-1][c][0] = 0;
    cache[m - 1][-1] = new Array(target + 1).fill(-1);
    // 递归函数
    function fn(idx, color, target) {
        if (cache[idx][color][target] !== -1) return cache[idx][color][target];
        let res = Infinity;
        if (idx >= 0 && target >= 0 && target <= idx + 1) {
            if (houses[idx] === 0) {
                for (let c = 1; c <= n; c++) {
                    const r = fn(idx - 1, c, c === color ? target : target - 1);
                    if (r + cost[idx][c - 1] < res) res = r + cost[idx][c - 1];
                }
            } else {
                res = fn(idx - 1, houses[idx], houses[idx] === color ? target : target - 1);
            }
        }
        return cache[idx][color][target] = res;
    }

    const res = fn(m - 1, -1, target);
    return isFinite(res) ? res : -1;
};
// @lc code=end

