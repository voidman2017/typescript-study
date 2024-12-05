/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
var jump = function (nums) {
    const len = nums.length;
    let end = 0;
    let maxPosition = 0;
    let step = 0;
    for (let i = 0; i < len - 1; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i])
        if (i === end) {
            end = maxPosition
            step++
        }

    }
    return step
};
 */
var jump = function (nums) {
    let position = nums.length - 1
    let step = 0;
    while (position != 0) {
        for (let i = 0; i < position; i++) {
            if (nums[i] >= position - i) {
                position = i
                step++
                break;
            }
        }
    }
    return step
}
// @lc code=end