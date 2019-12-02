/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var sortedArrayToBST = function(nums) {
  function constructTree(restNums) {
    if (restNums.length === 0) return null;
    const mid = ((0 + restNums.length - 1) / 2) | 0;
    const node = new TreeNode(restNums[mid]);
    node.left = constructTree(restNums.slice(0, mid));
    node.right = constructTree(restNums.slice(mid + 1, restNums.length));
    return node;
  }
  return constructTree(nums);
};
// @lc code=end

