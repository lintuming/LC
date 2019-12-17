/*
 * @lc app=leetcode id=316 lang=javascript
 *
 * [316] Remove Duplicate Letters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const stack = [];
  const count = {};
  const inStack = {};
  const start = Date.now();
  for (let char of s) {
    count[char] = count[char] + 1 || 1;
  }
  let i = 0;
  while (i < s.length) {
    const char = s[i];
    i++;
    count[char]--;
    if (inStack[char]) {
      continue;
    }
    if (stack.length) {
      while (
        stack[stack.length - 1] > char &&
        count[stack[stack.length - 1]] > 0
      ) {
        inStack[stack.pop()] = false;
      }
    }
    inStack[char] = true;
    stack.push(char);
  }
  return stack.join("");
};
// @lc code=end
console.log(removeDuplicateLetters("abacb"));
