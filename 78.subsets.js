/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const buffer = [];
  const result = [];
  function backTrack(start) {
    result.push(buffer.slice());
    if (start === nums.length) return;
    for (let i = start; i < nums.length; i++) {
      buffer.push(nums[i]);
      backTrack(i + 1);
      buffer.pop();
    }
  }
  backTrack(0)
  return result
};
// @lc code=end
console.log(subsets([1,2,3]))