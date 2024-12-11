/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
  const tempList = [];
  let tempNode = head;
  let push = true;
  while (tempNode) {
    if (push) {
      tempList.push(tempNode.val);
    } else {
      tempList.splice(tempList.length - 1, 0, tempNode.val);
    }
    push = !push;
    tempNode = tempNode.next;
  }
  const root = new ListNode();
  var current = root
  tempList.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return root.next;
};
// @lc code=end
