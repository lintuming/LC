/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(nums[i] - 1)) continue;
    let currentMax = 0;
    let current = nums[i];
    while (nums.includes(current)) {
      currentMax++;
      current++;
    }
    max = Math.max(max, currentMax);
  }
  return max;
};
// @lc code=end
