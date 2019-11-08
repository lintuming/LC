/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 1,
    right = ((x / 2) | 0) + 1;
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (mid * mid === x) {
      return mid;
    }
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
return right
};
// @lc code=end
