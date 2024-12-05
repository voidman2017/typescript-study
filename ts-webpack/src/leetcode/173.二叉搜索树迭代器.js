/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
  dfs(root);
  return result;
};

var BSTIterator = function (root) {
  this.stack = inorderTraversal(root).sort((a, b) => b - a);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.stack.pop();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return !!this.stack.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
