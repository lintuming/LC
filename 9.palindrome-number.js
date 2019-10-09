/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  x = (x + "").split("");
  let i = ((x.length-1) / 2) | 0;
  let j = x.length % 2 === 0 ? i + 1 : i;
  while (i >= 0 && j <= x.length - 1) {
    if (x[i] !== x[j]) {
      return false;
    }
    i--;
    j++;
  }
  return true
};
// @lc code=end
console.log(isPalindrome(0))