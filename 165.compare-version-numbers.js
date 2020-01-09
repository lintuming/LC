/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  version1 = version1.split(".");
  version2 = version2.split(".");
  const len = Math.max(version1.length, version2.length);
  for (let i = 0; i < len; i++) {
    const v1 = +version1[i] || 0;
    const v2 = +version2[i] || 0;
    if (v1 > v2) {
      return 1;
    } else if (v1 < v2) {
      return -1;
    }
  }
  return 0;
};
// @lc code=end
console.log(compareVersion("01", "1"));
