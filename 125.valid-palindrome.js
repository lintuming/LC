/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left = 0,
    right = s.length - 1;
  const regExp = /[a-zA-Z0-9]/;
  while (left <= right) {
    if (!regExp.test(s[left])) {
      left++;
      continue;
    }
    if (!regExp.test(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() === s[right].toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end
console.log(isPalindrome("A man, a plan, a canal: Panama"))