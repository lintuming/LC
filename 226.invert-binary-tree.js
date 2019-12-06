/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) return root;
  const stack = [root];
  while (stack.length) {
    let l = stack.length;
    while (l--) {
      const node = stack.pop();
      if (node) {
        [node.left, node.right] = [node.right, node.left];
        stack.push(node.left, node.right);
      }
    }
  }
  return root
};
// @lc code=end
