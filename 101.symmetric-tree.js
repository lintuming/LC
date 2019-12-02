/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true;
  function isSame(A, B) {
    if (A === null || B === null) {
      return A === B;
    }
    if (A.val === B.val) {
      return isSame(A.left, B.right) && isSame(A.right, B.left);
    } else {
      return false;
    }
  }
  return isSame(root.left, root.right);
};
// @lc code=end
