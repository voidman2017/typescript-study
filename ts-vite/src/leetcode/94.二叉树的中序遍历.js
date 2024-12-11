/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = [];
  let dfs = function (node) {
    if (node) {
      dfs(node.left);
      result.push(node.val); // 直到该结点无左子树 将该结点存入结果数组 接下来并开始遍历右子树
      dfs(node.right);
    }
  };
  dfs(root)
  return result
};
// @lc code=end
