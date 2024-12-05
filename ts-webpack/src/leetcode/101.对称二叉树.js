/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node1.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if(!root) return true
  let result = [];
  let stack1 = [];
  let stack2 = [];
  let isSymmetric = true;
  stack1.push(root);
  stack2.push(root);
  while (stack1.length && isSymmetric) {
    let node1 = stack1.pop();
    if (node1.right || node1.left) {
      node1.right ? stack1.push(node1.right) : stack1.push({ val: null });
      node1.left ? stack1.push(node1.left) : stack1.push({ val: null });
    }
    result.push(node1.val);

    let node2 = stack2.pop();
    if (node2.right || node2.left) {
      node2.left ? stack2.push(node2.left) : stack2.push({ val: null });
      node2.right ? stack2.push(node2.right) : stack2.push({ val: null });
    }
    if (node2.val === node1.val) {
      result.pop();
    } else {
      isSymmetric = false;
    }
  }
  return isSymmetric;
};
// @lc code=end
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
// const tree = new TreeNode(1);
// let left1 = new TreeNode(2);
// let right1 = new TreeNode(2);
// tree.left = left1;
// tree.right = right1;
// left1.left = new TreeNode(3)
// left1.right = new TreeNode(4);
// right1.left = new TreeNode(4)
// right1.right = new TreeNode(3);

// console.log(2, isSymmetric(tree));
