/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  function flattenImpl(root) {
    if (root === null) return;
    if (root.left) {
      let last = root.left;
      while (last.right !== null) last = last.right;
      last.right = root.right;
      root.right = root.left;
      root.left = null;
    }
    flattenImpl(root.right);
  }
  flattenImpl(root);
  return root;
};
// @lc code=end
