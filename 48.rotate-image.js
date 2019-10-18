/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/**
 * 
[
  [1,2,3,4],
  [4,5,6,6],
  [7,8,9,8],
  [4,5,1,4],
],
 */
var rotate = function(matrix) {
  let y = 0,
    x = 0,
    len = matrix.length;
  for (let y = 0; y < len / 2; y++) {
    for (let x = y; x < len - y - 1; x++) {
      const temp = matrix[y][x];
      // 0 1  2 0
      matrix[y][x] = matrix[len - 1 - x][y];
      //2 0 3 2
      matrix[len - 1 - x][y] = matrix[len - 1 - y][len - 1 - x];
      //3 2 1 3
      matrix[len - 1 - y][len - 1 - x] = matrix[x][len - 1 - y];
      matrix[x][len - 1 - y] = temp;
    }
  }
};
// @lc code=end
