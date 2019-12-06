/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const stack = [];
  let l = 0;
  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      l++;
      const n = stack.pop();
      if (l === k) {
        return n.val;
      }
      root = n.right;
    }
  }
};
// @lc code=end
