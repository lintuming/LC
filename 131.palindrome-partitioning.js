/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const result = [];
  if (!s) return result;
  const buffer = [];
  function isPalindrome(substr) {
    let i = 0,
      j = substr.length - 1;
    while (i <= j) {
      if (substr[i] === substr[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return true;
  }
  function backTrack(str) {
    if (!str) {
      return result.push(buffer.slice());
    }
    for (let i = 0; i < str.length; i++) {
      const substr = str.slice(0, i + 1);
      if (isPalindrome(substr)) {
        buffer.push(substr);
        backTrack(str.slice(i + 1));
        buffer.pop();
      }
    }
  }
  backTrack(s);
  return result;
};
// @lc code=end
console.log(partition("aab"));
