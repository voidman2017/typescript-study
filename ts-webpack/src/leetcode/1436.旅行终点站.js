/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const citys = new Set()
    paths.forEach(path=>{
        citys.add(path[0])
    })
    for(let path of paths){
        if(!citys.has(path[1])){
            return path[1]
        }
    }
    return ''
};
// @lc code=end

