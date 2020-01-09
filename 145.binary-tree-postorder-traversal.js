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
  function postOrderTraverse(root) {
    if (root === null) return;
    postOrderTraverse(root.left)
    postOrderTraverse(root.right)
    result.push(root.val)
  }
  postOrderTraverse(root)
  return result;
};
// @lc code=end
