/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [],
    buffer = [];
  function backTrack(rest) {
    if (rest.length === 0) {
      return result.push(buffer.slice());
    }
    for (let i = 0; i < rest.length; i++) {
      buffer.push(rest[i]);
      backTrack([...rest.slice(0, i), ...rest.slice(i + 1)]);
      buffer.pop();
    }
  }
  backTrack(nums);
  return result;
};
// @lc code=end
