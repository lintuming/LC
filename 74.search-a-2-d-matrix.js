/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false;
  if (matrix[0].length === 0) return false;
  let cur = -1;
  while (cur + 1 < matrix.length&&target >= matrix[cur + 1][0] ) {
    if (target === matrix[cur + 1][0]) return true;
    cur++;
  }
  if (cur === -1) return false;
  let left = 0,
    right = matrix[cur].length - 1;
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (matrix[cur][mid] === target) return true;
    if (target < matrix[cur][mid]) {
      right = mid - 1;
    }
    if (target > matrix[cur][mid]) {
      left = mid + 1;
    }
  }
  return false;
};
// @lc code=end
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ],
    4
  )
);
