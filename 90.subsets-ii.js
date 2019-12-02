/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums = nums.sort((a, b) => a - b);
  const result = [];
  const buffer = [];
  function backTrack(start) {
    result.push(buffer.slice());
    if (start >= nums.length) return;
    for (let i = start; i < nums.length; i++) {
      if (i !== start && nums[i] === nums[i - 1]) {
        continue;
      }
      buffer.push(nums[i]);
      backTrack(i + 1);
      buffer.pop();
    }
  }
  backTrack(0);
  return result;
};
// @lc code=end
console.log(subsetsWithDup([1, 2, 2]));
