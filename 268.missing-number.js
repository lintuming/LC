/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const l = nums.length;
  const sum = (l*(l+1))/2
  return sum-nums.reduce((a,b)=>a+b)
};
// @lc code=end

