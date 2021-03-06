/*
 * @lc app=leetcode id=201 lang=javascript
 *
 * [201] Bitwise AND of Numbers Range
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  if (m === 0) return 0;
  let result = m;
  for (let i = m + 1; i <= n; i++) {
    result &= i;
  }
  return result
};
// @lc code=end
console.log(rangeBitwiseAnd(1, 3));
