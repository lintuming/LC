/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      const sub = s.slice(left + 1, right);
      if (sub.length > longest.length) {
        longest = sub;
      }
    }
  }
  return longest;
};
// @lc code=end
console.log(longestPalindrome('babad'))