/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (divisor === 0) return 0;
  const sign =
    (dividend > 0 && divisor > 0) || (divisor < 0 && dividend < 0) ? 1 : -1;
  let i = 0;
  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);
  let result;
  if (divisor === 1 || divisor === -1) {
    result = dividend;
  } else {
    while ((dividend -= divisor) >= 0) {
      i++;
    }
    result = i;
  }

  return sign > 0
    ? Math.min(result, Math.pow(2, 31) - 1)
    : Math.max(-Math.pow(2, 31), -result);
};
// @lc code=end
console.log(divide(-1, 1));
