/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
//O(2n)
var longestValidParentheses = function(s) {
  const stack = [];
  s = s.split("");
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ".") {
      continue;
    }
    if (s[i] === "(") {
      stack.push(i);
    }
    if (s[i] === ")") {
      const start = stack.pop();
      if (start >= 0) {
        s[i] = ".";
        s[start] = ".";
        i = start;
      }
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ".") {
      let j = i + 1;
      while (s[j] === ".") {
        j++;
      }
      len = Math.max(len, j - i);
      i = j;
    } else {
      continue;
    }
  }
  return len;
};
// @lc code=end
console.log(longestValidParentheses("()"));
