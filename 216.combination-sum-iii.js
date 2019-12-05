/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const output = [];
  const buffer = [];
  if (n > k * 9) return output;
  function backTrack(start, rest) {
    if (buffer.length > k || rest < 0) return;
    if (rest === 0 && buffer.length === k) {
      return output.push(buffer.slice());
    }
    for (let i = start; i <= 9; i++) {
      if (i > rest) {
        break;
      }
      buffer.push(i);
      backTrack(i + 1, rest - i);
      buffer.pop();
    }
  }
  backTrack(1, n);
  return output;
};
// @lc code=end
console.log(combinationSum3(3, 7));
