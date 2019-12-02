/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) return false;
  function hasSum(root, total) {
    if (root === null) {
      return total === sum;
    }
    if (root.left === null) return hasSum(root.right, total + root.val);
    if (root.right === null) return hasSum(root.left, total + root.val);
    return (
      hasSum(root.left, total + root.val) ||
      hasSum(root.right, total + root.val)
    );
  }
  return hasSum(root, 0);
};
// @lc code=end
