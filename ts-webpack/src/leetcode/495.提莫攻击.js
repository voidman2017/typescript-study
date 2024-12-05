/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */

var findPoisonedDuration = function (timeSeries, duration) {
    if(timeSeries.length === 0 || duration === 0) return 0
    var count = 0
    for(let i =0;i<timeSeries.length;i++){
        if(timeSeries[i+1] - timeSeries[i] <= duration){
            count += duration - timeSeries[i+1] + timeSeries[i]
        }
    }
    return timeSeries.length * duration - count
};
// @lc code=end

