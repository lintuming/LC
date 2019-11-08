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
  let m = matrix.length,
    n = matrix[0].length;
  const hashMap = {};

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] <= 0) {
        let xEnd = n;
        while (xEnd--) {
           matrix
        }
      }
    }
  }
};
// @lc code=end
