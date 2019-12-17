/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const l = nums.length;
  const sum = nums.reduce((acc, num) => acc + num, 0);
  if (sum % 2 !== 0) {
    return false;
  }
  //两个subset必须相等,所以2*sum(subset)===sum(nums)
  const half = sum / 2;
  const dp = Array.from({ length: half + 1 }, () => false);
  dp[0] = true;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n === half) return true;
    for (let j = half; j >= n; j--) {
      dp[j] = dp[j] || dp[j - n];
    }
  }
  return dp[half];
};
// @lc code=end
console.log(canPartition([1, 5, 11, 5]));
