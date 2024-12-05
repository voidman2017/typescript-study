/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
/* var reverseList = function (head) {
  let stack = [];
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  stack = stack.reverse();
  const r = (node = new ListNode(null));

  stack.forEach((item) => {
    node.next = new ListNode(item);
    node = node.next;
  });
  return r.next;
}; */

var reverseList = function (head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};
// @lc code=end
