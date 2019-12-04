/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  if (!s) return "";
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      continue;
    }
    let end = i;
    while (i >= 0 && s[i] !== " ") {
      i--;
    }
    result += (result === "" ? "" : " ") + s.slice(i + 1, end + 1);
  }
  return result;
};
// @lc code=end
console.log(reverseWords("the sky is blue"));
