/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  //solution1
  while (k--) {
    nums.unshift(nums.pop());
  }
  return nums;
  //solution2
  // return nums.slice(nums.length-k).concat(nums.slice(0, nums.length - k));
};
// @lc code=end
