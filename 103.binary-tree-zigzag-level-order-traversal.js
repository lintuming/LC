/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let forward = true;
  const result = [];
  const stack = [root];
  while (stack.length) {
    const currentLvl = [];
    const nextStack = [];
    while (stack.length) {
      const node = stack[forward ? "shift" : "pop"]();
      if (node) {
        currentLvl.push(node.val);
        if (forward) {
          nextStack.push(node.left, node.right);
        } else {
          nextStack.unshift(node.left, node.right);
        }
      }
    }
    currentLvl.length && result.push(currentLvl);
    stack.push(...nextStack);
    forward = !forward;
  }
  return result;
};
// @lc code=end
