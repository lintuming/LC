/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  const dp = Array(nums.length).fill(1);
  console.log(dp)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        if(dp[i]>=3)return true
      }
    }
  }
  return false
};
// @lc code=end
console.log(increasingTriplet([1,2,3,4,5]))