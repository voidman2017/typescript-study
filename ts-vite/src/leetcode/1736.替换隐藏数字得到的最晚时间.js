/*
 * @lc app=leetcode.cn id=1736 lang=javascript
 *
 * [1736] 替换隐藏数字得到的最晚时间
 */

// @lc code=start
/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
    let result = ''
    for (let i = 0; i < time.length; i++) {
        if (time[i] !== '?') {
            result += time[i]
            continue
        }
        switch (i) {
            case 0:
                if (time[1] >= 4) {
                    result += '1'
                } else {
                    result += '2'
                }
                break;
            case 1:
                if (result[0] === '2') {
                    result += '3'
                } else {
                    result += '9'
                }
                break;
            case 3:
                result += '5'
                break;
            case 4:
                result += '9'
                break;
        }
    }
    return result
};
// @lc code=end
