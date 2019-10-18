/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let count = 0,
    buffer = [];
  function backTrack(level) {
    if (level >= n) {
      return count++;
    }
    for (let i = 0; i < n; i++) {
      if (
        !buffer.some(
          (placed, col) =>
            i === placed ||
            level === placed + col - i ||
            level === col - placed + i
        )
      ) {
        buffer.push(i);
        backTrack(level + 1);
        buffer.pop();
      }
    }
  }
  backTrack(0);
  return count;
};
// @lc code=end
