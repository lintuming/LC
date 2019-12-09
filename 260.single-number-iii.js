/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      result.push(num);
    }
  }
  return result;
};
// @lc code=end
