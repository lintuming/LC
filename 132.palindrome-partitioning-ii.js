/*
 * @lc app=leetcode id=132 lang=javascript
 *
 * [132] Palindrome Partitioning II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/**
 *
 *
 */
var minCut = function(s) {
  const dp = Array(s.length).fill(0);
  const p = Array.from({ length: s.length }, () => []);
  for (let i = 0; i < s.length; i++) {
    //最多i之前，每个字母分割一次
    dp[i] = i;
    for (let j = 0; j <= i; j++) {
      if (s[j] === s[i] && (i - j < 2 || p[j + 1][i - 1])) {
        p[j][i] = true;
        dp[i] = j === 0 ? 0 : Math.min(dp[i], dp[j - 1] + 1);
      }
    }
  }
  return dp[s.length - 1];
};
// @lc code=end
console.log(minCut("aab"));
