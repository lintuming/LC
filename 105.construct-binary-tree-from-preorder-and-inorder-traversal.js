/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  function build(p, i) {
    if (p.length === 0) return null;
    const root = p[0];
    const node = new TreeNode(root);
    const rootInInorder = i.findIndex(v => v === root);
    node.left = build(p.slice(1, rootInInorder + 1), i.slice(0, rootInInorder));
    node.right = build(p.slice(rootInInorder + 1), i.slice(rootInInorder + 1));
    return node;
  }
  return build(preorder, inorder);
};
// @lc code=end
