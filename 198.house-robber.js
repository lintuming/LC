/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  const dp = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp[i] = nums[i];
    } else if (i - 2 < 0) {
      dp[i] = Math.max(nums[i], dp[i - 1]);
    } else {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
  }
  return dp[nums.length - 1];
};
// @lc code=end
console.log(rob([1,2,3,1]));
