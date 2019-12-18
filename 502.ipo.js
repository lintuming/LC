/*
 * @lc app=leetcode id=502 lang=javascript
 *
 * [502] IPO
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} W
 * @param {number[]} Profits
 * @param {number[]} Capital
 * @return {number}
 */

var findMaximizedCapital = function(k, W, Profits, Capital) {
  const set = [];
  for (let i = 0; i < Capital.length; i++) {
    set.push([Capital[i], Profits[i]]);
  }
  set.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < k; i++) {
    let left = 0,
      right = set.length,
      mid;
    while (left < right) {
      mid = ((left + right) / 2) | 0;
      if (set[mid][0] <= W) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    let maxProfit = 0,
      idx = 0;
    for (let i = right - 1; i >= 0; i--) {
      if (set[i][1] > maxProfit) {
        maxProfit = set[i][1];
        idx = i;
      }
    }
    W += maxProfit;
    set.splice(idx, 1);
  }
  return W;
};
// @lc code=end
console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]));
