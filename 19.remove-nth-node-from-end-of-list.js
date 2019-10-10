/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const stack = [];
  let node = head;
  while (node) {
    stack.push(node);
    node = node.next;
  }
  let remove = null;
  while (n--) {
    remove = stack.pop();
  }
  if (remove === head) {
    head = remove.next;
    remove.next = null;
  }else{
    stack.pop().next=remove.next;
    remove.next=null
  }
  return head;
};
// @lc code=end
