/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const dp = [];
  const xEnd = obstacleGrid[0].length - 1,
    yEnd = obstacleGrid.length - 1;
  for (let i = 0; i <= yEnd; i++) dp.push([]);
  
  for (let x = xEnd; x >= 0; x--) {
    for (let y = yEnd; y >= 0; y--) {
      if (obstacleGrid[y][x] === 1) {
        dp[y][x] = 0;
        continue;
      }
      if (x === xEnd && y === yEnd) {
        dp[y][x] = 1;
        continue;
      }

      let total = 0;
      if (x + 1 <= xEnd) {
        total += dp[y][x + 1];
      }
      if (y + 1 <= yEnd) {
        total += dp[y + 1][x];
      }
      dp[y][x] = total;
    }
  }
  return dp[0][0];
};
// @lc code=end
