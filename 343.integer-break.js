/*
 * @lc app=leetcode id=343 lang=javascript
 *
 * [343] Integer Break
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  const dp = Array(n);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = 0;
    for (let j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], Math.max(j, dp[j]) * Math.max(i - j, dp[i - j]));
    }
  }
  return dp[n];
};
// @lc code=end
console.log(integerBreak(10));
