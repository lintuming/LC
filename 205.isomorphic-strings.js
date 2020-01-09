/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    if (!map["s" + sChar]) {
      map["s" + sChar] = tChar;
    }
    if (!map["t" + tChar]) {
      map["t" + tChar] = sChar;
    }
    if()
  }
  return true;
};
// @lc code=end
console.log(isIsomorphic("aa", "ab"));
