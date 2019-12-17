/*
 * @lc app=leetcode id=417 lang=javascript
 *
 * [417] Pacific Atlantic Water Flow
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  const points = [];
  if (matrix.length === 0 || matrix[0].length === 0) return points;
  const m = matrix.length,
    n = matrix[0].length;
  const pacific = Array.from({ length: m }, () => []);
  const atlantic = Array.from({ length: m }, () => []);
  for (let x = 0; x < n; x++) {
    dfs(pacific, x, 0, -Number.MAX_VALUE);
    dfs(atlantic, x, m - 1, -Number.MAX_VALUE);
  }
  for (let y = 0; y < m; y++) {
    dfs(pacific, 0, y, -Number.MAX_VALUE);
    dfs(atlantic, n - 1, y, -Number.MAX_VALUE);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        points.push([i, j]);
      }
    }
  }
  return points;
  function dfs(ocean, x, y, prevHeight) {
    if (
      x < 0 ||
      x >= n ||
      y < 0 ||
      y >= m ||
      ocean[y][x] ||
      prevHeight > matrix[y][x]
    ) {
      return;
    }
    ocean[y][x] = true;
    dfs(ocean, x - 1, y, matrix[y][x]);
    dfs(ocean, x + 1, y, matrix[y][x]);
    dfs(ocean, x, y - 1, matrix[y][x]);
    dfs(ocean, x, y + 1, matrix[y][x]);
  }
};
// @lc code=end
