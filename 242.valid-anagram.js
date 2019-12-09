/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const m = {};
  for (let i = 0; i < s.length; i++) {
    const ss = s[i],
      tt = t[i];
    if (m[ss] !== undefined) {
      m[ss] += 1;
    } else {
      m[ss] = 1;
    }
    if (m[tt] !== undefined) {
      m[tt] -= 1;
    } else {
      m[tt] = -1;
    }
  }
  return Object.keys(m).every(k => m[k] === 0);
};
// @lc code=end
