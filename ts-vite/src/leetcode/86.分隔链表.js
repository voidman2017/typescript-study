/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
/* function ListNode(val) {
  this.val = val;
  this.next = null;
} */
var partition = function (head, x) {
  const rightList = new ListNode(null); // 保存大于x的节点
  let _head = new ListNode(null); 
  _head.next = head;
  let node = _head;
  let _node = rightList;
  while (node && node.next) {
    if (node.next.val >= x) {
      _node.next = new ListNode(node.next.val);
      _node = _node.next;
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  node.next = rightList.next;
  return _head.next;
};
// @lc code=end

/* const head = {
    val: 1,
    next: {
      val: 4,
      next: {
        val: 3,
        next: { val: 2, next: { val: 5, next: { val: 2, next: null } } }
      }
    }
  },
  x = 3; */
/* const head = {
    val: 2,
    next: {
      val: 1,
      next: null
    }
  },
  x = 2; */

/* partition(head, x);
 */
