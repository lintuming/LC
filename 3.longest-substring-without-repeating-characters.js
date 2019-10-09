/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = -Number.MAX_VALUE;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      continue;
    }
    const hashMap = {};
    let j = i;
    inner: while (j < s.length) {
      if (hashMap[s[j]]) {
        break inner;
      } else {
        hashMap[s[j]] = true;
        j++;
      }
    }
    len = Math.max(len, j - i);
  }
  return len===-Number.MAX_VALUE?0:len;
};
// @lc code=end
console.log(lengthOfLongestSubstring("abcabcbb"));
