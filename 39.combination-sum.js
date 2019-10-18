/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  const result = [];
  const buffer = [];
  function backTrack(sum, idx) {
    if (sum === target) {
      return result.push(buffer.slice());
    }
    if (sum > target) {
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      buffer.push(candidates[i]);
      backTrack(sum + candidates[i], i);
      buffer.pop();
    }
  }
  backTrack(0, 0);
  return result;
};
// @lc code=end
console.log(combinationSum([2, 3, 6, 7], 7));
