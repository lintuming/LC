/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const row = [],
    col = [];
  const m = matrix.length,
    n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        if (!row.includes(i)) {
          row.push(i);
        }
        if (!col.includes(j)) {
          col.push(j);
        }
      }
    }
  }
  while (row.length) {
    const r = row.pop();
    for (let i = 0; i < n; i++) {
      matrix[r][i] = 0;
    }
  }
  while (col.length) {
    const c = col.pop();
    for (let j = 0; j < m; j++) {
      matrix[j][c] = 0;
    }
  }
};
// @lc code=end
setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
]);
