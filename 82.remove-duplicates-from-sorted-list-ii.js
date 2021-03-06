/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head === null) return head;
  function removeDup(node) {
    if (node === null) return null;
    const current = node;
    while (node.next && node.next.val === current.val) {
      node = node.next;
    }
    if (current === node) {
      node.next = removeDup(node.next);
      return node;
    } else {
      const next = node.next;
      node.next = null;
      return removeDup(next);
    }
  }
  return removeDup(head);
};
// @lc code=end
