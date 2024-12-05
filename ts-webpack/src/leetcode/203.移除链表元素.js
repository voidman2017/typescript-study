/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let insertHead = new ListNode(-1);
  insertHead.next = head;
  let current = insertHead;
  while (current.next != null) {
    if (current.next.val == val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return insertHead.next;
};
// @lc code=end
