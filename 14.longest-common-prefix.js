/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length===0)return ''
  return strs.reduce((prev, cur) => {
    let i = 0;
    while (prev[i]&&cur[i]&&prev[i] === cur[i]) {
      i++;
    }
    return prev.slice(0, i);
  });
};
// @lc code=end
