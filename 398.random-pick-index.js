/*
 * @lc app=leetcode id=398 lang=javascript
 *
 * [398] Random Pick Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
  this.cache = {};
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  if (this.cache[target]) {
    const posible = this.cache[target];
    return posible[Math.floor(Math.random() * posible.length)];
  }
  const posible = [];
  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      posible.push(i);
    }
  }
  this.cache[target] = posible;
  return posible[Math.floor(Math.random() * posible.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end
const sl = new Solution([1, 2, 3, 3, 3]);
console.log(sl.pick(3));
