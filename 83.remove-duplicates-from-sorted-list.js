/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
  let node = head;
  while (node) {
    const current = node;
    while (node.next && node.next.val === current.val) {
      node = node.next;
    }
    if (current === node) {
      node = current.next;
    } else {
      current.next = node.next;
      node.next = null;
      node = current.next;
    }
  }
  return head;
};
// @lc code=end
