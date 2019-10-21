/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const dp = [];
  const xEnd = grid[0].length - 1,
    yEnd = grid.length - 1;
  for (let i = 0; i < grid.length; i++) dp.push([]);
  for (let x = xEnd; x >= 0; x--) {
    inner: for (let y = yEnd; y >= 0; y--) {
      if (x === xEnd && y === yEnd) {
        dp[y][x] = grid[y][x];
        continue inner;
      }
      let result = Number.MAX_VALUE;
      if (x + 1 <= xEnd) {
        result = Math.min(result, (dp[y][x + 1] || 0) + grid[y][x]);
      }
      if (y + 1 <= yEnd) {
        result = Math.min(result, (dp[y + 1][x] || 0) + grid[y][x]);
      }
      dp[y][x] = result;
    }
  }
  return dp[0][0];
};
// @lc code=end
console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]]))