/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let total = 1;
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
      continue;
    } else {
      total *= nums[i];
    }
  }
  return nums.map(num => {
    if (zeroCount >= 2) {
      return 0;
    } else if (zeroCount === 1) {
      if (num === 0) {
        return total;
      } else {
        return 0;
      }
    } else {
      return total / num;
    }
  });
};
// @lc code=end
