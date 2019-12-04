/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
//A C E D B J H K I G F
var postorderTraversal = function(root) {
  const result = [];
  const stack = [];
  //postOrder:left,right,root
  while (root || stack.length) {
    if (root) {
      stack.push(root)
      if (root.right) {
        stack.push(root.right);
      }
      if (root.left === null && root.right === null) {
        result.push(root.val);
      }
      root = root.left;
    } else {
      root = stack.pop();
    }
  }
  return result
};
// @lc code=end
