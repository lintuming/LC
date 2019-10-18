/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) {
    intervals.push(newInterval);
    return intervals;
  }
  const result = [];
  let prev = null;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= newInterval[0]) {
      intervals.splice(i, 0, newInterval);
      break;
    } else if (i === intervals.length - 1) {
      intervals.push(newInterval);
    }
  }

  for (let i = 0; i < intervals.length; i++) {
    if (prev) {
      const [prevStart, prevEnd] = prev;
      const [start, end] = intervals[i];
      if (start <= prevEnd) {
        prev = [Math.min(start, prevStart), Math.max(prevEnd, end)];
      } else {
        result.push(prev);
        prev = intervals[i];
      }
    } else {
      prev = intervals[i];
    }
  }
  if (prev) result.push(prev);
  return result;
};
// @lc code=end
console.log(insert([[1, 5]], [2, 7]));
