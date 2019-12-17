/*
 * @lc app=leetcode id=330 lang=javascript
 *
 * [330] Patching Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  let miss = 1,
    patches = 0,
    i = 0;
  while (miss <= n) {
    if (i < nums.length && nums[i] <= miss) {
      miss += nums[i];
      i++;
    } else {
      miss += miss;
      patches++
    }
  }
  return patches
};
// @lc code=end
