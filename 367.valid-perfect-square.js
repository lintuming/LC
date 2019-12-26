/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true;
  let low = 0,
    high = num >>> 1;
  while (low !== high) {
    const square = Math.pow((low + high) >>> 1, 2);
    if (square > num) {
      high = (low + high) >>> 1;
    } else {
      low = (low + high) >>> 1;
    }
  }
  return Math.pow(low, 2) === num;
};
// @lc code=end
console.log(isPerfectSquare(16))