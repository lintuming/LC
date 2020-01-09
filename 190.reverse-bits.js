/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    if (n & (1 === 1)) {
      res = (res << 1) + 1;
    } else {
      res = res << 1;
    }
    n = n >>> 1;
  }
  return res
};
// @lc code=end
