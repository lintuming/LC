/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const dp = Array.from({ length: s.length });

  for (let i = 0; i < dp.length; i++) {
    if (s[i] !== "0") {
      if (i === 0) {
        dp[i] = 1;
      } else {
        dp[i] = dp[i - 1];
      }
    } else {
      dp[i] = 0;
    }
    if (i > 0 && (s[i - 1] === "1" || (s[i - 1] === "2" && s[i] <= 6))) {
      if (i - 2 >= 0) {
        dp[i] += dp[i - 2];
      } else {
        dp[i] += 1;
      }
    }
  }
  return dp[s.length - 1];
};

// @lc code=end
console.log(numDecodings("226"));
