/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const result = [],
    buffer = [];

  function backTrack(level) {
    if (level >= n) {
      return result.push(
        buffer.map(idx => ".".repeat(idx) + "Q" + ".".repeat(n - 1 - idx))
      );
    }
    for (let i = 0; i < n; i++) {
      const conflict = buffer.some((placedIdx, lvl) => {
    
        return (
          i === placedIdx ||
          level === lvl + placedIdx - i ||
          level === i + lvl - placedIdx
        );
      });
      if (!conflict) {
        buffer.push(i);
        backTrack(level + 1);
        buffer.pop();
      }
    }
  }
  backTrack(0);
  return result;
};
// @lc code=end
console.log(solveNQueens(5));
