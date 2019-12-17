/*
 * @lc app=leetcode id=397 lang=javascript
 *
 * [397] Integer Replacement
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  if (n === 1) return 0;
  const isOdd = n % 2 !== 0;
  if (isOdd) {
    return Math.min(integerReplacement(n + 1), integerReplacement(n - 1)) + 1;
  } else {
    return integerReplacement(n / 2) + 1;
  }
};
// @lc code=end
console.log(integerReplacement(7))