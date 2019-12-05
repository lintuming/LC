/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let total = 0;
  if(grid.length===0)return total;
  const m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        total++;
        count(i, j);
      }
    }
  }
  function count(i, j) {
    if (i < 0 || i >= m ) return;
    if (j < 0 || j >= n ) return;
    if (grid[i][j] === "0") return;
    grid[i][j] = "0";
    count(i - 1, j);
    count(i + 1, j);
    count(i, j - 1);
    count(i, j + 1);
  }
  return total;
};
// @lc code=end
console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
  ])
);
