/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(map[s[i]]);
      continue;
    } else {
      const p = stack.pop();
      if (p === s[i]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return stack.length===0?true:false;
};
// @lc code=end
