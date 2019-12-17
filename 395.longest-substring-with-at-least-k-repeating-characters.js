/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  const hash = {};
  s.split("").forEach(char => (hash[char] = hash[char] + 1 || 1));
  const keys = Object.keys(hash).filter(key => hash[key] < k);
  if (keys[0]) {
    let max = 0;
    for (let seg of s.split(keys[0])) {
      max = Math.max(max, longestSubstring(seg, k));
    }
    return max;
  }
  return s.length;
};

// @lc code=end
