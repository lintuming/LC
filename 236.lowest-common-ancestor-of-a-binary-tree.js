/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let queue1;
  let queue2;
  const stack = [];
  function traverse(root) {
    if (root === null) return;
    if (queue1 && queue2) {
      return;
    }
    stack.push(root);
    if (root.val === p.val) {
      queue1 = [...stack];
    }
    if (root.val === q.val) {
      queue2 = [...stack];
    }
    traverse(root.left);
    traverse(root.right);
    stack.pop();
  }
  traverse(root);
  let idx = Math.min(queue1.length, queue2.length) - 1;
  while (idx>=0) {
    if (queue1[idx] === queue2[idx]) {
      return queue1[idx];
    }
    idx--;
  }
};
// @lc code=end
