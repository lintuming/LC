/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
var maxPathSum = function(root) {
  if (root.left === null && root.right === null) {
    return root.val;
  }
  let max = -Number.MAX_VALUE;
  function findMax(node) {
    if (node === null) return 0;
    let leftMax = findMax(node.left);
    let rightMax = findMax(node.right);
    max = Math.max(max, node.val + leftMax + rightMax);
    //0 not across this node
    //node.val only across this node
    // leftMax+node.val only across this node and it's left
    return Math.max(0, node.val, leftMax + node.val, rightMax + node.val);
  }
  findMax(root)
  return max
};
// @lc code=end
