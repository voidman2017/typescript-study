/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    console.log(a,b)
    let condition = true
    let addOne = false
    const listA = a.split('').reverse()
    const listB = b.split('').reverse()
    const listC = []

    let index = 0
    while (condition) {
        const A = listA[index] ? listA[index] : 0
        const B = listB[index] ? listB[index] : 0
        const C = parseInt(A) + parseInt(B)
        let total = C + (addOne ? 1 : 0)
        listC[index] = total % 2
        addOne = total >= 2
        index++
        condition = listA[index] || listB[index] || addOne
    }
    return listC.reverse().join('')
};
// @lc code=end

