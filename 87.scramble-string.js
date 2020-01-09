/*
 * @lc app=leetcode id=87 lang=javascript
 *
 * [87] Scramble String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  if (s1.length !== s2.length) return false;
  if (s1 === s2) return true;
  if (
    s1
      .split("")
      .sort()
      .join("") !==
    s2
      .split("")
      .sort()
      .join("")
  )
    return false;
  for (let i = 1; i < s1.length; i++) {
    let s11 = s1.slice(0, i);
    let s12 = s1.slice(i);
    let s21 = s2.slice(0, i);
    let s22 = s2.slice(i);
    if (isScramble(s11, s21) && isScramble(s12, s22)) return true;
    s21 = s2.slice(s1.length - i);
    s22 = s2.slice(0, s1.length - i);
    if (isScramble(s11, s21) && isScramble(s12, s22)) return true;
  }
  return false;
};
// @lc code=end
console.log(isScramble("abc", "cab"));
