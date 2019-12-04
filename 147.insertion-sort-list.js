/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
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
var insertionSortList = function(head) {
  if(head===null)return head
  let pointer = head.next;
  head.next = null;
  while (pointer) {
    let prev = null;
    let node = head;
    while (node && pointer.val > node.val) {
      prev = node;
      node = node.next;
    }
    const insert = pointer;
    pointer = pointer.next;
    insert.next = node;
    if (prev) {
      prev.next = insert;
    } else {
      head = insert;
    }
  }
  return head
};
// @lc code=end
