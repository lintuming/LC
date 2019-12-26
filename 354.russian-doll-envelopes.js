/*
 * @lc app=leetcode id=354 lang=javascript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  if (envelopes.length === 0) return 0;
  envelopes.sort((a, b) => a[0] - b[0]);
  //at least one Doll can be enveloped
  const dp = Array(envelopes.length).fill(1);
  let max = 1;
  for (let i = 1; i < envelopes.length; i++) {
    const [w1, h1] = envelopes[i];
    for (let j = 0; j < i; j++) {
      const [w2, h2] = envelopes[j];
      //can put j inside i
      if (w1 > w2 && h1 > h2) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
        max = Math.max(max, dp[i]);
      }
    }
  }
  return max;
};
// @lc code=end
console.log(
  maxEnvelopes([
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3]
  ])
);
