/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//   var root = new ListNode();
//   var current = root;
//   var needAdd10 = false;
//   while (l1 || l2 || needAdd10) {
//     const val1 = l1 && l1.val ? l1.val : 0;
//     const val2 = l2 && l2.val ? l2.val : 0;
//     const currentNeedAdd10 = needAdd10 ? 1 : 0;
//     const currentTotal = val1 + val2 + currentNeedAdd10;
//     const currentVal = (currentTotal % 10);
//     current.next = new ListNode(currentVal);
//     if (currentTotal >= 10) {
//       needAdd10 = true;
//     } else {
//       needAdd10 = false;
//     }
//     current = current.next;
//     l1 = l1.next ? l1.next : 0;
//     l2 = l2.next ? l2.next : 0;
//   }
//   return root.next;
// };

var addTwoNumbers = function(l1, l2) {
  var root = new ListNode();
  var sum = 0;
  var needAdd = 0;
  var current = root;
  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
 
    if (sum >= 10) {
      needAdd = 1;
      sum = sum - 10;
    }
    current.next = new ListNode(sum)
    current = current.next;

    sum = needAdd
    needAdd = 0
  }
  return root.next;
};

// @lc code=end
