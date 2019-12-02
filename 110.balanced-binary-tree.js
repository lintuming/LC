/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  function getHeight(root, depth) {
    if (root === null) return depth;
    return Math.max(
      getHeight(root.left, depth + 1),
      getHeight(root.right, depth + 1)
    );
  }
  function isBalancedImpt(root) {
    if (root === null) {
      return true;
    }
    return (
      isBalancedImpt(root.left) &&
      isBalancedImpt(root.right) &&
      Math.abs(getHeight(root.left, 0) - getHeight(root.right, 0)) < 2
    );
  }
  return isBalancedImpt(root);
};
// @lc code=end
