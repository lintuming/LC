/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  coins = coins.sort((a, b) => a - b);
  const dp = Array.from({ length: amount + 1 }).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      } else {
        break;
      }
    }
  }
  return dp[amount] <= amount ? dp[amount] : -1;
};
// @lc code=end
