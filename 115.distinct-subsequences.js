/*
 * @lc app=leetcode id=115 lang=javascript
 *
 * [115] Distinct Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const dp = Array.from({ length: t.length+1 }, () => []);
  for (let i = 0; i <= t.length; i++) {
    for (let j = 0; j <= s.length; j++) {
      if (i === 0) {
        dp[i][j] = 1;
        continue;
      }
      if (j === 0) {
        dp[i][0] = 0;
        continue;
      }
      dp[i][j] = dp[i][j - 1] + (s[j - 1] === t[i - 1] ? dp[i - 1][j - 1] : 0);
    }
  }
  return dp[t.length][s.length]
};
// @lc code=end
