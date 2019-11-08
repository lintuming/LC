/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  let max = 0;
  const yEnd = matrix.length;
  if (yEnd === 0) return 0;
  const xEnd = matrix[0].length;
  if (xEnd === 0) return 0;
  const h = [];
  for (let x = 0; x < xEnd; x++) {
    let j = 0;
    while (j < yEnd) {
      if (matrix[j][x] === "0") {
        h[j] = 0;
      } else {
        h[j] = (Number(h[j]) || 0) + 1;
      }
      j++;
    }
    for (j = 0; j < yEnd; j++) {
      if (matrix[j][x] === "0") {
        continue;
      }
      const height = +h[j];
      let top = j - 1;
      while (top>=0&& h[top] >= height) {
        top--;
      }
      let bottom = j + 1;
      while (bottom<=yEnd&& h[bottom] >= height) {
        bottom++;
      }
      // console.log(bottom,top,height,(bottom - 1 - top) * height)
      max = Math.max(max, (bottom - 1 - top) * height);
    }
  }
  return max;
};
// @lc code=end


