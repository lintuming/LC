/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const result = [];
  // solution 1
  // const stack = [];
  // while (root || stack.length) {
  //   if (root) {
  //     result.push(root.val);
  //     if (root.right) {
  //       stack.push(root.right);
  //     }
  //     root = root.left;
  //   } else {
  //     root = stack.pop();
  //   }
  // }
  //solution 2
  function preOrderTraverse(root){
    if(root===null)return ;
    result.push(root.val)
    preOrderTraverse(root.left)
    preOrderTraverse(root.right)
    
  }
  preOrderTraverse(root)
  return result;
};

// @lc code=end
