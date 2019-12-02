/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (prices.length === 0) return 0;
  if (k > prices.length / 2) {
    let profit = 0;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
      if (prices[i] > min) {
        profit += prices[i] - min;
        min = prices[i];
      }
    }
    return profit
  } else {
    const dp = Array(prices.length).fill(0);
    for (let t = 0; t < k; t++) {
      let min = prices[0];
      let max = 0;
      for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i] - dp[i]);
        max = Math.max(max, prices[i] - min);
        dp[i] = max;
      }
    }
    return dp.pop();
  }
};
// @lc code=end
