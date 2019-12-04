/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  const cache = {};
  function traverse(node) {
    if (node === null) return null;
    if (cache[node.val]) return cache[node.val];
    const newNode = new Node(node.val);
    cache[node.val] = newNode;
    newNode.next = traverse(node.next);
    newNode.random = traverse(node.random);
    return newNode;
  }
  return traverse(head)
};
// @lc code=end
