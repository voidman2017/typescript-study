/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
/* var rotateRight = function (head, k) {
  for (let i = 0; i < k; i++) {
    head = goNext(head);
  }
  return head;
};
function goNext(head) {
  if (!head) return head;
  if (!head.next) return head;
  let node = head;
  let last;
  while (node) {
    if (!node.next.next) {
      //倒数第二个
      last = node.next;
      node.next = null;
    }
    node = node.next;
  }
  var res = {
    val: last.val,
    next: head
  };
  return res;
} */

function rotateRight(head, K) {
  if (!head || !head.next) return head;
  const analysi = analysiList(head);
  const { level, stack } = analysi;
  const realK = K % level;
  if (realK === 0) return head;
  const res = stack[level - realK];
  stack[level - realK - 1].next = null;
  stack[level - 1].next = stack[0];
  return res;
}
function analysiList(head) {
  let stack = [];
  let level = 0;
  let node = head;
  while (node) {
    stack.push(node);
    level++;
    node = node.next;
  }
  return { level, stack };
}

// @lc code=end
// let head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 5,
//           next: null
//         }
//       }
//     }
//   }
// };

// let head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: null
//   }
// };
