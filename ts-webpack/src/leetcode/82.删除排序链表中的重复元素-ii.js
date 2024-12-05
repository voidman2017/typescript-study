/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
  if (!head) return head;

  let pointer = {
    val: null,
    next: head
  };
  head = pointer
  let last = pointer;
  while (pointer && pointer.next) {
    if (pointer.next.val === pointer.val) {
      let node = pointer;
      while (node && node.next && node.next.val === node.val) {
        node = node.next;
      }
      last.next = node.next;
      pointer = node.next;
    } else {
      last = pointer;
      pointer = pointer.next;
    }
  }
  return head.next;
};
// @lc code=end
/* let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: { val: 4, next: { val: 4, next: { val: 5, next: null } } }
      }
    }
  }
}; */
/* let head = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null
        }
      }
    }
  }
}; */
