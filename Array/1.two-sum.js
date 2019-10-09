/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const exist = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (exist[target - nums[i]] >= 0) {
      result.push(exist[target - nums[i]], i);
      return result;
    }
    exist[nums[i]] = i;
  }
  return result;
};
// @lc code=end
