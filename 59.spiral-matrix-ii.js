/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const result = [];
  for (let i = 0; i < n; i++) result.push([]);
  let counter = 1;
  let x = 0,
    y = 0,
    xEnd = n - 1,
    yEnd = n - 1;
  while (x <= xEnd && y <= yEnd) {
    for (let i = x; i <= xEnd; i++) {
      result[y][i] = counter++;
    }
    y++;
    for (let i = y; i <= yEnd; i++) {
      result[i][xEnd] = counter++;
    }
    xEnd--;
    for (let i = xEnd; i >= x; i--) {
      result[yEnd][i] = counter++;
    }
    yEnd--;
    for (let i = yEnd; i >= y; i--) {
      result[i][x] = counter++;
    }
    x++;
  }
  return result;
};
// @lc code=end
console.log(generateMatrix(4))