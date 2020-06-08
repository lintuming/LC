/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  } else if (lists.length === 1) {
    return lists[0];
  } else if (lists.length === 2) {
    return mergeTwoLists(lists[0], lists[1]);
  }
  const [lists1, lists2] = divideLists(lists);
  return  mergeTwoLists(mergeKLists(lists1),mergeKLists(lists2));
};

function divideLists(lists) {
  const mid = (lists.length / 2) | 0;
  return [lists.slice(0, mid), lists.slice(mid)];
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode();
  let node = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    node = node.next;
  }
  while (l1) {
    node.next = l1;
    l1 = l1.next;
    node = node.next;
  }
  while (l2) {
    node.next = l2;
    l2 = l2.next;
    node = node.next

  }
  return dummy.next
}
// @lc code=end
