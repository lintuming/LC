/*
 * @lc app=leetcode id=376 lang=javascript
 *
 * [376] Wiggle Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (nums.length === 0) return 0;
  const dp = Array(nums.length).fill([0, 0]);
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const [longest, prevDiff] = dp[j];
      const diff = nums[i] - nums[j];
      const isWiggle = diff > 0 ? prevDiff < 0 : prevDiff > 0;
      if (diff !== 0 && (isWiggle || longest === 0)) {
        if (dp[i][0] < longest + 1) {
          dp[i] = [longest + 1, diff];
          max = Math.max(max, longest + 1);
        }
      }
    }
  }
  return max + 1;
};
// @lc code=end
