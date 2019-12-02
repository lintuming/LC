/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const dp = Array.from({ length: nums.length }, () => []);
  let max = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i === 0) {
      dp[0].push(num, num);
      max = Math.max(num, max);
    } else {
      const [prevMin, prevMax] = dp[i - 1];
      const currentMin = Math.min(prevMin * num, num, num * prevMax);
      const currentMax = Math.max(prevMin * num, num, num * prevMax);
      max = Math.max(currentMax, max);
      dp[i].push(currentMin, currentMax);
    }
  }
  return max
};
// @lc code=end
console.log(maxProduct([-2]));
