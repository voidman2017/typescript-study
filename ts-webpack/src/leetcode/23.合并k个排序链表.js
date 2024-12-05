/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let temp = [];
  lists.forEach(list => {
    while (list) {
      temp.push(list.val);
      list = list.next;
    }
  });
  temp = temp.sort((a, b) => a - b);
  const root = new ListNode();
  var current = root
  temp.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return root.next;
};
// @lc code=end
