/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  //If the value of p is less than the root and q is less than the root, go to the left
  if (p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q);
  }
  //If the value of p is greater than the root and q is greater than the root, go to the right
  else if (p.val > root.val && q.val > root.val) {
      return lowestCommonAncestor(root.right, p, q);
  }
  //We found it!
  else {
      return root;
  }
};
// @lc code=end
