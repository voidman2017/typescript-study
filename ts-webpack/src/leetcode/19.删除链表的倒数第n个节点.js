/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const list = [head];
  let temp = head;
  while (temp.next) {
    list.push(temp.next);
    temp = temp.next;
  }
  const len = list.length;
  if (n === len) return head.next;
  const deleteIndex = len - n;
  list[deleteIndex - 1].next = list[deleteIndex + 1];
  return head;
};
// @lc code=end
