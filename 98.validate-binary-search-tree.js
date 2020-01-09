/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
var isValidBST = function(root) {
  function isValidBSTImpl(node, min, max) {
    if (node === null) return true;
    if (isInRange(node.val, min, max)) {
      let isLeftValid, isRightValid;
      if (node.left) {
        if (node.left.val < node.val && isInRange(node.left.val, min, max)) {
          isLeftValid = isValidBSTImpl(node.left, min, node.val);
        } else {
          isLeftValid = false;
        }
      } else {
        isLeftValid = true;
      }
      if (node.right) {
        if (node.right.val > node.val && isInRange(node.right.val, min, max)) {
          isRightValid = isValidBSTImpl(node.right, node.val, max);
        } else {
          isRightValid = false;
        }
      } else {
        isRightValid = true;
      }
      return isLeftValid && isRightValid;
    } else {
      return false;
    }
  }
  return isValidBSTImpl(root, -Number.MAX_VALUE, Number.MAX_VALUE);
};
function isInRange(val, min, max) {
  return min < val && val < max;
}
// @lc code=end
