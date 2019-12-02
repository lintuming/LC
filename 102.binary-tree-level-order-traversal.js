/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];
  if (root === null) return [];
  const stack = [root];
  while (stack.length) {
    const currentLevel = [];
    const nextStack = [];
    while (stack.length) {
      const node = stack.shift();
      if (node) {
        currentLevel.push(node.val);
        if (node.left) nextStack.push(node.left);
        if (node.right) nextStack.push(node.right);
      }
    }
    stack.push(...nextStack);
    result.push(currentLevel);
  }
  return result;
};
// @lc code=end
