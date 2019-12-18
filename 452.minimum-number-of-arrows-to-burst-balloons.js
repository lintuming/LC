/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  let arrows = 0;
  if (points.length === 0) return arrows;
  points.sort((a, b) => a[1] - b[1]);
  let prevMin;
  points.reduce((prev, [xStart, xEnd]) => {
    if (!prev) {
      return xEnd;
    }
    if (prev >= xStart) {
      return Math.min(prev, xEnd);
    } else {
      arrows++;
      return xEnd;
    }
  }, null);
  return arrows + 1;
};
// @lc code=end
console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12]
  ])
);
