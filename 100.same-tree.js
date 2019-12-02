/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  function traverse(a, b) {
    if (a === null || b === null) {
      return a === b;
    }
    if (a.val === b.val) {
      return traverse(a.left, b.left) && traverse(a.right, b.right);
    } else {
      return false;
    }
  }
  return traverse(p, q);
};
// @lc code=end
