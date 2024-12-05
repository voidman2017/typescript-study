/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  return compareTree(p, q);
};
function compareTree(p, q) {
  let result = true;
  function dfs(tree1, tree2) {
    if ((tree1 && !tree2) || (!tree1 && tree2)) {
      return (result = false);
    }
    if (tree1 && tree2) {
      if (tree1.val !== tree2.val) {
        return (result = false);
      }
      dfs(tree1.left, tree2.left);
      dfs(tree1.right, tree2.right);
    }
  }
  dfs(p, q);
  return result;
}

function traverseTree(tree) {
  let result = [];
  let dfs = function (node) {
    if (node) {
      result.push(node.val);
      dfs(node.left);
      dfs(node.right);
    }
  };
  dfs(tree);
  return result;
}
// @lc code=end