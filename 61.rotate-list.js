/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return null;
  const stack = [];
  while (head) {
    stack.push(head);
    head = head.next;
  }
  if (stack.length === 1) return stack[0];
  k = k % stack.length;

  while (k) {
    const tail = stack.pop();
    tail.next = stack[0];
    stack[stack.length - 1].next = null;
    stack.unshift(tail);
    k--;
  }
  return stack[0];
};
// @lc code=end
