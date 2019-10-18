/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim().split(" ");
  return s[s.length - 1].length;
};
// @lc code=end
console.log(lengthOfLastWord("a "))