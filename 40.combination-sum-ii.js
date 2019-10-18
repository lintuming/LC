/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  const result = [],
    buffer = [];
  function backTrack(sum, j) {
    if (sum === target) {
      return result.push(buffer.slice());
    }
    if (sum > target) return;
    for (let i = j; i < candidates.length; i++) {
      if ((i !== j&&candidates[i]) === candidates[i - 1]) {
        continue;
      }
      buffer.push(candidates[i]);
      backTrack(sum + candidates[i], i + 1);
      buffer.pop();
    }
  }
  backTrack(0, 0);
  return result;
};
// @lc code=end
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
