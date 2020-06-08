/*
 * @lc app=leetcode id=214 lang=javascript
 *
 * [214] Shortest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  let maxLen = 0;
  function isPalindrome(s) {
    if (s.length === 1) return true;
    if (!s) return false;
    let left = 0,
      right = s.length - 1;
    while (left <= right) {
      if (s[left] === s[right]) {
        left++;
        right--;
      } else {
        return false;
      }
    }
    return true;
  }
  for (let i = 0; i < s.length; i++) {
    if (isPalindrome(s.slice(0, i + 1))) {
      maxLen = Math.max(maxLen, i + 1);
    }
  }

  let out = s;
  for (let i = maxLen; i < s.length; i++) {
    out = s[i] + out;
  }
  return out;
};
// @lc code=end
