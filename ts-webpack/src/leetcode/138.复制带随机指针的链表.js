/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null
    const map = new Map()
    let pointer = head;
    while (pointer) {
        map.set(pointer, new Node(pointer.val))
        pointer = pointer.next
    }
    pointer = head;
    while (pointer) {
        map.get(pointer).next = pointer.next ? map.get(pointer.next) : null;
        map.get(pointer).random = pointer.random ? map.get(pointer.random) : null;
        pointer = pointer.next;
    }
    return map.get(head);
};
// @lc code=end

