/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) return null;
  let node = head;
  const odd = [];
  const even = [];
  let isEven = true;
  while (node) {
    if (isEven) {
      even.push(node);
    } else {
      odd.push(node);
    }
    node = node.next;
    isEven = !isEven;
  }
  node = head;
  for (let i = 1; i < even.length; i++) {
    node.next = even[i];
    node = node.next;
  }
  for (let i = 0; i < odd.length; i++) {
    node.next = odd[i];
    node = node.next;
  }
  node.next = null;
  return head;
};
// @lc code=end
/* const head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
  }
};
oddEvenList(head); */
