/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  function backTrack(l, r, s) {
    if (l > r) return;
    if (l === 0 && r === 0) {
      result.push(s);
      return;
    }
    if (l > 0) backTrack(l - 1, r, s + "(");
    if (r > 0) backTrack(l, r - 1, s + ")");
  }
  backTrack(n, n, "");
  return result;
};
// @lc code=end
console.log(generateParenthesis(10))