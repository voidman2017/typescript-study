/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const stack1 = []
    const stack2 = []
    while (head) {
        stack1.push(head.val)
        stack2.unshift(head.val)
        head = head.next
    }
    for (let i = 0; i < stack1.length; i++) {
        if (stack1[i] !== stack2[i]) return false
    }
    return true

};
// @lc code=end

