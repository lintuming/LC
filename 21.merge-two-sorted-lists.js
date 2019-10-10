/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function(l1, l2) {
  function merge(left, right) {
    if (!left) return right;
    if (!right) return left;
    if (left.val <= right.val) {
      left.next = merge(left.next, right);
      return left;
    } else if (left.val > right.val) {
      right.next = merge(right.next, left);
      return right;
    }
  }
  return merge(l1, l2);
  // let node1 = l1,
  //   node2 = l2;
  // let prev = null,
  //   head = null;
  // while (node1 && node2) {
  //   if (node1.val > node2.val) {
  //     if (!head) {
  //       head = node2;
  //       prev = head;
  //     } else if (prev) {
  //       prev.next = node2;
  //       prev = node2;
  //     }
  //     node2 = node2.next;
  //   } else {
  //     if (!head) {
  //       head = node1;
  //       prev = head;
  //     } else if (prev) {
  //       prev.next = node1;
  //       prev = node1;
  //     }
  //     node1 = node1.next;
  //   }
  // }
  // if (node1) {
  //   if (!head) {
  //     head = node1;
  //   } else if (prev) {
  //     prev.next = node1;
  //   }
  // }
  // if (node2) {
  //   if(!head){
  //     head=node2
  //   }else if(prev){
  //     prev.next = node2;
  //   }
  // }
  // return head;
};
// @lc code=end
