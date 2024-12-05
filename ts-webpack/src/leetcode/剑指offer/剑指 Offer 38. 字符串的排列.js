/* 
输入一个字符串，打印出该字符串中字符的所有排列。

 

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

 

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
 

限制：

1 <= s 的长度 <= 8

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    const res = new Set()
    const _s = s.split('')
    function getNext(last, rest) {
        if (rest.length === 0) {
            res.add(last.join(''))
        } else {
            for (let i = 0; i < rest.length; i++) {
                const l = [].concat(last)
                l.push(rest[i])
                const r = ([].concat(rest))
                r.splice(i, 1)
                getNext(l, r)
            }
        }

    }
    getNext([], _s)
    return Array.from(res)
};
const r = permutation('abb')