/*
 * @lc app=leetcode id=436 lang=javascript
 *
 * [436] Find Right Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  const output = [];
  const set = intervals.slice().map((intervals, idx) => [...intervals, idx]);
  set.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < set.length; i++) {
    const [start, end, originIdx] = set[i];
    let j = i + 1;
    while (j < set.length && set[j][0] < end) {
      j++;
    }
    output[originIdx] = j >= set.length ? -1 : set[j][2];
  }
  return output;
};
// @lc code=end
console.log(
  findRightInterval( [ [1,4], [2,3], [3,4] ])
);
