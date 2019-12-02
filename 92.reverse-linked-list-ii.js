/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let node = head;
  let i = 1;
  let prev = null;
  while (node) {
    const current = node;
    if (i === m) {
      const tail = node;
      let pointer = null;
      while (node && i <= n) {
        const next = node.next;
        if (pointer) {
          node.next = pointer;
        }
        pointer = node;
        node = next;
        i++;
      }
      //it's head
      if (prev === null) {
        head = pointer;
        tail.next = node;
      } else {
        prev.next = pointer;
        tail.next = node;
      }
      break;
    }
    prev = node;
    node = node.next;
    i++
  }
  return head;
};
// @lc code=end
