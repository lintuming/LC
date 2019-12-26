/*
 * @lc app=leetcode id=363 lang=javascript
 *
 * [363] Max Sum of Rectangle No Larger Than K
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  const sums = Array.from({ length: matrix.length }, () => []);
  let max = -Number.MAX_VALUE;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let t = matrix[i][j];
      if (i > 0) {
        t += sums[i - 1][j];
      }
      if (j > 0) {
        t += sums[i][j - 1];
      }
      if (i > 0 && j > 0) {
        t -= sums[i - 1][j - 1];
      }
      sums[i][j] = t;
      for (let m = 0; m <= i; m++) {
        for (let n = 0; n <= j; n++) {
          let d = t;
          if (m > 0) {
            d -= sums[m - 1][j];
          }
          if (n > 0) {
            d -= sums[i][n - 1];
          }
          if (m > 0 && n > 0) {
            d += sums[m - 1][n - 1];
          }
          if (d <= k) max = Math.max(max, d);
        }
      }
    }
  }
  return max;
};
// @lc code=end
console.log(maxSumSubmatrix([[2, 2, -1]], 0));
