/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
/* 输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,2,3] */

var preorderTraversal = function (root) {
  let result = [];
  let dfs = function (node) {
    if (node) {
      result.push(node.val);
      dfs(node.left);
      dfs(node.right);
    }
  };
  dfs(root);
  return result
};
// @lc code=end
