/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(matrix.length===0)return [];
  const result = [];
  let x = 0,
    y = 0,
    xEnd = matrix[0].length,
    yEnd = matrix.length,
    total = (xEnd) * (yEnd);
  for (; y < yEnd; y++) {
    for (let i = x; i < xEnd; i++) {
      result.push(matrix[y][i]);
    }
    if (result.length === total) break;
    y++;
    for (let i = y; i < yEnd; i++) {
      result.push(matrix[i][xEnd - 1]);
    }
    if (result.length === total) break;

    xEnd--;
    for (let i = xEnd - 1; i >= x; i--) {
      result.push(matrix[yEnd - 1][i]);
    }
    if (result.length === total) break;

    yEnd--;
    for (let i = yEnd - 1; i >= y; i--) {
      result.push(matrix[i][x]);
    }
    if (result.length === total) break;

    x++;
    y--;
    console.log(x, y, xEnd, yEnd);
  }
  return result;
};
// @lc code=end
console.log(spiralOrder([
  [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
