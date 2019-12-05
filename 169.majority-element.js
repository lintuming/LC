/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    cache[num] = (cache[num] || (cache[num] = 0)) + 1;
    if (cache[num] > nums.length / 2) {
      return num;
    }
  }
};
// @lc code=end
console.log(majorityElement([3, 2, 3]));
