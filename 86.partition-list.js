/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let beforeHead = null;
  let afterHead = null;
  let beforeTail = null;
  let afterTail = null;
  let node = head;
  while (node) {
    const next = node.next;
    if (node.val < x) {
      if (beforeHead === null) {
        beforeHead = node;
        beforeTail = node;
        node.next = null;
      } else {
        beforeTail.next = node;
        beforeTail = node;
        node.next = null;
      }
    } else {
      if (afterHead === null) {
        afterHead = node;
        afterTail = node;
        node.next = null;
      } else {
        afterTail.next = node;
        afterTail = node;
        node.next = null;
      }
    }
    node = next;
  }
  if (beforeTail) {
    beforeTail.next = afterHead;
  }
  return beforeHead || afterHead;
};
// @lc code=end

