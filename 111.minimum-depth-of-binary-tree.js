/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
var minDepth = function(root) {
  function getMinHeight(root) {
    if (root === null) return 0;
    if (root.left === null) return getMinHeight(root.right)+1;
    if (root.right === null) return getMinHeight(root.left)+1;
    return Math.min(getMinHeight(root.left), getMinHeight(root.right)) + 1;
  }
  return getMinHeight(root)
};
// @lc code=end
