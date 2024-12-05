/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
 * @param {TreeNode} root
 * @return {number}
 */
var dfs = function (nodes) {
  var result = [];
  var stack = [];
  stack.push(nodes);
  while (stack.length) {
    var item = stack.pop();
    result.push(item.val);
    item.right && stack.push(item.right);
    item.left && stack.push(item.left);
  }
  return result;
};

var minDiffInBST = function (root) {
  const list = dfs(root);
  list.sort((a, b) => a - b);
  let min = list[1] - list[0];
  for (let i = 2; i < list.length; i++) {
    if (list[i] - list[i - 1] < min) {
      min = list[i] - list[i - 1];
    }
  }
  return min;
};
// @lc code=end
