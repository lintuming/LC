/*
 * @lc app=leetcode id=368 lang=javascript
 *
 * [368] Largest Divisible Subset
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  nums.sort((a, b) => a - b);
  const dp = Array(nums.length).fill(0);
  const location = Array(nums.length).fill(0);
  const output = [];
  let prevMaxId = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] % nums[i] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        location[i] = j;
        if (dp[prevMaxId] < dp[i]) {
          prevMaxId = i;
        }
      }
    }
  }
  const max = dp[prevMaxId];
  for (let i = 0; i < max; i++) {
    output.push(nums[prevMaxId]);
    prevMaxId = location[prevMaxId];
  }
  return output;
};
// @lc code=end
