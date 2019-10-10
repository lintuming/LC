/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
  var lenS = s.length;
  var lenP = p.length;
  var map = {};

  return check(0, 0);

  function check(sI, pI) {
    const key = sI + ":" + pI;
    if (map[key]) return map[key];
    if (sI > lenS || pI > lenP) return false;
    if (sI === lenS && pI === lenP) return true;

    if (s[sI] === p[pI] || p[pI] === ".") {
      map[key] =
        p[pI + 1] === "*"
          ? check(sI + 1, pI) || check(sI, pI + 2)
          : check(sI + 1, pI + 1);
    } else {
      map[key] = p[pI + 1] === "*" ? check(sI, pI + 2) : false;
    }
    return map[key];
  }
}

// @lc code=end
console.log(isMatch("aa", "a*"));
