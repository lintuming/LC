/*
 * @lc app=leetcode id=421 lang=javascript
 *
 * [421] Maximum XOR of Two Numbers in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(max, nums[j] ^ nums[i]);
    }
  }
  return max
};
// @lc code=end