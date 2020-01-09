/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    function build(i,p){
      if(i.length===0)return null;
      const root = p[p.length-1];
      const node = new TreeNode(root);
      const rootInInorder = i.findIndex(n=>n===root);
      node.left = build(i.slice(0,rootInInorder),p.slice(0,rootInInorder))
      node.right = build(i.slice(rootInInorder+1),p.slice(rootInInorder,p.length-1))
      return node
    }
    return build(inorder,postorder)
};
// @lc code=end

