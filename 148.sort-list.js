/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
function merge(node1, node2) {
  //eslint-disable-next-line
  const dummy = new ListNode(-1);
  let current = dummy;
  while (node1 !== null && node2 !== null) {
    if (node1.val > node2.val) {
      current.next = node2;
      node2 = node2.next;
    } else {
      current.next = node1;
      node1 = node1.next;
    }
    current = current.next;
  }
  //it's linked list,point the the exist node
  if (node1 !== null) {
    current.next = node1;
  }
  if (node2 !== null) {
    current.next = node2;
  }
  return dummy.next;
}
var sortList = function(head) {
  if (!head || head.next === null) return head;
  let slow = head,
    fast = head,
    prev = null;
  //fast and slow pointer to find the middle linked node
  while (slow && fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  return merge(sortList(head), sortList(slow));
};
// @lc code=end
