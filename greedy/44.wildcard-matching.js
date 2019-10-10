/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */

// @lc code=start
function solution1(s, p) {
  let lenS = s.length,
  lenP = p.length;
  const map = {};
  return check(0, 0);

  function check(idxS, idxP) {
    if (map[idxS + ":" + idxP] !== undefined) return map[idxS + ":" + idxP];
    if (idxS > lenS) return false;
    if (idxS === lenS && idxP === lenP) return true;

    if (p[idxP] === "?" || p[idxP] === s[idxS]) {
      map[idxS + ":" + idxP] = check(idxS + 1, idxP + 1);
    } else {
      map[idxS + ":" + idxP] =
        p[idxP] === "*"
          ? check(idxS, idxP + 1) || check(idxS + 1, idxP)
          : false;
    }
    return map[idxS + ":" + idxP];
  }
}
function solution2(s, p) {
  const sSize = s.length,
    pSize = p.length;
  const dp = [];
  for (let k = 0; k <= sSize; k++) {
    dp[k] = [];
  }
  dp[0][0] = true;
  for (let i = 0; i <= sSize; i++) {
    for (let j = 1; j <= pSize; j++) {
      if (i > 0 && (s[i - 1] === p[j - 1] || p[j - 1] === "?")) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        dp[i][j] = (i > 0 && dp[i - 1][j]) || dp[i][j - 1];
      }
    }
  }
  return !!dp[sSize][pSize];
}

const use = 1;
var isMatch = function(s, p) {
  return (use === 1 ? solution1 : solution2)(s, p);
};
// @lc code=end
console.log(isMatch("aa", "a*"));
