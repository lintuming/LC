/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const result = [];
  if (root === null) return result;
  const buffer = [];
  function pathSumImp(node, total) {
    if (node === null) {
      if (total === sum) {
        result.push(buffer.slice());
      }
      return;
    }
    buffer.push(node.val);
    if (node.left === null) {
      pathSumImp(node.right, total + node.val);
      return buffer.pop();
    }
    if (node.right === null) {
      pathSumImp(node.left, total + node.val);
      return buffer.pop();
    }
    pathSumImp(node.left, total + node.val);
    pathSumImp(node.right, total + node.val);
    buffer.pop();
  }
  pathSumImp(root, 0);
  return result;
};
// @lc code=end
