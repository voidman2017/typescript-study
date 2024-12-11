/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序搜索树
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    const res = []
    inorder(root, res)
    const node = new TreeNode(-1)
    let currNode = node;
    for (const value of res) {
        currNode.right = new TreeNode(value);
        currNode = currNode.right;
    }
    return node.right;

};

function inorder(node, res) {
    if (!node) {
        return;
    }
    inorder(node.left, res);
    res.push(node.val);
    inorder(node.right, res);
}

// @lc code=end

