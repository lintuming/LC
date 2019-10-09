/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let cur = 0,
    profit = 0,
    buy = Number.MAX_VALUE;
  while (cur <= prices.length - 1) {
    const price = prices[cur];
    if (buy > price) {
      buy = price;
    }
    if (price > buy) {
      profit += price - buy;
      buy = price;
    }
    cur++;
  }
  return profit;
};
// @lc code=end
