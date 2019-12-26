/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const res = [0];
  /**
   *  n=1  n=2  n=3
   *  0    00   000
   *  1    01   010
   *      ----
   *       11   011
   *       10   010
   *           -----
   *            110
   *            111
   *            110
   *            100
   */
  for (let i = 0; i < n; i++) {
    const len = res.length;
    const mask = 1 << i;
    for (let j = len - 1; j >= 0; j--) {
      res.push(res[j] | mask);
    }
  }
  return res;
};
// @lc code=end
