/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let prevIdx = 0,
    len = nums.length - 1,
    currentIdx = 0;
  while (currentIdx < len) {
    const prev = currentIdx;
    for (let i = prevIdx; i <= currentIdx; i++) {
      currentIdx = Math.max(currentIdx, nums[i] + i);
      prevIdx = i;
    }
    if (prev === currentIdx) return false;
  }
  return true;
};
// @lc code=end
