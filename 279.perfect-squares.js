/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  function isPerfectSquare(n) {
    if (n === 1) {
      return true;
    }
    const sqrt = Math.sqrt(n);
    if ((sqrt | 0) === sqrt) {
      return true;
    }
    return false;
  }
  const dp = Array(n + 1);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    if (isPerfectSquare(i)) {
      dp[i] = 1;
      continue;
    }
    dp[i] = Number.MAX_VALUE;
    for (let j = 1; j < i; j++) {
      dp[i] = Math.min(dp[j] + dp[i - j], dp[i]);
    }
  }
  return dp[n];
};
// @lc code=end
console.log(numSquares(13));
