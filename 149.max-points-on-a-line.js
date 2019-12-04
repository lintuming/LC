/*
 * @lc app=leetcode id=149 lang=javascript
 *
 * [149] Max Points on a Line
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  const map = {};
  let maxPoint = -Number.MAX_VALUE;
  const matrix = [[]];
  for (let i = 0; i < points.length; i++) {
    const [point, value] = points[i];
    (matrix[point] || (matrix[point] = []))[value] = true;
  }
  console.log(matrix);
};
// @lc code=end
console.log(
  maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])
);
