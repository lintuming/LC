/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const optimized={}
  function is(...args) {
    const [s1, s2, s3] = args;
    if (args.every(s => s.length === 0)) {
      return true;
    }
    if (s1.length + s2.length !== s3.length) {
      return false;
    }
    const first = s3[0];
    if (first === s1[0] && is(s1.slice(1), s2, s3.slice(1))) {
      return true;
    } else if (first === s2[0] && is(s1, s2.slice(1), s3.slice(1))) {
      return true;
    }
    return false;
  }
  return is(s1, s2, s3);
};
// @lc code=end
console.log(isInterleave('aabcc','dbbca','aadbbbaccc'))