/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length===0)return 0;
  const length = prices.length;
  let buy = [],
    sell = [],
    rest = [];
  for (let i = 0; i < length; i++) {
    const price = prices[i];

    if (i === 0) {
      buy[0] = -1 * price;
      sell[0] = 0;
      rest[0] = 0;
      continue;
    }
    buy[i] = Math.max(rest[i-1] - price, buy[i - 1]);

    sell[i] = Math.max(buy[i - 1] + price, sell[i - 1]);
    rest[i] = Math.max(sell[i - 1], rest[i - 1]);
  }
  return Math.max(buy[length - 1], sell[length - 1], rest[length - 1]);
};
// @lc code=end
console.log(maxProfit([1, 2, 3, 0, 2]));
