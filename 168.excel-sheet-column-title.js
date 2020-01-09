/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  const base = "A".charCodeAt();
  let out = [];
  while (n > 0) {
    let r = n % 26;
    let d = (n / 26) >>> 0;
    if (r === 0) {
      r = 26;
      d = d - 1;
    }
    out.unshift(String.fromCharCode(base+r-1))
    n = d;
  }
  return  out.join('')
};
// @lc code=end
console.log(convertToTitle(1))