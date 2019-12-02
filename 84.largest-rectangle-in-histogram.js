/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if(heights.length === 0)return 0
  let max = -Number.MAX_VALUE;
  for (let i = 0; i < heights.length; i++) {
    let h = heights[i];
    let j = i;
    for (; j < heights.length; j++) {
      h = Math.min(h, heights[j]);
      max = Math.max(max, (j - i + 1) * h);
    }
  }
  return max
};
// @lc code=end
console.log(largestRectangleArea([2,1,5,6,2,3]))