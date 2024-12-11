/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
/* function ListNode(val) {
  this.val = val;
  this.next = null;
} */
function reverseList(head, k = Infinity) {
  if (!head) return null;
  let [prev, current] = [null, head];
  while (current && --k > -1) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
}

var reverseBetween = function (head, m, n) {
  let _head = new ListNode();
  _head.next = head;
  let leftList = _head;
  let rightList = head.next;
  for (let i = 1; i < n; i++) {
    //找到不变的左右两侧节点
    if (i < m) leftList = leftList.next;
    rightList = rightList.next;
  }
  const mid = reverseList(leftList.next, n - m + 1)
  leftList.next = mid;
  while (true) {
    if (!leftList.next) {
      leftList.next = rightList;
      break;
    }
    leftList = leftList.next;
  }
  return _head.next;
};
// @lc code=end
/* const head = {
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
    }
  },
  m = 2,
  n = 4;
reverseBetween(head, m, n);
 */