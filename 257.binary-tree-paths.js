/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const result = [];
  if(root===null)return result;
  function dfs(root, path) {
    const currentPath = path ? `${path}->${root.val}` : `${root.val}`;
    if (root.left === null && root.right === null) {
      return result.push(currentPath);
    }
    if (root.left) {
      dfs(root.left,currentPath);
    }
    if (root.right) {
      dfs(root.right,currentPath);
    }
  }
  dfs(root, "");
  return result;
};
// @lc code=end
