/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function (head) {
  let pointer = head;
  while (pointer && pointer.next) {
    const next = pointer.next;
    if (next.val === pointer.val) {
      pointer.next = next.next;
    } else {
      pointer = next;
    }
  }
  return head;
};
// @lc code=end
// const head = {
//   val: 1,
//   next: {
//     val: 1,
//     next: {
//       val: 2,
//       next: null,
//     },
//   },
// };
// console.log(deleteDuplicates(head))
