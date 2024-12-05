/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let node = head;
  let res = [];
  while (node) {
    res.unshift(node.val);
    node = node.next;
  }
  return res;
};

const head = { val: 1, next: { val: 3, next: { val: 2, next: null } } };
console.log(reversePrint(head));
