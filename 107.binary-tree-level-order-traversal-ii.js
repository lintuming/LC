/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
var levelOrderBottom = function(root) {
  const result = [];
  const stack = [root];
  while (stack.length) {
    const nextStack = [];
    const currentLevel = [];
    while (stack.length) {
      const node = stack.shift();
      if (node) {
        currentLevel.push(node.val);
        nextStack.push(node.left, node.right);
      }
    }
    stack.push(...nextStack);
    currentLevel.length && result.unshift(currentLevel);
  }
  return result;
};
// @lc code=end
