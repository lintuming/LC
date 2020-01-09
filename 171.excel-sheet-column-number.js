/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let out = 0;
  let i = 0;
  while (i < s.length) {
    const char = s[s.length - 1 - i];
    out += (char.charCodeAt() - 64) * Math.pow(26, i);
    i++
  }
  return out
};
// @lc code=end
console.log(titleToNumber('ZY'))