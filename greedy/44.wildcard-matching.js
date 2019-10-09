/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */

// @lc code=start

var isMatch = function(s, p) {
  // let sLen = s.length,
  //   pLen = p.length;
  // function check(sI, pI) {
  //   if (sI === sLen && pI === pLen) {
  //     return true;
  //   }
  //   if (sI > sLen || pI > pLen) {
  //     return false;
  //   }
  //   const m = p[pI];
  //   const letter = s[sI];
  //   if (letter === m || m === "?") {
  //     return check(sI + 1, pI + 1);
  //   } else {
  //     if (m === "*" && p[pI + 1] === "*") {
  //       return check(sI, pI + 1);
  //     }
  //     return m === "*" ? check(sI, pI + 1) || check(sI + 1, pI) : false;
  //   }
  // }
  // return check(0, 0);
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
};
// @lc code=end
console.log(isMatch("aa", "a*"));
