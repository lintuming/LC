/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//O(n)
var merge = function(intervals) {
  const merged = [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let prev = null;
  for (let i = 0; i < intervals.length; i++) {
    if (prev) {
      const [prevStart, prevEnd] = prev;
      const [start, end] = intervals[i];
      if (start <= prevEnd) {
        prev = [Math.min(prevStart, start), Math.max(end, prevEnd)];
      } else {
        merged.push(prev);
        prev = intervals[i];
      }
    } else {
      prev = intervals[i];
    }
  }
  if (prev) merged.push(prev);
  return merged;
};
// @lc code=end
console.log(merge([[1,4],[2,3]]));
