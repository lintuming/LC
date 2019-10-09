/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let current = 0,
    i = 0,
    len = nums.length - 1,
    res = 0;
  while (current < len) {
    res++;
    const prev = current;
    for (; i <= prev; i++) {
      current = Math.max(current, nums[i] + i);
    }
    if (prev === current) {
      return -1;
    }
  }
  return res
};
// @lc code=end