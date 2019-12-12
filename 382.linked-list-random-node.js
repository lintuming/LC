/*
 * @lc app=leetcode id=382 lang=javascript
 *
 * [382] Linked List Random Node
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
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let revisor = this.head;
  let node = this.head.next;
  let count = 2;
  while (node) {
    const random = Math.floor(Math.random() * (count+1));
    if (random <= 1) {
      revisor = node;
    }
    node = node.next;
    count++;
  }
  return revisor.val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end
