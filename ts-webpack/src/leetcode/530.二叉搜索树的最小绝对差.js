/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/* 输入：

   1
    \
     3
    /
   2

输出：
1
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let result = Number.MAX_SAFE_INTEGER;
  let last = -1;
  const dfs = (root) => {
    if (root === null) {
      return;
    }
    dfs(root.left);
    if (last === -1) {
      last = root.val;
    } else {
      result = Math.min(result, root.val - last);
      last = root.val;
    }
    dfs(root.right);
  };
  dfs(root);
  return result;
};
const root = {
  val: 1,
  left: null,
  right: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  },
};
// @lc code=end
