/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
var sumNumbers = function(root) {
  if (root === null) return 0;
  let result = 0;
  function dfs(root, prevSum) {
    if (root.left === null && root.right === null) {
      return (result += prevSum * 10 + root.val);
    }
    if (root.left) {
      dfs(root.left, prevSum * 10 + root.val);
    }
    if (root.right) {
      dfs(root.right, prevSum * 10 + root.val);
    }
  }
  dfs(root, 0);
  return result;
};
// @lc code=end
