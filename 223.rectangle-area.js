/*
 * @lc app=leetcode id=223 lang=javascript
 *
 * [223] Rectangle Area
 */

// @lc code=start
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  // A C E G x points
  let intersectionWidth = Math.min(C, G) - Math.max(A, E);
  let intersectionHeight = Math.min(D, H) - Math.max(B, F);
  intersectionWidth = intersectionWidth > 0 ? intersectionWidth : 0;
  intersectionHeight = intersectionHeight > 0 ? intersectionHeight : 0;
  return (
    (C - A) * (D - B) +
    (G - E) * (H - F) -
    intersectionWidth * intersectionHeight
  );
};
// @lc code=end
