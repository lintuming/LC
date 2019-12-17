/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const count = Array(26).fill(0);
  let left = 0,
    maxRepeat = 0,
    res = 0;
  const A_CODE = "A".charCodeAt();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const offset = char.charCodeAt() - A_CODE;
    maxRepeat = Math.max(maxRepeat, ++count[offset]);
    while (i - left + 1 - maxRepeat > k) {
      --count[s[left].charCodeAt() - A_CODE];
      left++;
    }
    res = Math.max(res, i - left + 1);
  }
  return res
};
// @lc code=end
