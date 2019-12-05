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
  let result = null;
  for (let i = m; i <= n; i++) {
    if (result!==null) {
      result = result & i;
    } else {
      result = i;
    }
  }
  return result;
};
// @lc code=end
console.log(rangeBitwiseAnd(1, 3));
