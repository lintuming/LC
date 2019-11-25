/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
/**
 * s1=aabcc s2=dbbca s3=aadbbcbcac
 *     d b b c a
 *   1
 * a 1 0 0 0 0 0
 * a 1 1 1 1 1 0
 * b 0 1 1 1 1 0
 * c
 * c
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const dp = Array.from({ length: s1.length + 1 }, _ => []);
  dp[0][0] = true;
  for (let i = 0; i < s1.length+1; i++) {
    for (let j = 0; j < s2.length+1; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = true;
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] && s2[j - 1] === s3[j - 1];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] && s1[i - 1] === s3[i - 1];
      } else {
        dp[i][j] =
          (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
          (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
      }
    }
  }
  return dp[s1.length][s2.length];
};
// @lc code=end
