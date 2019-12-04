/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//O(n2)
var lengthOfLIS = function(nums) {
  const dp = Array(nums.length);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};
// @lc code=end
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
