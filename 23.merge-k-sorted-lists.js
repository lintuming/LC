/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const start = 0,
    end = lists.length - 1;
  return divide(lists, start, end);
  function divide(l, start, end) {
    if (start === end) {
      return l[start];
    } else if (start < end) {
      const mid = ((start + end) / 2) | 0;
      const left = divide(l, start, mid);
      const right = divide(l, mid + 1, end);
      return merge(left, right);
    } else {
      return null;
    }
  }
  function merge(left, right) {
    if (!left) return right;
    if (!right) return left;
    if (left.val <= right.val) {
      left.next = merge(left.next, right);
      return left;
    } else if (right.val < left.val) {
      right.next = merge(right.next, left);
      return right;
    }
  }
};
// @lc code=end
