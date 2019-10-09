/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let prev = null,
    nextShouldAdd = 0;
  let res = null;
  while (l1 || l2||nextShouldAdd!==0) {
    let result = nextShouldAdd;
    let currentVal = 0;
    if (l1) {
      result += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      result += l2.val;
      l2 = l2.next;
    }
    if (result >= 10) {
      nextShouldAdd = (result / 10)|0;
      currentVal = result % 10;
    } else {
      nextShouldAdd = 0;
      currentVal = result;
    }
    const current = new ListNode(currentVal);
    if (prev) {
      prev.next = current;
    } else {
      res = current;
    }
    prev = current;
  }
  return res
};
// @lc code=end
