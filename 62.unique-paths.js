/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(n, m) {
  const dp = [];
  for (let i = 0; i < m; i++) dp.push([]);
  dp[m - 1][n - 1] = 1;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (i === n - 1 && j === m - 1) {
        dp[j][i] = 1;
        continue;
      }
      dp[j][i] = (j+1<m?dp[j+1][i]:0)+(dp[j][i + 1] || 0);
    }
  }
  return dp[0][0];
};
// @lc code=end
console.log(uniquePaths(7, 3));
