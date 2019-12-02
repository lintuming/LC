/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const row = Array.from(
    {
      length: matrix.length
    },
    () => []
  );
  const col = Array.from(
    {
      length: matrix[0].length
    },
    () => []
  );
  let maxArea = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === 0) {
        row[y][x] = 0;
        col[y][x] = 0;
        continue;
      } else {
        row[y][x] = x - 1 >= 0 ? row[y][x - 1] + 1 : 1;
        col[y][x] = y - 1 >= 0 ? col[y - 1][x] + 1 : 1;
      }
      const maxLen = Math.min(y + 1, row[y][x], col[y][x]);
      maxArea = Math.max(maxArea, maxLen * maxLen);
    }
  }
  return maxArea;
};
// @lc code=end
console.log(
  maximalSquare([
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]
  ])
);
