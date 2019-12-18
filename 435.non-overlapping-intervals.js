/*
 * @lc app=leetcode id=435 lang=javascript
 *
 * [435] Non-overlapping Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  let counter = 0;
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[1] - b[1]);
  intervals.reduce((prev, cur) => {
    if (prev[1] > cur[0]) {
      counter++;
      return prev
    }
    return cur;
  });

  return counter;
};
// @lc code=end
console.log(
  eraseOverlapIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12]
  ])
);
