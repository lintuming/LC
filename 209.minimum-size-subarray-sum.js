/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let min = Number.MAX_VALUE;
  let left = 0,
    right = 0,
    sum = 0;
  for (; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= s) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return min === Number.MAX_VALUE ? 0 : min;
};
// @lc code=end
