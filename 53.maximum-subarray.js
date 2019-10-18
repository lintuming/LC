/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let prev = 0,
    max = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    const sum = nums[i] + prev;
    prev = Math.max(nums[i], sum);
    max = Math.max(prev, max);
  }
  return max;
};
// @lc code=end
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
