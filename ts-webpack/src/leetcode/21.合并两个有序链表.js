/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const result = new ListNode();
  let copyR = result;
  while (l1 != null || l2 != null) {
    const { val: val1 = Infinity } = l1 ? l1 : {};
    const { val: val2 = Infinity } = l2 ? l2 : {};
    const minOne = val1 < val2 ? l1 : l2;
    copyR.next = minOne;
    copyR = copyR.next;
    if (minOne === l1) {
      l1 = l1.next;
    } else {
      l2 = l2.next;
    }
  }
  return result.next;
};
// @lc code=end
