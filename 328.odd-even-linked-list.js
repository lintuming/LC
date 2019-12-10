/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
var oddEvenList = function(head) {
  if (head === null) return head;
  let eventHead = head.next;
  let oddPoint = head,
    eventPoint = head.next,
    oddPrev = null,
    eventPrev = null;
  while (oddPoint || eventPoint) {
    if (oddPrev) {
      oddPrev.next = oddPoint;
    }
    if (eventPrev) {
      eventPrev.next = eventPoint;
    }
    oddPrev = oddPoint;
    eventPrev = eventPoint;
    if (oddPoint && oddPoint.next && oddPoint.next.next) {
      const next = oddPoint.next.next;
      oddPoint.next = null;
      oddPoint = next;
    } else {
      oddPoint = null;
    }
    if (eventPoint && eventPoint.next && eventPoint.next.next) {
      const next = eventPoint.next.next;
      eventPoint.next = null;
      eventPoint = next;
    } else {
      eventPoint = null;
    }
  }
  oddPrev.next = eventHead;
  return head;
};
// @lc code=end
