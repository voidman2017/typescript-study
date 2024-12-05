/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reorderList = function (head) {
  console.log("head: ", JSON.stringify(head));
  if (!head) return null;
  const stack = [];
  let node = head;
  while (node) {
    stack.push(node);
    node = node.next;
  }
  let len = stack.length;
  node = head;
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      node.next = stack.shift();
    } else {
      node.next = stack.pop();
    }
    node = node.next;
  }
  node.next = null;
};
// @lc code=end
/* const head = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } }
};
 */
