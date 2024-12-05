/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
var sumNumbers = function (root) {
  let res = 0;
  const dfs = (node, total) => {
    if (!node) return;
    total = total * 10 + node.val;
    if (!node.left && !node.right) {
      res += total;
      return;
    }
    if (node.left) {
      dfs(node.left, total);
    }
    if (node.right) {
      dfs(node.right, total);
    }
  };
  dfs(root, 0);
  return res;
};
// const root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     val: 3,
//     left: null,
//     right: null,
//   },
// };
// @lc code=end
