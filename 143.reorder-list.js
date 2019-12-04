/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (head === null) return null;
  const stack = [];
  const first = head;
  while (head) {
    const next = head.next;
    stack.push(head);
    head.next = null;
    head = next;
  }
  let pointer = null;
  while (stack.length) {
    const one = stack.shift();
    const two = stack.pop();
    if (two) one.next = two;
    if (pointer) {
      pointer.next = one;
    }
    pointer = two;
  }
  return first;
};
// @lc code=end
