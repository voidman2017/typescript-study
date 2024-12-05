/*
 * @lc app=leetcode.cn id=2981 lang=javascript
 *
 * [2981] 找出出现至少三次的最长特殊子字符串 I
 *
 * https://leetcode.cn/problems/find-longest-special-substring-that-occurs-thrice-i/description/
 *
 * algorithms
 * Medium (49.07%)
 * Likes:    14
 * Dislikes: 0
 * Total Accepted:    6.2K
 * Total Submissions: 11.6K
 * Testcase Example:  '"aaaa"'
 *
 * 给你一个仅由小写英文字母组成的字符串 s 。
 * 
 * 如果一个字符串仅由单一字符组成，那么它被称为 特殊 字符串。例如，字符串 "abc" 不是特殊字符串，而字符串 "ddd"、"zz" 和 "f"
 * 是特殊字符串。
 * 
 * 返回在 s 中出现 至少三次 的 最长特殊子字符串 的长度，如果不存在出现至少三次的特殊子字符串，则返回 -1 。
 * 
 * 子字符串 是字符串中的一个连续 非空 字符序列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "aaaa"
 * 输出：2
 * 解释：出现三次的最长特殊子字符串是 "aa" ：子字符串 "aaaa"、"aaaa" 和 "aaaa"。
 * 可以证明最大长度是 2 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "abcdef"
 * 输出：-1
 * 解释：不存在出现至少三次的特殊子字符串。因此返回 -1 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "abcaba"
 * 输出：1
 * 解释：出现三次的最长特殊子字符串是 "a" ：子字符串 "abcaba"、"abcaba" 和 "abcaba"。
 * 可以证明最大长度是 1 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= s.length <= 50
 * s 仅由小写英文字母组成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function maximumLength(s) {
    let maxLen = -1;
    
    for (let len = 1; len <= s.length; len++) {
        for (let i = 0; i <= s.length - len; i++) {
            let substring = s.slice(i, i + len);
            if (isSpecial(substring)) {
                let count = countOccurrences(s, substring);
                if (count >= 3) {
                    maxLen = Math.max(maxLen, len);
                }
            }
        }
    }
    
    return maxLen;
}

function isSpecial(substring) {
    let char = substring[0];
    for (let i = 1; i < substring.length; i++) {
        if (substring[i] !== char) {
            return false;
        }
    }
    return true;
}

function countOccurrences(s, substring) {
    let count = 0;
    let pos = s.indexOf(substring);
    while (pos !== -1) {
        count++;
        pos = s.indexOf(substring, pos + 1);
    }
    return count;
}

// 示例测试
// console.log(maximumLength("aaaa")); // 输出：2
// console.log(maximumLength("abcdef")); // 输出：-1
// console.log(maximumLength("abcaba")); // 输出：1

/* 
解释
1.遍历所有子字符串：外层循环控制子字符串的长度，内层循环生成所有可能的子字符串。
2.检查子字符串是否是特殊字符串：通过 isSpecial 函数检查子字符串是否仅由单一字符组成。
3.计算子字符串在字符串中出现的次数：通过 countOccurrences 函数计算子字符串在字符串中出现的次数。
4.记录最长的符合条件的子字符串长度：如果子字符串满足至少出现三次的条件，更新 maxLen 的值。
5.返回结果：最终返回 maxLen 的值。
*/



// @lc code=end

