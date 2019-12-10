/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
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
var rob = function(root) {
  const [current, next] = traverse(root);
  return Math.max(current, next);
  function traverse(root) {
    if (!root) {
      return [0, 0];
    }
    const [leftCur, leftNext] = traverse(root.left);
    const [rightCur, rightNext] = traverse(root.right);
    const current = root.val + leftNext + rightNext;
    const next = Math.max(leftCur, leftNext) + Math.max(rightCur, rightNext);
    return [current, next];
  }
};
// @lc code=end
