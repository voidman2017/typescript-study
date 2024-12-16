/*
 * @lc app=leetcode.cn id=819 lang=typescript
 *
 * [819] 最常见的单词
 *
 * https://leetcode.cn/problems/most-common-word/description/
 *
 * algorithms
 * Easy (45.72%)
 * Likes:    246
 * Dislikes: 0
 * Total Accepted:    69.3K
 * Total Submissions: 151.6K
 * Testcase Example:  '"Bob hit a ball, the hit BALL flew far after it was hit."\n["hit"]'
 *
 * 给你一个字符串 paragraph 和一个表示禁用词的字符串数组 banned ，返回出现频率最高的非禁用词。题目数据 保证
 * 至少存在一个非禁用词，且答案 唯一 。
 *
 * paragraph 中的单词 不区分大小写 ，答案应以 小写 形式返回。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.",
 * banned = ["hit"]
 * 输出："ball"
 * 解释：
 * "hit" 出现了 3 次，但它是禁用词。
 * "ball" 出现了两次（没有其他单词出现这么多次），因此它是段落中出现频率最高的非禁用词。
 * 请注意，段落中的单词不区分大小写，
 * 标点符号会被忽略（即使它们紧挨着单词，如 "ball,"），
 * 并且尽管 "hit" 出现的次数更多，但它不能作为答案，因为它是禁用词。
 *
 *
 * 示例 2：
 *
 *
 * 输入：paragraph = "a.", banned = []
 * 输出："a"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= paragraph.length <= 1000
 * paragraph 由英文字母、空格 ' '、和以下符号组成："!?',;."
 * 0 <= banned.length <= 100
 * 1 <= banned[i].length <= 10
 * banned[i] 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
export function mostCommonWord(paragraph: string, banned: string[]): string {
  // 1、获取单词，先将标点符号替换为空格,然后按空格分割成单词数组
  const words = paragraph
    .toLowerCase()
    .replace(/[!?',;.]/g, ' ')
    .split(/\s+/)
    .filter(word => word !== '');
  // 2、统计每个单词出现的次数
  const wordCount = new Map<string, number>();
  for (const word of words) {
    if (banned.includes(word)) {
      continue;
    }
    if (wordCount.has(word)) {
      wordCount.set(word, wordCount.get(word)! + 1);
    } else {
      wordCount.set(word, 1);
    }
  }
  // 3、找出出现次数最多的单词
  let maxCount = 0;
  let mostCommonWord = '';
  for (const [word, count] of wordCount.entries()) {
    if (count > maxCount) {
      maxCount = count;
      mostCommonWord = word;
    }
  }
  return mostCommonWord;
}
// @lc code=end
