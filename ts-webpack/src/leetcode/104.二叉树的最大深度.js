/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let maxDeep = 1;
  let stack = [];
  stack.push({ deep: 1, ...root });
  while (stack.length) {
    const node = stack.pop();
    if (node.right) stack.push({ deep: node.deep + 1, ...node.right });
    if (node.left) stack.push({ deep: node.deep + 1, ...node.left });
    maxDeep = Math.max(maxDeep, node.deep);
  }
  return maxDeep;
};

// @lc code=end
