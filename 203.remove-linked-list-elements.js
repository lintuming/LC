/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const fake = new ListNode(-1);
  fake.next = head;
  let prev = fake;
  while (head) {
    if (head.val === val) {
      prev.next = head.next;
      head.next = null;
      head = prev.next;
    } else {
      prev = head;
      head = head.next;
    }
  }
  return fake.next;
};
// @lc code=end
