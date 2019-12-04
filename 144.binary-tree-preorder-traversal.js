/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const result = [];
  const stack = [];
  while (root || stack.length) {
    if (root) {
      result.push(root.val);
      if (root.right) {
        stack.push(root.right);
      }
      root = root.left;
    } else {
      root = stack.pop();
    }
  }
  return result;
};
// @lc code=end
