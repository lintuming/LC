/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
var rightSideView = function(root) {
  const stack = [root];
  const output = [];
  if (root === null) return output;
  while (stack.length) {
    let len = stack.length;
    while (len--) {
      const node = stack.shift();
      if (len === 0) {
        output.push(node.val);
      }
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }
  return output;
};
// @lc code=end
