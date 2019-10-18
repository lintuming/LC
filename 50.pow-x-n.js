/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  const negative = n < 0 ? true : false;
  n = negative ? -1 * n : n;
  const result =
    n % 2 === 0 ? myPow(x * x, n / 2) : myPow(x * x, (n - 1) / 2) * x;
  return negative ? 1 / result : result;
};
// @lc code=end
console.log(myPow(2.1, 3));
