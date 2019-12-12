/*
 * @lc app=leetcode id=377 lang=javascript
 *
 * [377] Combination Sum IV
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i >= nums[j]) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }
  return dp[target];
};
// @lc code=end
console.log(combinationSum4([1, 2, 3], 4));
