/*
 * @lc app=leetcode id=384 lang=javascript
 *
 * [384] Shuffle an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.origin = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.origin;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const cloned = this.origin.slice();
  for (let i = 0; i < this.origin.length; i++) {
    const random = Math.floor(Math.random() * this.origin.length);
    [cloned[i], cloned[random]] = [cloned[random], cloned[i]];
  }
  return cloned;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
