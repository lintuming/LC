/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const result = [];
  if (nums.length < 4) {
    return result;
  }
  nums = nums.sort((a, b) => a - b);
  //TODO recursive is easy but slow
  function findSum(nums, prevTotal, buffer) {
    if (buffer.length === 4) {
      if (prevTotal === target) {
        result.push(buffer.slice());
      }
      return;
    }
    if (nums.length === 0) return;

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i - 1] === nums[i]) {
        continue;
      }
      buffer.push(nums[i]);
      findSum(nums.slice(i + 1), prevTotal + nums[i], buffer);
      buffer.pop();
    }
  }
  findSum(nums, 0, []);
  return result;
};
// @lc code=end
