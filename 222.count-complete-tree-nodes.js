/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
var countNodes = function(root) {
  if (root === null) return 0;
  let count = 0;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    count++;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return count
};
// @lc code=end
