/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.cache = [];
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === j) return this.nums[j];
  if (this.cache[i] && this.cache[j]) {
    return this.nums[i] + this.cache[j] - this.cache[i];
  }
  this.nums.reduce((sum, num, index) => {
    const total = sum + num;
    this.cache[index] = total;
    return total;
  }, 0);
  return this.nums[i] + this.cache[j] - this.cache[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end


