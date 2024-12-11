/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const tempList = [];
  let tempNode = head;
  while (tempNode) {
    tempList.push(tempNode.val);
    tempNode = tempNode.next;
  }
  let index = 0;
  while (index < tempList.length && k <= tempList.length - index) {
    const currentList = tempList.slice(index, index + k);
    let reverseList = currentList.reverse();
    tempList.splice(index, k, ...reverseList);
    index += k;
  }
  const root = new ListNode();
  var current = root;
  tempList.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return root.next;
};
// @lc code=end
