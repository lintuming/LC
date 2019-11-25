/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  if ([0, 1].includes(nums.length)) return;
  let left = 0,
    right = nums.length - 1;
  let cur = 0;
  while (cur <= right) {
    console.log(nums, cur, "current", nums[cur]);
    if (nums[cur] === 0) {
      [nums[left], nums[cur]] = [nums[cur], nums[left]];
      left++;
      cur++;
    } else if (nums[cur] === 1) {
      cur++;
    } else if (nums[cur] === 2) {
      [nums[right], nums[cur]] = [nums[cur], nums[right]];
      right--;
    }
  }
};
// @lc code=end
