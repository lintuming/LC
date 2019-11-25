/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const buffer = [];
  const result = [];
  function backTrack(start, end) {
    if (buffer.length === k) {
      return result.push(buffer.slice());
    }
    if (start > end) return;
    for (let i = start; i <= end; i++) {
      buffer.push(i);
      backTrack(i + 1, end);
      buffer.pop();
    }
  }
  backTrack(1, n);
  return result;
};
// @lc code=end
console.log(combine(4, 2));
