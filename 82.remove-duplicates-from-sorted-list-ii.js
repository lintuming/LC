/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
var deleteDuplicates = function(head) {
  function deleteDup(head) {
    let next = head.next;
    while (next.val === next.next.val) {
      next = next.next;
    }
    if (next.value === head.value) {
      return next.next;
    }else{
      
    }
  }
};
// @lc code=end
