/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack = [];
  this.buffer = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  let len = this.stack.length;
  if (len <= 1) {
    return this.stack.pop();
  } else {
    while (len !== 1) {
      this.buffer.push(this.stack.pop());
      len--;
    }
    const last = this.stack.pop();
    while (this.buffer.length) {
      this.stack.push(this.buffer.pop());
    }
    return last;
  }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.empty());
