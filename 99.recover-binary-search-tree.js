/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
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
var recoverTree = function(root) {
  
  const nodeOrder = [];
  const nodeValues = [];
  function inOrder(root) {
    if (root === null) {
      return;
    }
    inOrder(root.left);
    nodeOrder.push(root);
    nodeValues.push(root.val);
    inOrder(root.right);
  }
  inOrder(root)
  nodeValues.sort((a, b) => a - b);
  for (let i = 0; i < nodeValues.length; i++) {
    const node = nodeOrder[i];
    node.val = nodeValues[i];
  }
  return root
};
// @lc code=end
