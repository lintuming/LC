/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(nums[i], min);
  }
  return min;
};
// @lc code=end
