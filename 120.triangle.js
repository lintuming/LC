/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function(triangle) {
  if (triangle.length === 0) return 0;
  let min = Number.MAX_VALUE;
  const dp = [];
  for (let i = 0; i < triangle.length; i++) {
    dp.push([]);
    inner: for (let j = 0; j < triangle[i].length; j++) {
      if (i === 0) {
        dp[i][j] = triangle[i][j];
        continue inner;
      }
      let m = Number.MAX_VALUE;
      if (j - 1 >= 0) {
        m = Math.min(m, dp[i - 1][j - 1]);
      }
      if (j < triangle[i - 1].length) {
        m = Math.min(m, dp[i - 1][j]);
      }
      dp[i][j] = m + triangle[i][j];
    }
  }

  return Math.min(...dp[triangle.length - 1]);
};
// @lc code=end
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
