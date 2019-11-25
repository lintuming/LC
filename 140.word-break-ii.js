/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const dp = Array.from({ length: s.length + 1 }, () => null);
  dp[0] = [""];
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const sliced = s.slice(j, i);
      if (dp[j] && wordDict.includes(sliced)) {
        dp[i] = [
          ...(dp[i] || []),
          ...dp[j].map(s => (s ? s + ` ${sliced}` : sliced))
        ];
      }
    }
  }
  return dp[s.length] ? dp[s.length] : [];
};
// @lc code=end
console.log(
  wordBreak(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    [
      "a",
      "aa",
      "aaa",
      "aaaa",
      "aaaaa",
      "aaaaaa",
      "aaaaaaa",
      "aaaaaaaa",
      "aaaaaaaaa",
      "aaaaaaaaaa"
    ]
  )
);
