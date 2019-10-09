/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const gasTotal = gas.reduce((sum, item) => sum + item, 0);
  const costTotal = cost.reduce((sum, item) => sum + item, 0);
  if (costTotal > gasTotal) return -1;
  let l = gas.length,
    loc = 0,
    cap = 0;
  for (let i = 0; i < l; i++) {
    cap += gas[i] - cost[i];
    if (cap < 0) {
      cap = 0;
      loc = i + 1;
    }
  }
  return loc;
};
// @lc code=end
