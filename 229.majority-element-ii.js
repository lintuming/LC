/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const output = [];
  const counter = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (counter[n] >= 1) {
      counter[n] = counter[n] + 1;
    } else if (counter[n] === false) {
      counter[n] = false;
    } else {
      counter[n] = 1;
    }
    if (counter[n] > nums.length / 3 && counter[n]) {
      output.push(n);
      counter[n] = false;
    }
  }
  return output;
};
// @lc code=end
console.log(majorityElement([3]));
