/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var sortedListToBST = function(head) {
  let length = 0;
  let node = head;
  while (node) {
    length++;
    node = node.next;
  }
  function constructTree(startNode, start, end) {
    if (start > end) {
      return null;
    }
    const mid = ((start + end) / 2) | 0;
    let i = start;
    let node = startNode;
    while (node && i < mid) {
      i++;
      node = node.next;
    }
    const newNode = new TreeNode(node.val);
    newNode.left = constructTree(startNode, start, mid - 1);
    newNode.right = constructTree(node.next, mid + 1, end);
    return newNode;
  }
  return constructTree(head,0,length-1)
};
// @lc code=end
