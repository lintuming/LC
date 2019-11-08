/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const result = [];
  let length = Math.max(a.length, b.length);
  a = a.padStart(length, "0");
  b = b.padStart(length, "0");
  while (length > 0) {
    length--;
    const r = (a[length] | 0) + (b[length] | 0) + (result[length] | 0);
    if (r - 2 >= 0) {
      result[length] = r - 2;
      length===0?result.unshift(1):(result[length - 1] = 1);
    } else {
      result[length] = r;
    }
  }
  return result.join('');
};
// @lc code=end
