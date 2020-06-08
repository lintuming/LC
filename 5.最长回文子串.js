/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = "";
  for (let i = 0; i < s.length; i++) {
    for (let index = 0; index < 2; index++) {
      let m = i,
        n = i + index;
      while (m >= 0 && n <= s.length - 1 && s[m] === s[n]) {
        m--;
        n++;
      }
      const len = n - m - 1;
      if (len > max.length) {
        max = s.slice(m + 1, n);
      }
    }
  }
  return max
};
// @lc code=end
