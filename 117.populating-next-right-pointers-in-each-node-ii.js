/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  const stack = [];
  while (stack.length) {
    let l = stack.length;
    let prev = null;
    while (l--) {
      const node = stack.shift();
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
      if (prev) {
        prev.next = node;
      }
      prev = node;
    }
  }
  return root
};
// @lc code=end
