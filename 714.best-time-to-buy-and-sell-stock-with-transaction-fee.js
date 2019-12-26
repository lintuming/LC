/*
 * @lc app=leetcode id=714 lang=javascript
 *
 * [714] Best Time to Buy and Sell Stock with Transaction Fee
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  const dp = Array(prices.length).fill(0);
  const sold = Array(prices.length).fill(0);
  const hold = Array(prices.length).fill(0);
  hold[0] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    sold[i] = Math.max(sold[i - 1], hold[i - 1] + prices[i] - fee);
    hold[i] = Math.max(hold[i - 1], sold[i - 1] - prices[i]);
  }
  return Math.max(sold.pop(), hold.pop());
};
