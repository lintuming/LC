/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  s = s.trim();
  if (s.length === 0) return false;
  let i = 0;
  let isFloat = false;
  function eat(char) {
    if (s[i] === char) {
      i++;
      return true;
    } else {
      return false;
    }
  }
  eat("+");
  eat("-");
  if (eat(".")) {
    isFloat = true;
  }
  if (!parseNumber()) {
    return false;
  }
  if (!isFloat&&s[i] === ".") {
    i++;
    parseNumber()
  }
  if (s[i] === "e") {
    i++;
    if (s[i] === "-" || s[i] === "+") {
      i++;
    }
    if (!parseNumber()) return false;
  }
  return i === s.length;

  function parseNumber() {
    let start = i;
    while (i < s.length && /[0-9]/.test(s[i])) {
      i++;
    }
    return i > start;
  }
};
// @lc code=end
console.log(isNumber("3."));
