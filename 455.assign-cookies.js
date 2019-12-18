/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0;
  let nextChild = 0;
  for (let i = 0; i < s.length; i++) {
    const cookieSize = s[i];
    const greedFactor = g[nextChild];
    if (cookieSize >= greedFactor) {
      count++;
      nextChild++;
    }
  }
  return count;
};
// @lc code=end
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
