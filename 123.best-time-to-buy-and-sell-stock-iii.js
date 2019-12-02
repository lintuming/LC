/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   const dp = Array(prices.length).fill(0);
//   for (let t = 0; t < 2; t++) {
//     let min = prices[0];
//     let max = 0;
//     for (let i = 0; i < prices.length; i++) {
//       min = Math.min(min, prices[i] - dp[i]);
//       max = Math.max(max, prices[i] - min);
//       dp[i] = max;
//     }
//   }
// };
var maxProfit = function(prices) {
  const left = Array(prices.length).fill(0);
  let theMaxProfit = 0;
  let max = 0;
  let minPrice = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    max = Math.max(prices[i] - minPrice, max);
    left[i] = max;
  }
  let maxPrice = -Number.MAX_VALUE;
  max = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    maxPrice = Math.max(maxPrice, prices[i]);
    max = Math.max(maxPrice - prices[i], max);
    theMaxProfit = Math.max(left[i] + max, theMaxProfit);
  }
  return theMaxProfit;
};
// @lc code=end
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
