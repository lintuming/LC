/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */

var isPalindrome = function(head) {
  if (head === null) return true;
  if (head.next === null) return true;
  let slow = head,
    fast = head;
  while (fast && fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = reverse(slow.next);

  slow = slow.next;
  while (slow !== null) {
    if (head.val !== slow.val) return false;
    slow = slow.next;
    head = head.next;
  }
  return true;
  function reverse(head) {
    let prev = null;
    let next = null;
    while (head) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }
};
// @lc code=end

